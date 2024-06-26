import React from "react";
import { InfoIcon } from "../assets/SVGAsstes";
import ArticleInput from "./ArticleInput";
import ArticleDisplay from "./ArticleDisplay";
import ThreadBuilder from "./ThreadBuilder";

const Card = ({ data }) => {
    return (
        <div className="rounded-[15px] shadow-lg shadow-[rgba(0,0,0,0.25)] overflow-hidden">
            <header className="bg-black  px-[30px] py-[14px] relative">
                <p className="text-white font-semibold text-center">
                    {data.asset_title}
                </p>
                <div className="size-[22px] rounded-full text-black bg-white flex justify-center items-center absolute top-[14px] right-[30px]">
                    i
                </div>
            </header>
            <div>
                <section className="mx-[27px] my-[12px]">
                    Description: {data.asset_description}
                </section>
                <section className="min-h-[580px]">
                    {data.asset_content.startsWith(
                        " https://www.youtube.com"
                    ) && (
                        <iframe
                            src={data.asset_content}
                            className="w-full min-h-[291px]"
                        ></iframe>
                    )}
                    {data.asset_type === "input_asset" &&
                        data.asset_content_type === "threadbuilder" && (
                            <ThreadBuilder />
                        )}
                    {data.asset_type === "input_asset" &&
                        data.asset_content_type === "article" && (
                            <ArticleInput />
                        )}
                    {data.asset_type === "display_asset" &&
                        data.asset_content_type === "article" && (
                            <ArticleDisplay />
                        )}
                </section>
            </div>
        </div>
    );
};

export default Card;
