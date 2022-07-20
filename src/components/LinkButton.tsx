import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./Button.scss";

interface Props {
    text: string,
    link: string
}

const LinkButton: React.FC<Props> = (props: Props): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return(
        <button
            className="Button"
            onClick={() => navigate(props.link)}
        >
            {props.text}
        </button>
    );
}

export default LinkButton;
