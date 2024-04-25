import React from "react";
import { Box, Typography } from "@mui/material";




export const SearchForm: React.FC<{ id: string }> = () => {
    return(
        <Box id="search" maxWidth="md" className="mx-auto">
             <Typography 
                variant="h1" 
                className="mt-5 mb-3 text-5xl topic lg:pl-8"
            >
                Find a {" "}
                <span>
                    <Typography 
                        variant="h1" 
                        className="text-yel topic inline animate__animated animate-pulse" 
                    >
                        rocket
                    </Typography>{" "}
                </span>
                    now
            </Typography>
            <Typography 
                variant="h6" 
                paragraph 
                id="introSubTitle" 
                sx={{
                    fontWeight: "200"
                }}
                className=" mt-1 pl-6 lg:pl-8 text-gray-400 py-1 text-l  animate__animated animate__fadeIn animated__delay__4"
            >
                Specialized search. Search for a specific rocket according to their status, original launch, or type.
            </Typography>
            <form className="flex flex-col md:flex-row gap-4">
                <Box maxWidth="sm" className="flex">
                    <input 
                        type="text" 
                        placeholder="Search for Rockets"
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-main focus:outline-none focus:border-main tracking-wider"
                        />
                    <button type="submit" className="bg-transparent hover:bg-yel text-yel hover:text-black rounded shadow hover:shadow-lg  ml-2 px-4 border border-yel hover:border-transparent md:px-3 py-0 md:py-1">Search</button>
                </Box>
                <select id="pricingType" name="pricingType"
                    className="w-full h-10 border-2 border-main focus:outline-none focus:border-main text-black rounded px-2 md:px-3 py-0 md:py-1">
                    <option value="" selected>Choose an option</option>
                    <option value="status">Status</option>
                    <option value="launch">Original Launch</option>
                    <option value="type">Type</option>
                </select>
            </form>
        </Box>
    )
}