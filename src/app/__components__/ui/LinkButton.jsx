import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";

function LinkButton({
    id,
    children = null,
    tooltip = null,
    variant = null,
    destination = null,
}) {
    const pathname = usePathname();

    if (variant === "solid") {
        return (
            <Link href={destination}>
                <div
                    className="lg:tooltip lg:tooltip-bottom w-full"
                    data-tip={tooltip}
                >
                    <button
                        id={id}
                        type="button"
                        className="btn btn-block btn-primary justify-start"
                    >
                        {children}
                    </button>
                </div>
            </Link>
        );
    }
    if (variant === "glass") {
        return (
            <Link href={destination}>
                <div
                    className="lg:tooltip lg:tooltip-bottom w-full"
                    data-tip={tooltip}
                >
                    <button
                        id={id}
                        type="button"
                        className="btn glass btn-block btn-outline font-bold btn-primary "
                    >
                        {children}
                    </button>
                </div>
            </Link>
        );
    }
    if (variant === "ghost") {
        return (
            <Link href={destination}>
                <div
                    className="lg:tooltip lg:tooltip-bottom w-full"
                    data-tip={tooltip}
                >
                    <button
                        id={id}
                        type="button"
                        className={`btn btn-ghost btn-block justify-start hover:text-primary group ${pathname === destination ? "text-primary" : ""} `}
                    >
                        {children}
                    </button>
                </div>
            </Link>
        );
    }

    return (
        <Link href={destination} className="group" replace>
            <div className="lg:tooltip lg:tooltip-bottom" data-tip={tooltip}>
                <button
                    type="button"
                    className={`btn btn-link btn-wide rounded-none rounded-b-sm border-0 group-hover:border-b-2 group-hover:border-primary ${
                        pathname === destination
                            ? "border-b-2 border-primary"
                            : ""
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
