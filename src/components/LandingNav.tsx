import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./LandingNav.scss";

const LandingNav: React.FC<{}> = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return(
        <nav className="LandingNav">
            <h1 className="LandingNav">
                SocialNetworkProject
            </h1>
            <button
                className="LandingNav"
                onClick={() => navigate("/register")}
            >
                REGISTER
            </button>
            <button
                className="LandingNav"
                onClick={() => navigate("/login")}
            >
                LOGIN
            </button>
        </nav>
    );
}

export default LandingNav;
