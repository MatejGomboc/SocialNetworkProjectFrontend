import React from "react";
import "./Spinner.scss";
import SpinnerImage from "../images/spinner.svg";

interface Props {
    width: number;
    height: number;
}

const Spinner: React.FC<Props> = (props): JSX.Element => {
    return(
        <img src={SpinnerImage} className="Spinner" alt="Spinner" width={props.width} height={props.height} />
    );
}

export default Spinner;
