import React from 'react'

export const LoaderIcon = ({ children }) => {
    return (
        <div className="loader triangle">
            <div>{children}</div>
            <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
        </div>
    )
}
