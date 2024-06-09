import React, { useState } from "react";
import {
    ArrowDown,
    ArrowUp,
    FAQIcon,
    FlowerIcon,
    LightBulbIcon,
    MessageIcon,
} from "../assets/SVGAsstes";
import InputBox from "./InputBox";

const ThreadBuilder = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div
            className={`${
                isOpen ? "h-auto" : "h-[55px]"
            } overflow-hidden transition-all px-[27px]`}
        >
            <header className="flex gap-[72px] px-[10px] -mx-[27px] py-[14px] bg-[rgba(254,255,192,.2)] shadow-lg items-center">
                <div
                    className={`p-2 cursor-pointer ${
                        !isOpen ? "rotate-180" : ""
                    } transition-all`}
                    onClick={() => handleToggle()}
                >
                    <ArrowUp />
                </div>
                <p className="text-[20px] font-bold">Thread A</p>
            </header>
            <div className="grid grid-cols-2 gap-[27px] mt-[30px]">
                <InputBox title={"Sub thread 1"} />
                <InputBox title={"Sub Interpretation 1"} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex  gap-[26px] mt-[27px] items-center">
                    <div className="flex gap-[14px]">
                        <LightBulbIcon />
                        <MessageIcon />
                        <FAQIcon />
                        <FlowerIcon />
                    </div>

                    <div className="flex gap-[17px]">
                        <p className="rounded-lg shadow-lg px-1 py-2 font-semibold flex gap-2 items-center">
                            Select Catalog
                            <ArrowDown />
                        </p>
                        <p className="rounded-lg shadow-lg px-1 py-2 font-semibold flex gap-2 items-center">
                            Select Process
                            <ArrowDown />
                        </p>
                    </div>
                </div>

                <p>button</p>
                <InputBox title={"Summary for thread A"} />
            </div>
        </div>
    );
};

export default ThreadBuilder;
