import styles from "../styles/index.module.scss";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
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
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(results);
  }, []);

  /*
  const getMovies = async () => {
    const json = await (await fetch(API_URL)).json();
    console.log(json);
    setMovies(json.results);
  };
  useEffect(() => {
    getMovies();
  }, []);
  */
  return (
    <div>
      <Seo title="Home" />
      {!movies.length ? (
        <h2>Loading...</h2>
      ) : (
        <section className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  const results = data.results;

  return {
    props: {
      results,
    },
  };
};

export default Home;
