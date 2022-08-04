import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

function article({ infos }) {
    // const router = useRouter();
    // const { pid } = router.query;

    return (
        <>
            <h1>{infos.title}</h1>
            <p>{infos.body}</p>
            <br />
            {/* <button onClick={() => router.push("/")}>Go back</button> */}
            <Link href="/">
                <button>Back</button>
            </Link>
        </>
    );
}

// //context returns the props from the url such as id
// //getServerSideProps()
// export const getServerSideProps = async (context) => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//     );

//     const infos = await res.json();

//     return {
//         props: {
//             infos,
//         },
//     };
// };

//combination getStaticProps and getStaticPaths to dynamically generate the paths with the data
export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );

    const infos = await res.json();

    return {
        props: {
            infos,
        },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const articles = await res.json();

    const ids = articles.map((article) => article.id);

    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        // paths: { params: { id: "1", id: "2", id: "3" } },
        paths,
        fallback: false, //returns a 404:PAGE ;
    };
};

export default article;
