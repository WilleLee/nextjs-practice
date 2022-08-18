import { NextPage } from "next";
import Seo from "../components/Seo";

const NotFound: NextPage = () => {
  return (
    <>
      <Seo title="Not Found" />
      <h2>Page Not Found 🥲</h2>
    </>
  );
};

export default NotFound;
