import React from "react";
import BaseInput from "./BaseInput";

interface Props {
    placeholder: string,
    onChange: (text: string) => void
}

const PasswordInput: React.FC<Props> = (props: Props): JSX.Element => {
    return(
        <BaseInput
            type="password"
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
}

export default PasswordInput;
