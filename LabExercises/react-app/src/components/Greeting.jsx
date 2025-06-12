import React from "react";

const Greeting = ({ name, children }) => {
    return (
        <div>
            <p>Hello {name || "World"}</p>
            {children && <div>{children}</div>}
        </div>
    );
};

export default Greeting;
