import React from "react";
import LinkButton from "./LinkButton";
import "./LandingMenu.scss";

const LandingMenu: React.FC = (): JSX.Element => {
    return(
        <nav className="LandingMenu">
            <h1 className="LandingMenu">
                SocialNetworkProject
            </h1>

            <LinkButton text="REGISTER" link="/register" />
            <LinkButton text="LOGIN" link="/login" />
        </nav>
    );
}

export default LandingMenu;
