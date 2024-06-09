import React, { useState } from "react";
import data from "../lib/data.json";

const Board = ({ isOpen, toggleOpen }) => {
    let assets = data.tasks[0].assets;
    return (
        <div
        onClick={(ev) => toggleOpen(ev, "inner")}
            className={`${isOpen ? "max-w-[392px] " : "max-w-[132px]"} cursor-pointer transition-all fixed top-[108px] left-0 z-[9999]`}
        >
            <div className="bg-black rounded-3xl min-h-[50px] rounded-l-none rounded-br-none py-[14px] pl-[18px] text-white">
                {!isOpen ?? (
                    <p className="text-base font-semibold">Journey Board</p>
                )}
            </div>

            <div className="py-[20px] px-8 shadow-[rgba(0,0,0,0.25)] shadow-lg rounded-3xl rounded-t-none h-[692px] bg-white">
                {isOpen ? (
                    <div>
                        <ul className="list-disc">
                            <li className="font-semibold text-base mb-[18px]">
                                {data.tasks[0].task_title}
                            </li>
                            {assets.map((asset) => {
                                return (
                                    <li
                                        className="text-base"
                                        key={asset.asset_id}
                                    >
                                        {asset.asset_title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <div className="rounded-[20px] flex justify-center items-center border-[1px] border-[#0029FF] text-[#0029FF] py-[7px] px-[28px]">
                        <p className="text-[36px]">{data.tasks.length}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Board;
