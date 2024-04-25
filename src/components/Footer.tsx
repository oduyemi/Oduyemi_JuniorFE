import React from "react";
import { Box } from "@mui/material";


export const Footer: React.FC = () => {
    return(
        <footer className="bg-[#DDDDDD] text-black py-4 px-3 mt-16">
            <Box className="container mx-auto flex flex-wrap items-center justify-between">
                <Box className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                    <p className="text-xs text-gray-400 md:text-sm">Copyright 2024 &copy; All Rights Reserved</p>
                </Box>
                <Box className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                    <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                        <li><button className="text-gray-400 border-none hover:text-white">Contact</button></li>
                    </ul>
                </Box>
            </Box>
        </footer>
    )
}