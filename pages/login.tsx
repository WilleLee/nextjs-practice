import { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <>
      <div className="account__container">
        <h2>Welcome back!</h2>
        <form className="account__form">
          <input
            placeholder="e-mail address"
            type="email"
            name="useremail"
            required
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            required
            minLength={8}
            maxLength={12}
          />
          <button type="submit">Login</button>
        </form>
        <span className="account__otherwise_container">
          <Link href="/join">
            <a>Make an account for free</a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;
