import React from "react"
import PropTypes from "prop-types"

function TextInput({
    id,
    value = "",
    type,
    placeholder,
    onChange,
    children = null,
    required = false,
}) {
    return (
        <div className="relative w-full">
            <label
                htmlFor={id}
                className="input input-bordered flex items-center gap-2"
            >
                <input
                    id={id}
                    type={type}
                    className="grow"
                    placeholder={placeholder}
                    onChange={(event) => onChange(event)}
                    value={value}
                    required={required}
                />
                {children}
                <span className="sr-only">Icon</span>
            </label>
        </div>
    )
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node,
    required: PropTypes.bool,
}

export default TextInput
