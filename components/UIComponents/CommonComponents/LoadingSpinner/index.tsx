import React from "react";

interface IProps {
    isLoading: boolean;
}

const LoadingSpinner: React.FC<IProps> = props => {
    const { isLoading } = props;
    if (isLoading) {
        return <></>;
    } else {
        return null;
    }
};

export default LoadingSpinner;
