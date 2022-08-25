import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const Join: NextPage = () => {
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      useremail: e.target.useremail.value,
      password: e.target.password.value,
      passwordConfirmation: e.target.passwordConfirmation.value,
    };
    const res = await fetch("/api/user/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 201) {
      router.push("/login");
    } else {
      console.log("failed");
    }
  };
  const [calledPush, setCalledPush] = useState<boolean>(false);
  useEffect(() => {
    if (calledPush === true) return;
    (async () => {
      const response = await fetch("/api/user");
      const { isLoggedIn } = await response.json();
      if (isLoggedIn) {
        setCalledPush(true);
        router.push("/");
      }
      return;
    })();
  }, []);

  return (
    <>
      <div className="account__container">
        <h2>Welcome to Wille Movies</h2>
        <form onSubmit={onSubmit} className="account__form">
          <input
            placeholder="first name"
            type="text"
            name="firstname"
            minLength={2}
            maxLength={15}
            required
          />
          <input
            placeholder="last name"
            type="text"
            name="lastname"
            minLength={2}
            maxLength={15}
            required
          />
          <input placeholder="e-mail" type="email" name="useremail" required />
          <input
            placeholder="password"
            type="password"
            name="password"
            minLength={8}
            maxLength={12}
            required
          />
          <input
            placeholder="password again"
            type="password"
            name="passwordConfirmation"
            minLength={8}
            maxLength={12}
            required
          />
          <button type="submit">Join</button>
        </form>
        <span className="account__otherwise_container">
          <span className="account__otherwise_message">
            Have an account already?
          </span>
          <Link href="/login">
            <a>Go log in</a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Join;
