import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <nav className="navmenu relative flex w-full items-center justify-between py-2 shadow-sm shadow-neutral-700/10 lg:flex-wrap lg:justify-start" data-te-navbar-ref>
      <Box maxWidth="xl" className="flex items-center justify-between px-6">
            <Box maxWidth="l" className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentY" data-te-collapse-item>
            <ul className="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
                <li data-te-nav-item-ref>
                <Link className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80" to="/" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                    S P A C E &nbsp;X &emsp; &emsp;
                </Link>
                </li>
            </ul>
            </Box>

            <Box maxWidth="sm" className="my-1 flex items-center lg:my-0 lg:flex lg:ml-auto menu_items">
                <Link className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80" to="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                    All Rockets
                </Link>

                <Link className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80" to="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                    Find A Rocket
                </Link>
            </Box>

      </Box>
    </nav>
  );
};
