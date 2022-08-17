import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
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
