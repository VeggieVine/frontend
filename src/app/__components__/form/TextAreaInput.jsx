import React from "react"
import PropTypes from "prop-types"

function TextAreaInput({
    id,
    value = "",
    placeholder,
    onChange,
    children = null,
    required = false,
}) {
    return (
        <label htmlFor={id} className="form-control w-full h-full">
            <textarea
                id={id}
                className="textarea textarea-bordered textarea-md w-full h-full"
                placeholder={placeholder}
                onChange={(event) => onChange(event)}
                value={value}
                required={required}
            />
            {children}
        </label>
    )
}

TextAreaInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node,
    required: PropTypes.bool,
}

export default TextAreaInput
