import React, { useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

export const SearchForm: React.FC<{ id: string }> = ({ id }) => {
  const [rocketData, setRocketData] = useState<any>(null);
  const [rocketId, setRocketId] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [launchDate, setLaunchDate] = useState<string>("");
  const [rocketType, setRocketType] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    try {
      let apiUrl = `https://api.spacexdata.com/v3/rockets/${rocketId}`;
  
      const queryParams = [];
  
      if (status) {
        queryParams.push(`status=${status}`);
      }
      if (launchDate) {
        apiUrl = `https://api.spacexdata.com/v3/rockets/${launchDate}`;
      }
      if (rocketType) {
        queryParams.push(`rocketType=${rocketType}`);
      }
  
      if (queryParams.length > 0) {
        apiUrl += `?${queryParams.join("&")}`;
      }
  
      const response = await axios.get(apiUrl);
      setRocketData(response.data);
      setErrorMessage(""); 
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        setErrorMessage("No response from server. Please try again later.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    }
  };
  
  
  const handleChangeRocketId = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRocketId(event.target.value);
  };

  const handleChangeLaunchDate = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLaunchDate(event.target.value);
  };

  const handleChangeRocketType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRocketType(event.target.value);
  };

  return (
    <Box id={id} maxWidth="md" className="mx-auto bg-[#ddd]">
      {errorMessage && (
        <Typography variant="body1" color="error" gutterBottom>
          {errorMessage}
        </Typography>
      )}
      <Typography variant="h1" className="mt-5 mb-3 text-black text-5xl topic lg:pl-8 side">
        Find a{" "}
        <span>
          <Typography
            variant="h1"
            className="text-main topic inline animate__animated animate-pulse"
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
          fontWeight: "200",
        }}
        className="mt-1 pl-6 lg:pl-8 text-gray-900 py-1 text-l animate__animated animate__fadeIn animated__delay__4 rside"
      >
        Specialized search. Search for a specific rocket according to its
        status, original launch, or type.
      </Typography>
      <Box margin="10px" className="mb-8 py-5">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <Box maxWidth="sm" className="flex text-black">
            <input
              type="text"
              placeholder="Enter Rocket ID"
              className="text-black w-full md:w-80 px-3 h-10 rounded-l border-2 border-main focus:outline-none focus:border-main tracking-wider"
              value={rocketId}
              onChange={handleChangeRocketId}
            />
            <button
              type="submit"
              className="bg-transparent hover:bg-yel text-main hover:text-black rounded shadow hover:shadow-lg ml-2 px-4 border border-yel hover:border-transparent md:px-3 py-0 md:py-1"
            >
              Search
            </button>
          </Box>
          <Box maxWidth="sm" className="flex">
            <select
              value={launchDate}
              onChange={handleChangeLaunchDate}
              className="w-full h-10 border-2 border-main focus:outline-none focus:border-main text-black rounded px-2 md:px-3 py-0 md:py-1"
            >
              <option value="">Select Launch Date</option>
              <option value="falcon1">2006-03-24</option>
              <option value="falcon9">2010-06-04</option>
              <option value="falconheavy">2018-02-06</option>
              <option value="starship">2021-12-01</option>
            </select>
          </Box>
          <Box maxWidth="sm" className="flex">
            <select
              value={rocketType}
              onChange={handleChangeRocketType}
              className="w-full h-10 border-2 border-main focus:outline-none focus:border-main text-black rounded px-2 md:px-3 py-0 md:py-1"
            >
              <option value="">Select Rocket Type</option>
              <option value="falcon1">Falcon 1</option>
              <option value="falcon9">Falcon 9</option>
              <option value="falcon_heavy">Falcon Heavy</option>
              <option value="starship">Starship</option>
            </select>
          </Box>
        </form>
      </Box>
      {rocketData && (
        <Box margin="10px" className="my-5 py-5">
          <Typography variant="h2" gutterBottom className="mt-5 mb-3 text-black">
            Rocket Details:
          </Typography>
          <img
            src={rocketData?.flickr_images?.[0]}
            alt="rocket images"
            className="mx-auto"
          /><br/>
          <Typography gutterBottom variant="body1" className="side text-main">
            Rocket ID: <span><Typography className="text-black inline">{rocketData.rocket_id}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Rocket Name: <span><Typography className="text-black inline">{rocketData.rocket_name}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Description: <span><Typography className="text-black inline">{rocketData.description}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Rocket Type: <span><Typography className="text-black inline">{rocketData.rocket_type}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Rocket Status: <span><Typography className="text-black inline">{rocketData.active ? "Active" : "Inactive"}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Rocket Stages: <span><Typography className="text-black inline">{rocketData.stages}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Rocket Boosters: <span><Typography className="text-black inline">{rocketData.boosters}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Cost per Launch: <span><Typography className="text-black inline">{rocketData.cost_per_launch}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Success Rate: <span><Typography className="text-black inline">{rocketData.success_rate_pct}%</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            First Flight: <span><Typography className="text-black inline">{rocketData.first_flight}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Country: <span><Typography className="text-black inline">{rocketData.country}</Typography></span>
          </Typography>
          <Typography gutterBottom variant="body1" className="side text-main">
            Company: <span><Typography className="text-black inline">{rocketData.company}</Typography></span>
          </Typography>
          {rocketData.height && (
            <Typography gutterBottom variant="body1" className="side text-main">
              Height: <span><Typography className="text-black inline">{rocketData.height.meters} meters (
              {rocketData.height.feet} feet)</Typography></span>
            </Typography>
          )}
          {rocketData.diameter && (
            <Typography gutterBottom variant="body1" className="side text-main">
              Diameter: <span><Typography className="text-black inline">{rocketData.diameter.meters} meters (
              {rocketData.diameter.feet} feet)</Typography></span>
            </Typography>
          )}
          {rocketData.mass && (
            <Typography gutterBottom variant="body1" className="side text-main">
              Mass: <span><Typography className="text-black inline">{rocketData.mass.kg} kg ({rocketData.mass.lb} lb)</Typography></span>
            </Typography>
          )}
          {rocketData.payload_weights && rocketData.payload_weights.length > 0 && (
            <Typography gutterBottom variant="body1" className="side text-main">
              Payload Weight (LEO): <span><Typography className="text-black inline">{rocketData.payload_weights[0].kg} kg (
              {rocketData.payload_weights[0].lb} lb)</Typography></span>
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
