import React, { useState } from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import ActionButton from "./ActionButton";
import LinkButton from "./LinkButton";
import "./RegisterForm.scss";
import AuthService from "../services/AuthService";

const RegisterForm: React.FC = (): JSX.Element => {
    const [username, setUsername] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleSubmit = () => {
        AuthService.register(username, password1, password2, email).then<void, void>(
            () => {
                alert("OK!");
            },
            (reason: any) => {
                if (reason instanceof Error) {
                    alert(reason.message);
                } else {
                    alert("Unknown error type: " + reason);
                }
            }
        );
    }

    return(
        <div className="RegisterForm">
            <h1 className="RegisterForm">
                Create new account
            </h1>
            <TextInput placeholder="username" onChange={setUsername}/>
            <PasswordInput placeholder="password" onChange={setPassword1}/>
            <PasswordInput placeholder="repeat password" onChange={setPassword2}/>
            <EmailInput placeholder="email address" onChange={setEmail}/>
            <ActionButton text="REGISTER" onClick={handleSubmit} />
            <LinkButton text="BACK" link="/" />
        </div>
    );
}

export default RegisterForm;
