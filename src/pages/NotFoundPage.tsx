import React from "react";
import "./NotFoundPage.scss";

const NotFoundPage: React.FC<{}> = (): JSX.Element => {
    return(
        <main className="NotFoundPage">
            <h1 className="NotFoundPage">
                404 - Content Not Found
            </h1>
        </main>
    );
}

export default NotFoundPage;
