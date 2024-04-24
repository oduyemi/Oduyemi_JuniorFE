import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <nav className="navmenu relative flex w-full items-center justify-between py-2 shadow-sm shadow-neutral-700/10 lg:flex-wrap lg:justify-start" data-te-navbar-ref>
      <Box maxWidth="xl" className="flex items-center justify-between px-6">
            <Box className="flex items-center">
                <button
                    className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
                    aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="[&>svg]:w-7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                        <path fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd" />
                    </svg>
                    </span>
                </button>
            </Box>

            <Box className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentY" data-te-collapse-item>
            {/* Left links */}
            <ul className="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
                <li data-te-nav-item-ref>
                <Link className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80" to="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                    Dashboard
                </Link>
                </li>
                <li data-te-nav-item-ref>
                <Link className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80" to="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                    Team
                </Link>
                </li>
                <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                <Link className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80" to="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                    Projects
                </Link>
                </li>
            </ul>
            </Box>

            <Box className="my-1 flex items-center lg:my-0 lg:ml-auto">
            <button type="button"
                className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                data-te-ripple-init data-te-ripple-color="light">
                Login
            </button>
            <button type="button"
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init data-te-ripple-color="light">
                Sign up for free
            </button>
            </Box>
      </Box>
    </nav>
  );
};
