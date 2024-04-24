import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface RocketData {
  id: number;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  payload_weights: {
    id: string;
    name: string;
    kg: number;
    lb: number;
  }[];
  first_stage: {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
  };
  flickr_images: string[];
}

const DataCard: React.FC<{ rocketData: RocketData }> = ({ rocketData }) => {
  return (
    <Box className="rounded overflow-hidden shadow-lg flex flex-col">
      <Link to="#">
        <Box className="relative">
          {/* Display the first image if available */}
          {rocketData.flickr_images.length > 0 && (
            <img
              className="w-full"
              src={rocketData.flickr_images[0]}
              alt="rocket info"
            />
          )}
          <Box className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></Box>
        </Box>
      </Link>
      <Box className="px-6 py-4 mb-auto">
        <Link
          to="#"
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
        >
          {rocketData.country}
        </Link>
      </Box>
      <Box className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <Link to="#">
            <span className="ml-1">{rocketData.first_flight}</span>
          </Link>
        </span>
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <Link to="#">
            <span className="ml-1">
              {rocketData.payload_weights[0].name}
            </span>
          </Link>
        </span>
      </Box>
    </Box>
  );
};

export const DataGrid: React.FC<{ rocketData: RocketData[] }> = ({
  rocketData,
}) => {
  return (
    <Box
      maxWidth="md"
      className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16"
    >
      <Typography
        variant="h1"
        className="mt-5 mb-3 text-5xl topic lg:pl-8 ml-auto"
      >
        All
        <span>{" "}
          <Typography variant="h1" className="text-yellow-300 topic inline">
            rockets
          </Typography>{" "}
        </span>
      </Typography>
      {/* <Box className="border-b mb-5 flex justify-between text-sm">
        <span className="ml-1">See All</span>
      </Box> */}
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {rocketData.map((rocket) => (
          <DataCard key={rocket.id} rocketData={rocket} />
        ))}
      </Box>
    </Box>
  );
};
