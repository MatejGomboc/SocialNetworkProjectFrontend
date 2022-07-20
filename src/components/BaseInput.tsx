import React from "react";
import "./Input.scss";

interface Props {
    type: React.HTMLInputTypeAttribute,
    placeholder: string,
    onChange: (text: string) => void
}

const BaseInput: React.FC<Props> = (props: Props): JSX.Element => {
    const onChange: React.ChangeEventHandler<HTMLInputElement> =
        (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    }

    return(
        <input
            type={props.type}
            className="Input"
            placeholder={props.placeholder}
            onChange={onChange}
        />
    );
}

export default BaseInput;
