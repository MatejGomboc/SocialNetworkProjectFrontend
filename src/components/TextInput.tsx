import React from "react";
import "./Input.scss";

interface Props {
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TextInput: React.FC<Props> = (props: Props): JSX.Element => {
    return(
        <input
            type="text"
            className="Input"
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
}

export default TextInput;
