import React, { useState } from "react";
import Modal from "react-modal";
import { Box } from "@mui/material";
import { Contact } from "./Contact";


export const Footer: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopupOpen = () => {
    setPopupOpen(true);
    };

    const handlePopupClose = () => {
        setPopupOpen(false);
    };
    return(
        <footer className="bg-[#DDDDDD] text-black py-4 px-3 mt-16">
            <Box className="container mx-auto flex flex-wrap items-center justify-between">
                <Box className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                    <p className="text-xs text-gray-400 md:text-sm">Copyright 2024 &copy; All Rights Reserved</p>
                </Box>
                <Box className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                    <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                        <li><button onClick={handlePopupOpen} className="text-gray-400 border-none hover:text-white">Contact</button></li>
                    </ul>
                </Box>
                <Modal
                    isOpen={popupOpen}
                    onRequestClose={handlePopupClose}
                    style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        background: "white",
                    },
                    }}
                >
                </Modal>
            </Box>
            <Contact open={popupOpen} onClose={handlePopupClose} />
        </footer>
    )
}