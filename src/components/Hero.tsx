import React from "react";
import data from "../lib/data.json";
import Card from "./Card";
const Hero = () => {
    return (
        <div className="mt-[18px]">
            <div className="flex justify-between mb-[37px]">
                <h1 className="text-[28px] font-bold text-[#0029FF]">
                    {data.title}
                </h1>
                {/* button */}
            </div>
            <div className="p-[25px] bg-[#E9ECEF] rounded-[5px] grid gap-[10px]">
                <h3 className="text-[20px] font-bold">
                    {data.tasks[0].task_title}
                </h3>
                <p className="text-[14px]">{data.tasks[0].task_description}</p>
            </div>
            <div className="grid grid-cols-2 gap-[52px] mt-[75px]">
                {data.tasks[0].assets.map((asset) => {
                    return <Card key={asset.asset_id} data={asset} />;
                })}
            </div>
        </div>
    );
};

export default Hero;
