import { NextPage } from "next";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

interface Movie {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_MOVIE_API_KEY);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )
    ).json();
    setMovies(results);
    setLoading((prev) => !prev);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
          </div>
        ))
      )}
      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
