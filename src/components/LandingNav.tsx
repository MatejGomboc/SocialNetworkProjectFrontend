import React from "react";
import LinkButton from "./LinkButton";
import "./LandingNav.scss";

const LandingNav: React.FC = (): JSX.Element => {
    return(
        <nav className="LandingNav">
            <h1 className="LandingNav">
                SocialNetworkProject
            </h1>

            <LinkButton text="REGISTER" link="/register" />
            <LinkButton text="LOGIN" link="/login" />
        </nav>
    );
}

export default LandingNav;
