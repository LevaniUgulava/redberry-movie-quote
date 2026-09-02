import {useEffect, useState} from "react";
import {usePage} from "@inertiajs/react";
import {LandingQuote} from "@/pages/Landing/LandingTypes.ts";

function useLanding() {

    const {quotes} = usePage<{  quotes:LandingQuote[] }>().props
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return {scrollY, quotes};
}

export default useLanding;
