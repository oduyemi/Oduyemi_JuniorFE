import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { ImageSlider } from "./ImageSlider";






export const Banner: React.FC <{ id: string }> = () => {
  const images = [
    require("../assets/images/a.png"),
    require("../assets/images/b.png"),
    require("../assets/images/c.png")
  ];
  return (
    <>
        <Box className="bg-main text-white pb-20">
            <Box maxWidth="md" className="mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 banner">
                <Box id="home" className="flex flex-col justify-center items-start p-8 introdesc">
                    <Typography
                      variant="h1"
                      className="text-3xl md:text-5xl p-2 text-yel tracking-loose animate__animated animate__fadeIn animated__delay__4 animate-pulse">
                      SpaceX
                    </Typography>
                    <Typography 
                      variant="h2"
                      className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2"
                      sx={{
                        fontSize: "42x"
                      }}
                      >
                      Rockets : View &amp; Be Inspired
                    </Typography>
                    <Typography variant="h5" paragraph className="text-sm md:text-base text-gray-50 mb-4">
                      SpaceX has now landed more boosters than most other rockets ever!
                    </Typography>
                    <ScrollLink to="rockets"
                        className="bg-transparent point hover:bg-yel text-yel hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yel hover:border-transparent">
                        Explore Now</ScrollLink>
                </Box>
			          <Box maxWidth="md" className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 slider justify-center">
						      <ImageSlider images={images} />
                </Box>
              </Box>
            </Box>
        </>
  );
};
