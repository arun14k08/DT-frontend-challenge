import React from "react";
import {
    HomeIcon,
    MenuIcon,
    NotificationsIcon,
    ProfileIcon,
    SettingsIcon,
} from "../assets/SVGAsstes";

const Navbar = () => {
    return (
        <div className="flex justify-between bg-[#F0F0F0] py-[20px] shadow-[#0000001f] shadow-md">
            <div className="mx-[83px]">
                <img
                    src="https://deepthought.education/assets/images/logo/logo.svg"
                    alt="deep-thought-logo"
                    className="w-[310px] h-[50px]"
                />
            </div>
            <div className="mx-20 flex gap-6 items-center">
                <HomeIcon />
                <SettingsIcon />
                <NotificationsIcon />
                <ProfileIcon />
                <MenuIcon />
            </div>
        </div>
    );
};

export default Navbar;
