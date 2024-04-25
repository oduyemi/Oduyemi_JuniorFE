import React, { useState, useEffect } from "react";
import axios from "axios";
import { Banner } from "../../components/Banner";
import { DataGrid } from "../../components/DataGrid";
import { SearchForm } from "../../components/SearchForm";
import { Box } from "@mui/material";
import { Footer } from "../../components/Footer";

const Home: React.FC = () => {
  const [rocketData, setRocketData] = useState([]);

  useEffect(() => {
    const fetchRocketData = async () => {
      try {
        const response = await axios.get("https://api.spacexdata.com/v3/rockets");
        setRocketData(response.data);
      } catch (error) {
        console.error("Error fetching rocket data:", error);
      }
    };

    fetchRocketData();
  }, []); 

  return (
    <>
      <Banner id="home" />
      <SearchForm id="search" />
      <Box className="mt-14">
        <DataGrid id="rockets" rocketData={rocketData} />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
