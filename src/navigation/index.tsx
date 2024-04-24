import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../page/Home";




const Navigation: React.FC  = () => {
    return(
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
           
        </>
    )
}


export default Navigation;