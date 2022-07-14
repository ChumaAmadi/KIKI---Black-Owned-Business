import React from 'react';
import { slide as Menu } from "react-burger-menu";
import Link from 'next/link';

export default function Navbar()    {
  return (
    // Pass on our props
    <Menu>
      <Link className='menu-item' href="/home">
        Home
      </Link>

      <Link className='menu-item' href="/articles">
        Articles
      </Link>

      <Link className='menu-item' href="/about">
        About
      </Link>

      <Link className='menu-item' href="/contact">
        Contact
      </Link>
    </Menu>
  );
}