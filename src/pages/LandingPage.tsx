import React from "react";
import LandingMenu from "../components/LandingMenu";
import "./LandingPage.scss";

const LandingPage: React.FC = (): JSX.Element => {
    return(
        <main className="LandingPage">
            <LandingMenu />
        </main>
    );
}

export default LandingPage;
