import { useEffect } from "react";

export const useScrollHook = (limit?: number, callback?: Function) => {
    const crossBrowsingTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollEvent = () => {
        const shouldChange = crossBrowsingTop > limit;
        if (shouldChange) {
            callback(true);
        } else {
            callback(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        window.addEventListener("load", scrollEvent);
    }, []);
};
