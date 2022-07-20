import React from "react";
import Spinner from "../components/Spinner";
import "./LoadingPage.scss";

const LoadingPage: React.FC = (): JSX.Element => {
    return(
        <main className="LoadingPage">
            <Spinner width={100} height={100}/>
        </main>
    );
}

export default LoadingPage;
