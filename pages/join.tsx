import { NextPage } from "next";
import Link from "next/link";

const Join: NextPage = () => {
  return (
    <>
      <h2>Join here</h2>
      <div>
        <Link href="/login">
          <a>Go log in</a>
        </Link>
      </div>
      <style jsx>{`
        a {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Join;
