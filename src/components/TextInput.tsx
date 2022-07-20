import React from "react";
import BaseInput from "./BaseInput";

interface Props {
    placeholder: string,
    onChange: (text: string) => void
}

const TextInput: React.FC<Props> = (props: Props): JSX.Element => {
    return(
        <BaseInput
            type="text"
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
}

export default TextInput;
