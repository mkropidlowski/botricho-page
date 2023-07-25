import Image from "next/image";
import heroCuts from "@/public/images/heroBackground_cut.jpeg";
import mobileHero from "@/public/images/mobilebg.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState, useEffect } from "react";
import { BREAKPOINT } from "@/components/navbar/helpers/types";

const HeroImage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const isMobileDevice = useMediaQuery(BREAKPOINT["MAX-LG"]);

    useEffect(() => {
        if (isMobileDevice) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [isMobileDevice]);
    return (
        <>
            <div className="-w-full absolute h-[600px] inset-0 top-[50px]">
                <Image
                    src={isMobile ? mobileHero : heroCuts}
                    alt="Botricho Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-80 object-top"
                    priority
                />
            </div>
        </>
    );
};

export default HeroImage;
