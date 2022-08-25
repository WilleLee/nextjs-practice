import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

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

export default Login;
