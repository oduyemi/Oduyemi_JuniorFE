import React from "react";
import { Box } from "@mui/material";




export const SearchForm: React.FC = () => {
    return(
        <Box maxWidth="md"  className="mx-auto">
            <form className="flex flex-col md:flex-row gap-4">
                <Box maxWidth="sm" className="flex">
                    <input 
                        type="text" 
                        placeholder="Search for Rockets"
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-main focus:outline-none focus:border-main tracking-wider"
                        />
                    <button type="submit" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg  ml-2 px-4 border border-yellow-300 hover:border-transparent md:px-3 py-0 md:py-1">Search</button>
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