import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              Home
            </Link>
          </li>
          <li>
            <Link href="/protected-page" legacyBehavior>
              Protected Page
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/api/auth/logout" data-testid="logout">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/api/auth/login" data-testid="login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:nth-child(2) {
          margin-right: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
