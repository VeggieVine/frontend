import React from "react";
import PropTypes from "prop-types";

function SubmitButton({ id, children = null, variant = "block" }) {
    return (
        <button
            type="submit"
            id={id}
            className={`btn btn-primary ${variant === "block" ? "btn-block" : "btn-wide"}`}
        >
            {children}
        </button>
    );
}

SubmitButton.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
    variant: PropTypes.string,
};

export default SubmitButton;
