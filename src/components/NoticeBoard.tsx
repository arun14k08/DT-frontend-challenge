import React from "react";
import { CloseIcon } from "../assets/SVGAsstes";

const NoticeBoard = () => {
    return (
        <div className=" fixed z-999 top-[108px] right-0 w-[95px] shadow-lg shadow-[rgba(0,0,0,.25)] rounded-3xl rounded-r-none overflow-hidden">
            <header className="px-[20px] py-[12px]  flex gap-[30px] vertical-text text-base text-white bg-black">
                <CloseIcon /> Notice Board
            </header>
        </div>
    );
};

export default NoticeBoard;
