import React from "react";
import "./LoadingPage.scss";
import Spinner from "../components/Spinner";

const LoadingPage: React.FC = (): JSX.Element => {
    return(
        <main className="LoadingPage">
            <Spinner width={100} height={100}/>
        </main>
    );
}

export default LoadingPage;
