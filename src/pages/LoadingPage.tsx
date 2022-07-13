import React from "react";
import "./LoadingPage.scss";
import LoaderSpinner from "../images/spinner.svg";

const LoadingPage: React.FC<{}> = () => {
    return(
        <main className="LoadingPage">
            <img src={LoaderSpinner} className="LoadingPage" alt="Spinner" width="100" height="100" />
        </main>
    );
}

export default LoadingPage;
