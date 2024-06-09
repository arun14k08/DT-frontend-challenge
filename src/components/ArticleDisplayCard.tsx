import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "../assets/SVGAsstes";

const ArticleDisplayCard = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div
            className={`${
                isOpen ? "h-auto" : "h-[55px]"
            } overflow-hidden transition-all`}
        >
            <header className="bg-[#F2F2F2] flex gap-5 items-center px-[14px] py-[16px]">
                <div
                    className={`p-2 cursor-pointer ${
                        !isOpen ? "rotate-180" : ""
                    } transition-all`}
                    onClick={() => handleToggle()}
                >
                    <ArrowUp />
                </div>
                <p className="font-semibold">{title}</p>
            </header>
            <section className="relative min-h-[67px] px-[12px]">
                {content}
                <span className="absolute bottom-1 right-1 text-[#606161] font-semibold">
                    See more
                </span>
            </section>
        </div>
    );
};

export default ArticleDisplayCard;
