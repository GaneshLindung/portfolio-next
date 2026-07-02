import fs from 'node:fs';
import path from 'node:path';

import puppeteer from 'puppeteer-core';

import { profile } from '../../../data/content';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const PDF_VIEWPORT = {
  deviceScaleFactor: 1,
  height: 1800,
  width: 1440
};

const CHROME_ARGS = [
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage',
  '--disable-gpu',
  '--font-render-hinting=none'
];

const CHROME_IGNORED_DEFAULT_ARGS = ['--export-tagged-pdf', '--generate-pdf-document-outline'];

function candidatePaths() {
  const envPaths = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_PATH,
    process.env.GOOGLE_CHROME_SHIM
  ];

  const winPaths = [
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, 'Google', 'Chrome', 'Application', 'chrome.exe'),
    process.env['PROGRAMFILES(X86)'] &&
      path.join(process.env['PROGRAMFILES(X86)'], 'Google', 'Chrome', 'Application', 'chrome.exe'),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe'),
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
    process.env['PROGRAMFILES(X86)'] &&
      path.join(process.env['PROGRAMFILES(X86)'], 'Microsoft', 'Edge', 'Application', 'msedge.exe')
  ];

  return [
    ...envPaths,
    ...winPaths,
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
  ].filter(Boolean);
}

function findChromeExecutable() {
  return candidatePaths().find((candidate) => fs.existsSync(candidate));
}

async function waitForFonts(page) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
  });
}

async function waitForPageAssets(page) {
  await page.evaluate(async () => {
    const imagesReady = Promise.all(
      Array.from(document.images).map((image) => {
        if (image.complete) {
          return Promise.resolve();
        }

        return new Promise((resolve) => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        });
      })
    );

    await Promise.race([imagesReady, new Promise((resolve) => window.setTimeout(resolve, 15000))]);
  });
}

async function scrollThroughPage(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const distance = Math.max(500, Math.round(window.innerHeight * 0.55));
      let currentPosition = 0;

      const timer = window.setInterval(() => {
        const pageHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

        currentPosition += distance;
        window.scrollTo(0, currentPosition);

        if (currentPosition + window.innerHeight >= pageHeight) {
          window.clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
}

async function getPageHeight(page) {
  return page.evaluate(() =>
    Math.ceil(
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      )
    )
  );
}

async function removePdfOnlyElements(page) {
  await page.evaluate(() => {
    document.querySelector('.footer')?.remove();
  });
}

async function createPdfBuffer(origin) {
  const executablePath = findChromeExecutable();

  if (!executablePath) {
    throw new Error('Chrome atau Edge tidak ditemukan. Set CHROME_PATH atau PUPPETEER_EXECUTABLE_PATH.');
  }

  const browser = await puppeteer.launch({
    args: CHROME_ARGS,
    defaultViewport: PDF_VIEWPORT,
    executablePath,
    headless: true,
    ignoreDefaultArgs: CHROME_IGNORED_DEFAULT_ARGS
  });

  try {
    const page = await browser.newPage();
    const portfolioUrl = new URL('/', origin);
    portfolioUrl.searchParams.set('pdf', '1');

    await page.setViewport(PDF_VIEWPORT);
    await page.emulateMediaType('screen');
    await page.goto(portfolioUrl.toString(), {
      timeout: 60000,
      waitUntil: 'networkidle2'
    });

    await page.addStyleTag({
      content: `
        * {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }

        html,
        body {
          overflow: visible !important;
        }

        .footer {
          display: none !important;
        }
      `
    });

    await waitForFonts(page);
    await scrollThroughPage(page);
    await waitForPageAssets(page);
    await removePdfOnlyElements(page);

    const pageHeight = await getPageHeight(page);

    const pdfBuffer = await page.pdf({
      displayHeaderFooter: false,
      height: `${pageHeight}px`,
      margin: {
        bottom: '0px',
        left: '0px',
        right: '0px',
        top: '0px'
      },
      outline: false,
      pageRanges: '1',
      printBackground: true,
      scale: 1,
      tagged: false,
      width: `${PDF_VIEWPORT.width}px`
    });

    return Buffer.from(pdfBuffer);
  } finally {
    await browser.close();
  }
}

export async function GET(request) {
  try {
    const pdfBuffer = await createPdfBuffer(new URL(request.url).origin);
    const fileName = `portfolio-${profile.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}.pdf`;

    return new Response(pdfBuffer, {
      headers: {
        'Cache-Control': 'no-store',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': String(pdfBuffer.length),
        'Content-Type': 'application/pdf'
      }
    });
  } catch (error) {
    console.error('Gagal membuat PDF portfolio:', error);

    return Response.json(
      {
        error: 'Gagal membuat PDF portfolio.',
        message: error instanceof Error ? error.message : 'Terjadi kesalahan tidak dikenal.'
      },
      { status: 500 }
    );
  }
}
