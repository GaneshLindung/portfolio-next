import {
  SiChromatic,
  SiCss,
  SiFigma,
  SiFramer,
  SiGooglesearchconsole,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMiro,
  SiNextdotjs,
  SiNotion,
  SiPhp,
  SiReact,
  SiStorybook,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress
} from 'react-icons/si';
import { MdToken } from 'react-icons/md';
import { FiCode } from 'react-icons/fi';

const techIcons = {
  'chromatic': { icon: SiChromatic, color: '#FC521F' },
  'css': { icon: SiCss, color: '#1572B6' },
  'figma': { icon: SiFigma, color: '#F24E1E' },
  'framer motion': { icon: SiFramer, color: '#0055FF' },
  'html': { icon: SiHtml5, color: '#E34F26' },
  'javascript': { icon: SiJavascript, color: '#F7DF1E' },
  'laravel': { icon: SiLaravel, color: '#FF2D20' },
  'miro': { icon: SiMiro, color: '#FFD02F' },
  'next.js': { icon: SiNextdotjs, color: '#F8FAFC' },
  'notion': { icon: SiNotion, color: '#F8FAFC' },
  'php': { icon: SiPhp, color: '#777BB4' },
  'react': { icon: SiReact, color: '#61DAFB' },
  'seo dasar': { icon: SiGooglesearchconsole, color: '#4285F4' },
  'storybook': { icon: SiStorybook, color: '#FF4785' },
  'supabase': { icon: SiSupabase, color: '#3ECF8E' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4' },
  'tokens': { icon: MdToken, color: '#FBBF24' },
  'typescript': { icon: SiTypescript, color: '#3178C6' },
  'vite': { icon: SiVite, color: '#646CFF' },
  'wordpress': { icon: SiWordpress, color: '#21759B' }
};

function normalizeTechName(name) {
  return name.trim().toLowerCase();
}

export default function TechIcon({ name }) {
  const tech = techIcons[normalizeTechName(name)] ?? { icon: FiCode, color: '#5EEAD4' };
  const Icon = tech.icon;

  return (
    <span
      className="tag tech-icon-tag"
      role="img"
      aria-label={name}
      title={name}
      style={{ '--tech-color': tech.color }}
    >
      <Icon aria-hidden="true" focusable="false" />
    </span>
  );
}
