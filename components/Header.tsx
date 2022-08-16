import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a>
          <h1>Next.js Practice</h1>
        </a>
      </Link>
      <Navbar />
      <style jsx>{`
        header {
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #161b22;
        }
        a {
          display: block;
          width: 30px;
          height: 30px;
          background-color: orange;
          border: none;
          border-radius: 50%;
        }
        h1 {
          text-indent: -9999px;
        }
      `}</style>
    </header>
  );
}
