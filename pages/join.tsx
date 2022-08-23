import { NextPage } from "next";
import Link from "next/link";
import styles from "@/styles/pages/join.module.scss";
import Router from "next/router";

const Join: NextPage = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      useremail: e.target.useremail.value,
      password: e.target.password.value,
    };
    console.log(body);
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(res.status);
    if (res.status === 201) {
      Router.push("/login");
    }
  };

  return (
    <>
      <div className={styles.join__container}>
        <h2>Welcome to Wille Movies</h2>
        <form onSubmit={onSubmit} className={styles.join__form}>
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
            maxLength={10}
            required
          />
          <button type="submit">Join</button>
        </form>
        <span>
          <span className="join__login_message">Have an account already?</span>
          <Link href="/login">
            <a>Go log in</a>
          </Link>
        </span>
      </div>
      <style jsx>{`
        a {
          text-decoration: underline;
        }
        .join__login_message {
          padding-right: 7px;
        }
      `}</style>
    </>
  );
};

export default Join;
