import React from "react";
import "./Input.scss";

interface Props {
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const PasswordInput: React.FC<Props> = (props: Props): JSX.Element => {
    return(
        <input
            type="password"
            className="Input"
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
}

export default PasswordInput;
