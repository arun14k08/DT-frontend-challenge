import React from "react";
import ArticleDisplayCard from "./ArticleDisplayCard";

const ArticleDisplay = () => {
    return (
        <div className="flex flex-col gap-3">
            <ArticleDisplayCard
                title={"Introduction"}
                content={"The 4SA Method , How to bring a idea into progress ?"}
            />
            <ArticleDisplayCard
                title={"Thread A"}
                content={
                    "How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?"
                }
            />
            <ArticleDisplayCard
                title={"Example 1"}
                content={"You have a concept , How will you put into progress?"}
            />
        </div>
    );
};

export default ArticleDisplay;
