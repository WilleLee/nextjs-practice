import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
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
  return (
    <>
      <Seo title={title} />
      <div>
        <h3>{title}</h3>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return { props: { params } };
};

export default Info;