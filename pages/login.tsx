import { sessionOptions } from "@/lib/session";
import publicOnly from "@/hooks/publicOnly";
import { withIronSessionSsr } from "iron-session/next";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";

const Login = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  publicOnly(user);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const body = {
      useremail: event.target.useremail.value,
      password: event.target.password.value,
    };
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      router.push("/");
    } else {
      console.log(data?.message);
    }
  };

  return (
    <>
      <Seo title="login" />
      <div className="account__container">
        <h2>Welcome back!</h2>
        <form onSubmit={onSubmit} className="account__form">
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

export const getServerSideProps = withIronSessionSsr(async ({ req, res }) => {
  const user = req.session.user;

  if (user === undefined) {
    res.statusCode === 302;
    res.end();
    return {
      props: {
        user: { isLoggedIn: false, useremail: "" },
      },
    };
  }
  return { props: { user: req.session.user } };
}, sessionOptions);

export default Login;
