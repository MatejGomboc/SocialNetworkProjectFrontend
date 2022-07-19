import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./LinkButton.scss";

interface Props {
    text: string,
    link: string
}

const LinkButton: React.FC<Props> = (props): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return(
        <button
            className="LinkButton"
            onClick={() => navigate(props.link)}
        >
            {props.text}
        </button>
    );
}

export default LinkButton;
