import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const isLoggedIn = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    setLoggedIn(data.isLoggedIn);
  };
  useEffect(() => {
    isLoggedIn();
  }, [router]);
  const handleLogout = async (event: any) => {
    event.preventDefault();
    const response = await fetch("/api/user/logout");
    const json = await response.json();
    if (response.status === 200) {
      console.log(json);
      router.push("/login");
    } else {
      console.log(json);
      router.push("/");
    }
  };
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname === "/about" ? styles.active : ""}>
              About
            </a>
          </Link>
        </li>
        {loggedIn ? (
          <li>
            <a onClick={handleLogout}>Log-out</a>
          </li>
        ) : (
          <li>
            <Link href="/login">
              <a>Sign-in</a>
            </Link>
          </li>
        )}
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          padding-left: 0;
        }
        li {
          width: 100px;
          text-align: center;
        }
        a:hover {
          opacity: 0.8;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
