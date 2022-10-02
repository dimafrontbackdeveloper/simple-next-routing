import Link from 'next/link';
import React from 'react';

const Navbar = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Main</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a>Users</a>
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
