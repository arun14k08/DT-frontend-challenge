import React from "react";

const InputBox = ({title}) => {
    return (
        <div className="rounded-lg min-h-[95px] bg-[rgba(0,0,0,.05)] border-[#333333] border-[1px]">
            <p className="my-[4px] mx-[7px]">{title}</p>
            <div className="rounded-lg shadow-lg  bg-white border-[#333333] border-[1px]">
                <textarea name="" id="" className="w-full rounded-lg px-[7px] py-[7px]" placeholder="Enter Text here"/>
            </div>
        </div>
    );
};

export default InputBox;
