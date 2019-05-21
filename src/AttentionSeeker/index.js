import React, { useState, useRef, useEffect } from "react";

export default function AttentionSeeker({ children }) {
    const el = useRef();
    const [didScroll, setDidScroll] = useState(false);

    useEffect(() => {
        if (el.current && (didScroll === false)) {
            el.current.scrollIntoView({ behavior: "smooth" });
            setDidScroll(true);
        }
    }, [children, didScroll]);

    return (
        <div ref={el}>
            {children}
        </div>
    );
};