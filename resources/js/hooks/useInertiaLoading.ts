import {router} from "@inertiajs/react";
import {useEffect, useState} from "react";

function useInertiaLoading(hasData: boolean) {
    const [loading, setLoading] = useState(!hasData);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const offStart = router.on("start", () => {
            timeout = setTimeout(() => setLoading(true), 250);
        });

        const offFinish = router.on("finish", () => {
            clearTimeout(timeout);
            setLoading(false);
        });

        return () => {
            clearTimeout(timeout);
            offStart();
            offFinish();
        };
    }, []);

    return loading;
}

export default useInertiaLoading;
