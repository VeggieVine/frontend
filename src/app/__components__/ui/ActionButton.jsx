import React from 'react';
import PropTypes from 'prop-types';

function ActionButton({ id, children = null, variant = null, onClick = () => {} }) {
    if (variant === 'ghost') {
        return (
            <button
                id={id}
                type="button"
                className="btn btn-ghost justify-start group hover:text-primary btn-block"
                onClick={() => onClick()}
            >
                {children}
            </button>
        );
    }
    if (variant === 'solid') {
        return (
            <button
                id={id}
                type="button"
                className="btn btn-primary justify-start group btn-block"
                onClick={() => onClick()}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            type="button"
            className="flex items-center font-bold text-base group"
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
}

ActionButton.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
    variant: PropTypes.string,
    onClick: PropTypes.func,
};

export default ActionButton;
