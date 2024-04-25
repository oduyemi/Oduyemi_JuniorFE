import React from "react";
import Modal from "react-modal";
import { Box, Typography, Button } from "@mui/material";
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
  description: string;
  rocket_id: string;
  rocket_name: string;
}

const DataCard: React.FC<{ rocketData: RocketData }> = ({ rocketData }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Box className="rounded overflow-hidden shadow-lg flex flex-col">
      <Link to="#" onClick={handleOpenModal}>
        <Box className="relative">
          {rocketData.flickr_images.length > 0 && (
            <img
              className="w-full cursor-pointer"
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
          onClick={handleOpenModal}
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
        >
          {rocketData.country}
        </Link>
      </Box>
      <Box className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <Link to="#" onClick={handleOpenModal}>
            <span className="ml-1">{rocketData.first_flight}</span>
          </Link>
        </span>
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <Link to="#" onClick={handleOpenModal}>
            <span className="ml-1">
              {rocketData.payload_weights[0].name}
            </span>
          </Link>
        </span>
      </Box>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={handleCloseModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "2rem",
              borderRadius: "0.5rem",
              border: "none",
              maxWidth: "80vw",
              maxHeight: "80vh",
              overflow: "auto",
            },
          }}
        >
          <Box className="text-center text-black">
            <Typography variant="h2" className="text-main" gutterBottom>
              Rocket Details:
            </Typography>
            <img
              src={rocketData?.flickr_images?.[0]}
              alt="rocket images"
              className="mx-auto w-1/3"
            />
            <Typography variant="body1">
              Rocket ID: {rocketData.rocket_id}
            </Typography>
            <Typography variant="body1">
              Rocket Name: {rocketData.rocket_name}
            </Typography>
            <Typography variant="body1">
              Description: {rocketData.description}
            </Typography>
            <button onClick={handleCloseModal}
            className="
              mt-3 bg-transparent point hover:bg-yel
              text-yel hover:text-black rounded
              shadow hover:shadow-lg py-2 px-4
              border border-yel hover:border-transparent
            "
            >
              Close
            </button>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default DataCard;

export const DataGrid: React.FC<{ id: string; rocketData: RocketData[] }> = ({
  rocketData,
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rocketData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(rocketData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Box maxWidth="md" className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <Typography
        variant="h1"
        className="mt-5 mb-3 text-5xl topic lg:pl-8 ml-auto"
      >
        All
        <span id="rockets">
          {" "}
          <Typography variant="h1" className="text-yel topic inline">
            Rockets
          </Typography>{" "}
        </span>
      </Typography>
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {currentItems.length > 0 ? (
          currentItems.map((rocket) => (
            <DataCard key={rocket.rocket_id} rocketData={rocket} />
          ))
        ) : (
          <Typography variant="body1">No rockets found on this page.</Typography>
        )}
      </Box>
      <Box className="flex justify-center mt-5">
        <button
          onClick={prevPage}
          className="
            mr-2 bg-transparent point hover:bg-yel
            text-yel hover:text-black rounded
            shadow hover:shadow-lg py-2 px-4
            border border-yel hover:border-transparent
          "
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          className="
            bg-transparent point hover:bg-yel
            text-yel hover:text-black rounded
            shadow hover:shadow-lg py-2 px-4
            border border-yel hover:border-transparent
          "
        >
          Next
        </button>
      </Box>
    </Box>
  );
};
