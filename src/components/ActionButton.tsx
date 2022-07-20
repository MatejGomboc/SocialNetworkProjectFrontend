import React from "react";
import "./Button.scss";

interface Props {
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ActionButton: React.FC<Props> = (props): JSX.Element => {
    return(
        <button
            className="Button"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default ActionButton;
