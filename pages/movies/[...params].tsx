import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useEffect, useState } from "react";
import Detail from "../../components/Detail";
import Seo from "../../components/Seo";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: { id: number; name: string; poster_path: string };
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const Info: NextPage = ({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [title, id] = params.params || [];

  const BASE_API_URL = "https://api.themoviedb.org/3/movie/";
  const API_KEY = `?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const API_URL = BASE_API_URL + id + API_KEY;

  const [movie, setMovie] = useState<Movie>();
  const getMovie = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    setMovie(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Seo title={title} />
      <div className="container">
        <h3>{title}</h3>
        {!movie ? <p>loading...</p> : <Detail movie={movie} />}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return { props: { params } };
};

export default Info;
