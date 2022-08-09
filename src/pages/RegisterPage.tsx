import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./RegisterPage.scss";

const RegisterPage: React.FC = (): JSX.Element => {
    const handleRegisterSuccess = () => {
        alert("OK!");
    }

    const handleRegisterError = (status: string) => {
        alert(status);
    }

    return(
        <main className="RegisterPage">
            <RegisterForm onSubmitSuccess={handleRegisterSuccess} onSubmitError={handleRegisterError}/>
        </main>
    );
}

export default RegisterPage;
