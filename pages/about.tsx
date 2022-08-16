import { NextPage } from "next";
import Seo from "../components/Seo";

const About: NextPage = () => {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default About;
