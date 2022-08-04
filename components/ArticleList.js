import React from "react";
import articlesStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
    return (
        <>
            <div className={articlesStyles.grid}>
                {articles.map((article) => {
                    return <ArticleItem key={article.id} article={article} />;
                })}
            </div>
        </>
    );
};

export default ArticleList;
