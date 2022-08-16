import styles from "../styles/Movie.module.scss";

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500/";

type Props = {
  poster_path: string;
  title: string;
};

const Movie = ({ poster_path, title }: Props) => {
  return (
    <div className={[styles.container, "container"].join(" ")}>
      <img src={`${BASE_URL_IMG + poster_path}`} />
      <h2>{title}</h2>
      <style jsx>{`
        img {
          width: 100%;
        }
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Movie;
