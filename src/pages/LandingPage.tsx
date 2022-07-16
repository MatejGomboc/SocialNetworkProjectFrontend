import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage: React.FC<{}> = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return(
        <main className="LandingPage">
            <nav className="LandingPage">
                <h1 className="LandingPage">
                    SocialNetworkProject
                </h1>
                <button
                    className="LandingPage"
                    onClick={() => navigate("/register")}
                >
                    REGISTER
                </button>
                <button
                    className="LandingPage"
                    onClick={() => navigate("/login")}
                >
                    LOGIN
                </button>
            </nav>
        </main>
    );
}

export default LandingPage;
