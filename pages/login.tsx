import { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <>
      <h2>login page</h2>
      <div>
        <Link href="/join">
          <a>Make an account for free</a>
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

export default Login;
