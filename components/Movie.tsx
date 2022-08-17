import Link from "next/link";
import styles from "../styles/Movie.module.scss";

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500/";

type Props = {
  poster_path: string;
  title: string;
};

const Movie = ({ poster_path, title }: Props) => {
  return (
    <div className={[styles.container, "container"].join(" ")}>
      <Link href="/">
        <a>
          <img
            className={styles.movie__poster}
            src={`${BASE_URL_IMG + poster_path}`}
          />
        </a>
      </Link>
      <h2>{title}</h2>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Movie;
