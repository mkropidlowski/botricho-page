import { FC } from "react";
import HeroImage from "./components/HeroImage";
import clsx from "clsx";

interface HeroProps {
    className?: string;
}

const Hero: FC<HeroProps> = ({ className }) => {
    return (
        <div className={clsx(className)}>
            <HeroImage />
            <div>content</div>
        </div>
    );
};

export default Hero;
