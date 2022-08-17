const API_KEY_MOVIE = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/old/:path*",
        destination: "/new/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination:
          "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY_MOVIE,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY_MOVIE}`,
      },
    ];
  },
};

module.exports = nextConfig;
