import React from "react";
import LandingNav from "../components/LandingNav";
import "./LandingPage.scss";

const LandingPage: React.FC = (): JSX.Element => {
    return(
        <main className="LandingPage">
            <LandingNav />
        </main>
    );
}

export default LandingPage;
