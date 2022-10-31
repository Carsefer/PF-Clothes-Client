import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import SellPage from "../SellPage/SellPage";
import BuyPage from "../BuyPage/BuyPage";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Styles from "./ProfilePage.module.css"

const ProfilePage = () => {
    return (
        <div className={Styles.ProfilePage}>
            <NavBar />
            <div className={Styles.profileLinksDiv}>
                <Link className={Styles.profileLinks} to="/home/profile">PERFIL</Link>
                <Link className={Styles.profileLinks} to="/home/profile/buys">COMPRAS</Link>
                <Link className={Styles.profileLinks} to="/home/profile/sells">VENTAS</Link>
            </div>
            <div className={Styles.profileRoutes}>
                <Routes>
                    <Route index element = {<Profile/>} />
                    <Route path="/buys" element={<BuyPage/>} />
                    <Route path="/sells/*" element={<SellPage/>} />
                </Routes>
            </div>
        </div>
    );
}

export default ProfilePage