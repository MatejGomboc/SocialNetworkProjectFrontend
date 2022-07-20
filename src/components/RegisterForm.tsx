import React from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import ActionButton from "./ActionButton";
import LinkButton from "./LinkButton";
import "./RegisterForm.scss";

const RegisterForm: React.FC = (): JSX.Element => {
    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
        (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handlePassword1Change: React.ChangeEventHandler<HTMLInputElement> =
        (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handlePassword2Change: React.ChangeEventHandler<HTMLInputElement> =
        (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> =
        (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> =
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    }

    return(
        <div className="RegisterForm">
            <h1 className="RegisterForm">
                Create new account
            </h1>
            <TextInput placeholder="username" onChange={handleUsernameChange}/>
            <PasswordInput placeholder="password" onChange={handlePassword1Change}/>
            <PasswordInput placeholder="repeat password" onChange={handlePassword2Change}/>
            <EmailInput placeholder="email address" onChange={handleEmailChange}/>
            <ActionButton text="REGISTER" onClick={handleSubmit} />
            <LinkButton text="BACK" link="/" />
        </div>
    );
}

export default RegisterForm;
