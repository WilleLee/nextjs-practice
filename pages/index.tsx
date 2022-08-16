import styles from "../styles/index.module.scss";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Seo from "../components/Seo";

const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
const BASE_API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=";
const API_URL = BASE_API_URL + API_KEY;
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

const Home: NextPage = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    setMovies(results);
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies ? (
        <h2>Loading...</h2>
      ) : (
        <section className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          ))}
        </section>
      )}
      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await (await fetch(API_URL)).json();

  return {
    props: {
      results,
    },
  };
};

export default Home;
