import {useSyncExternalStore} from "react";

function useIsMobile() {
    const subscribe = (callback: () => void) => {
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    };

    const getSnapshot = () => {
        return window.innerWidth < 1024;
    };

    const getServerSnapshot = () => {
        return false;
    };
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export default useIsMobile;
