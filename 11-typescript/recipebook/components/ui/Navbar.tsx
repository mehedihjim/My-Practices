"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favoriteCount = useSelector(
    (state: any) => state.recipes.favoriteRecipes.length
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-sepia-50 border-b border-gray-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            FlavorVault
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-black"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/favourites"
                className="block py-2 px-3 text-black relative"
                aria-current="page"
              >
                Favourites
              </Link>

              {favoriteCount > 0 && (
                <span className="absolute top-1 -right-1 text-white bg-red-600 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold animate-pulse">
                  {favoriteCount}
                </span>
              )}
            </li>
            <li>
              <Link
                href="/aboutus"
                className="block py-2 px-3 text-black"
                aria-current="page"
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
