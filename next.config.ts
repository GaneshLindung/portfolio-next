import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = isDev
  ? {
      allowedDevOrigins: [
        'localhost',
        '127.0.0.1',
        '192.168.1.11',
        '172.30.235.127',
      ],
    }
  : {};

export default nextConfig;
