import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
    const [screenSize, setScreenSize] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== screenSize) {
            setScreenSize(media.matches);
        }

        const handleChange = () => setScreenSize(media.matches);

        window.addEventListener("resize", handleChange);
        return () => window.removeEventListener("resize", handleChange);
    }, [screenSize, query]);
    return screenSize;
};

export default useMediaQuery;
