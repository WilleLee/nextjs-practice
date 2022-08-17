import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

const Info: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const [movie, setMovie] = useState<Movie>();
  const getMovie = async () => {
    const json = await (await fetch(`/api/movies/${router.query.id}`)).json();
    setMovie(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <Seo title="movie" />
      <div>{!movie ? <h3>Loading...</h3> : <h3>{movie.title}</h3>}</div>
    </>
  );
};

export default Info;
