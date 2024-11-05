import React from 'react';

const ErrorMsgTwo = ({ error }: any) => {
    return (
        <>
            <p style={{ color: 'red', marginTop: "-20px" }}>{error}</p>
        </>
    );
};

export default ErrorMsgTwo;