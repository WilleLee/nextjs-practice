import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
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
