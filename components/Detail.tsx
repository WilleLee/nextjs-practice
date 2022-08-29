import styles from "@/styles/Detail.module.scss";
import styled, { keyframes } from "styled-components";

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

type Props = { movie: Movie };

const Detail = ({ movie }: Props) => {
  console.log(movie);
  const rate = `${movie.vote_average * 10}%`;

  /*
  const getColors = keyframes`
    from {
      width: 0;
    }
    to {
      width: ${rate};
    }
  `;
  const ColoredStars = styled.div`
    animation: ${getColors} 0.5s linear forwards;
  `;
*/

  return (
    <>
      <div className={styles.vote_average__container}>
        <div className={styles.vote_average__basic_stars}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <div style={{ width: rate }}>
          <div className={styles.vote_average__colored_stars}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </div>
      <ul className={styles.genres}>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <p>{movie.overview}</p>
    </>
  );
};

export default Detail;
