import React from "react";
import { ExpandIcon, MenuHorizontalIcon, MenuIcon, RedoIcon, UndoIcon } from "../assets/SVGAsstes";

const ArticleInput = () => {
    return (
        <div className="w-full border-[#D1CECE] border-[1px] px-[32px] py-[28px] h-max">
            <div className="flex flex-col gap-[28px] h-max">
                <div className="flex flex-col gap-4">
                    <p>Title</p>
                    <input
                        type="text"
                        className="rounded-lg shadow-lg min-h-[43px]"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p>Content</p>
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <header className="py-[14px] px-[20px] text-[#616161] grid grid-cols-8 shadow-lg gap-3">
                            <p>File</p>
                            <p>Edit</p>
                            <p>View</p>
                            <p>Insert</p>
                            <p>Format</p>
                            <p>Tools</p>
                            <p>Table</p>
                            <p>Help</p>
                            <UndoIcon />
                            <RedoIcon />
                            <ExpandIcon />
                            <MenuHorizontalIcon />
                        </header>
                        <textarea className="min-h-[142px] mt-4 w-full"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleInput;
