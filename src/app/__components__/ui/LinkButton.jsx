import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function LinkButton({ id, children = null, tooltip = null, variant = null, destination = null }) {
    const location = useLocation();

    if (variant === 'solid') {
        return (
            <Link to={destination}>
                <div
                    className="lg:tooltip lg:tooltip-bottom w-full"
                    data-tip={tooltip}
                >
                    <button
                        id={id}
                        type="button"
                        className="btn btn-block btn-secondary justify-start"
                    >
                        {children}
                    </button>
                </div>
            </Link>
        );
    }
    if (variant === 'glass') {
        return (
            <Link to={destination}>
                <div
                    className="lg:tooltip lg:tooltip-bottom w-full"
                    data-tip={tooltip}
                >
                    <button
                        id={id}
                        type="button"
                        className="btn glass btn-block btn-outline font-bold btn-secondary "
                    >
                        {children}
                    </button>
                </div>
            </Link>
        );
    }
    if (variant === 'ghost') {
        return (
            <Link to={destination}>
                <div
                    className="lg:tooltip lg:tooltip-bottom w-full"
                    data-tip={tooltip}
                >
                    <button
                        id={id}
                        type="button"
                        className={`btn btn-ghost btn-block justify-start group ${location.pathname === destination ? 'text-secondary' : ''} hover:text-secondary`}
                    >
                        {children}
                    </button>
                </div>
            </Link>
        );
    }

    return (
        <Link
            to={destination}
            className="group"
            replace
        >
            <div
                className="lg:tooltip lg:tooltip-bottom"
                data-tip={tooltip}
            >
                <button
                    type="button"
                    className={`btn btn-link btn-wide rounded-none rounded-b-sm border-0 group-hover:border-b-2 group-hover:border-secondary ${
                        location.pathname === destination ? 'border-b-2 border-secondary' : ''
                    }`}
                >
                    {children}
                </button>
            </div>
        </Link>
    );
}

LinkButton.propTypes = {
    id: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.string,
    destination: PropTypes.string.isRequired,
};

export default LinkButton;
