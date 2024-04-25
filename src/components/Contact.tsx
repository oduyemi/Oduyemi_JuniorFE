import React from "react";
import Modal from "react-modal";
import { Box, Typography } from "@mui/material";


interface ContactProps {
    open: boolean;
    onClose: () => void;
  }


export const Contact: React.FC<ContactProps> = ({ open, onClose }) => {
    
    return(
        <Modal isOpen={open} onRequestClose={onClose} className="Modal">
      <Box className="grid items-center justify-center bg-white bg-opacity-75">
        <Box className="formbox bg-main text-gray-300 rounded-3xl shadow-xl w-full py-6 md:py-8 mb-10 mt-4">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
          <Box className="py-3 px-5 md:px-10">
            <Box className="text-center mb-2">
              <Typography
                variant="h4"
                className="text-2xl text-white"
                sx={{
                  fontSize: "18px",
                  fontWeight: "600"
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="h6"
                className=""
                sx={{
                  fontSize: "10px",
                }}
              >
                Please enter your name and email address.
              </Typography>
            </Box>
            <form>
              <Box maxWidth="400px">
                <Box className="mb-1">
                  <label htmlFor="fullname" className="text-xs font-semibold px-1">Enter Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    className="
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    placeholder="e.g Solomon Edem"
                    required
                  />
                </Box>
                <Box className="mb-1">
                  <label htmlFor="email" className="text-xs font-semibold px-1">Enter Email Address</label>
                  <input
                    name="email"
                    type="text"
                    className="
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    placeholder="e.g youremail@gmail.com"
                    required
                  />
                </Box>
                <Box className="mb-1">
                  <label htmlFor="phone" className="text-xs font-semibold px-1">Enter Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    placeholder="e.g +2347066338756"
                    required
                  />
                </Box>
                <Box className="mb-1">
                  <label htmlFor="topic" className="text-xs font-semibold px-1">Topic</label>
                    <input
                            type="text"
                            name="topic"
                            className="
                            w-full px-3 py-1 rounded-xl
                            border-2 border-gray-200 outline-none
                            focus:border-green-700
                            "
                            placeholder="Topic"
                            required
                        />
                </Box>
                <Box className="mb-1">
                  <label htmlFor="productInterest" className="text-xs font-semibold px-1">Message</label>
                  <textarea
                    name="message"
                    className="
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    placeholder="Message"
                    required
                  ></textarea>
                </Box>
                
                <Box className="mb-1">
                  <label htmlFor="contactPreference" className="text-xs font-semibold px-1">Preferred Communication Method</label>
                  <select
                    name="contactPreference"
                    className="
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    required
                  >
                    <option value="">Select Your Preferred Communication Method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </Box>
                <Box className="mb-1 mt-3 text-center">
                  <button
                    type="submit"
                    className="
                        bg-transparent point hover:bg-yel
                        text-yel hover:text-black rounded
                        shadow hover:shadow-lg py-2 px-4
                        border border-yel hover:border-transparent
                    "
                  >
                    Submit
                  </button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Modal>
    )
}