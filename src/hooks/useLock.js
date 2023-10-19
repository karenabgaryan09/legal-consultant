import React from "react";

export default function useLock() {
    const handleLock = React.useCallback((lock) => {
        // const scrollbarWidth = window.innerWidth - document.body.offsetWidth + 'px'
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + "px";
        document.body.style.overflow = lock ? "hidden" : "";
        document.body.style.paddingRight = lock ? scrollbarWidth : "";

        // const navbar = document.querySelector(".navbar");
        // const shrinkedNavbar = document.querySelector(".navbar.shrink");
        // const style = lock ? `${scrollbarWidth} solid transparent` : "";
        // if (navbar) navbar.style.borderRight = style
        // if (shrinkedNavbar) shrinkedNavbar.style.borderRight = style
    }, []);

    const lockScroll = () => handleLock(true);
    const unlockScroll = () => handleLock(false);

    return { lockScroll, unlockScroll };
}

