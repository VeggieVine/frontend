import { useState } from "react";

export const useInput = (defaultValue = null, maxLength = null) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event) => {
        const inputValue = event.target?.value || "";
        const inputLength = inputValue.length;

        if (typeof maxLength === "number" && maxLength !== null) {
            if (inputLength <= maxLength) {
                setValue(inputValue);
            } else {
                alert(
                    `${event.target.id} tidak boleh lebih dari ${maxLength} karakter.`,
                );
            }
        } else {
            setValue(inputValue);
        }
    };

    return [value, handleChange];
};
