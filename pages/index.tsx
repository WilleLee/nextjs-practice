import type { NextPage } from "next";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title="Home" />
      <h1>hello, next.js</h1>
    </div>
  );
};

export default Home;
