const API_KEY_MOVIE = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
