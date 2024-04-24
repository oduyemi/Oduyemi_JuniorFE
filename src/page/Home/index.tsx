import React from "react";
import { Banner } from "../../components/Banner"
import { DataGrid } from "../../components/DataGrid";
import { SearchForm } from "../../components/SearchForm";
import { Box } from "@mui/material";
import { Footer } from "../../components/Footer";




const Home: React.FC = () => {
    return(
        <>
            <Banner />
            <SearchForm />
            <Box className="mt-8">
                <DataGrid />
            </Box>
            <Footer />
        </>
    )
}

export default Home;