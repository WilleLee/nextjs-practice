import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Movie.module.scss";

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500/";

type Props = {
  id: number;
  poster_path: string;
  title: string;
};

const Movie = ({ id, poster_path, title }: Props) => {
  const router = useRouter();
  const goToInfo = () => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className={[styles.container, "container"].join(" ")}>
      <div onClick={() => goToInfo()}>
        <img
          className={styles.movie__poster}
          src={`${BASE_URL_IMG + poster_path}`}
        />
      </div>
      <Link href={`/movies/${title}/${id}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
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
