import React from "react";
import LinkButton from "./LinkButton";
import "./RegisterForm.scss";

const RegisterForm: React.FC = (): JSX.Element => {
    return(
        <div className="RegisterForm">
            <h1 className="RegisterForm">Create new account</h1>
            <input
                type="text"
                className="RegisterForm"
                placeholder="username"
            />
            <input
                type="password"
                className="RegisterForm"
                placeholder="password"
            />
            <input
                type="password"
                className="RegisterForm"
                placeholder="repeat password"
            />
            <input
                type="email"
                className="RegisterForm"
                placeholder="email address"
            />
            <LinkButton text="BACK" link="/"/>
        </div>
    );
}

export default RegisterForm;
