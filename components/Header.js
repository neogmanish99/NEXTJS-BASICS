import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
    const x = 3;
    return (
        <>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with latest web dev news
            </p>
            {/* //styled jsx */}
            {/* <style jsx>
                {`
                    h1 {
                        color: ${x > 3 ? "red" : "blue"};
                    }
                `}
            </style> */}
        </>
    );
};

export default Header;
