import { useEffect, useRef } from "react";

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

export const useScrollLock = (on: boolean) => {
    useEffect(() => {
        const body = window.document.getElementsByTagName("body")[0];
        if (on) {
            body && (body.style.overflow = "hidden");
        } else {
            body && (body.style.overflow = "scroll");
        }
        return () => {
            body && (body.style.overflow = "scroll");
        };
    }, [on]);
};

export const useScrollCenter = (on: boolean) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (on && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [on]);
    return [ref];
};
