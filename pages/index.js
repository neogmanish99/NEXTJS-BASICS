import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
    console.log(articles);
    return (
        <>
            <ArticleList articles={articles} />
        </>
    );
}

//getStaticProps used in the way of fetching data
export const getStaticProps = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=6`
    );

    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
};
