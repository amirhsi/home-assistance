"use client";

import React, { useState } from "react";
import ListItem from "./ListItem";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ justifyContent: "center" }}
      className={`absolute left-0 top-0 z-20 flex w-full mt-5`}
    >
      <div
        style={{ borderRadius: 12 }}
        className="container px-12 bg-slate-400"
      >
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 ">
            <Link href="/#" className="block w-full py-5">
              <p className="color-white">Logo</p>
            </Link>
          </div>
          <div>
            <button
              onClick={() => setOpen(!open)}
              id="navbarToggler"
              className={` ${
                open && "navbarTogglerActive"
              } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>
            <nav
              id="navbarCollapse"
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                !open && "hidden"
              } `}
            >
              <ul className="lg:flex">
                <ListItem NavLink="/">Home</ListItem>
                <ListItem NavLink="/about">About</ListItem>
                <ListItem NavLink="/blog">Blog</ListItem>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
