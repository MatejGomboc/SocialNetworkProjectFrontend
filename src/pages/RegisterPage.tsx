import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./RegisterPage.scss";

const RegisterPage: React.FC = (): JSX.Element => {
    return(
        <main className="RegisterPage">
            <RegisterForm />
        </main>
    );
}

export default RegisterPage;
