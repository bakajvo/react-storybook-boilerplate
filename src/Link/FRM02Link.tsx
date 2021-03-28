import React from 'react';

export interface LinkProps {
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const FRM02Link: React.FC<LinkProps> = ({
                                            ...props
                                        }) => {
    return (
        <button className={'FRM02Link'}
                {...props}
        >
            LINK
        </button>
    );
};

export default FRM02Link;
