import { FC } from "react";
import HeroImage from "./components/HeroImage";
import clsx from "clsx";
import Link from "next/link";

interface HeroProps {
    className?: string;
}

const Hero: FC<HeroProps> = ({ className }) => {
    return (
        <div className={clsx("flex justify-center", className)}>
            <HeroImage />
            <div className="flex flex-col gap-5 relative">
                <div>
                    <h1 className="uppercase md:text-[37px] text-[30px] font-medium">Gabinet Botricho</h1>
                    <p className="p-4 md:text-4xl text-3xl max-w-3xl">
                        Specjalizujemy się w trychologi praktycznej i kosmetologi.
                    </p>
                </div>
                <Link href="https://botricho.booksy.com" className="flex justify-center cursor-pointer z-[150]">
                    <button className="md:h-[40px] h-[55px] rounded-lg bg-green-600 font-medium text-white pl-3 pr-3 cursor-pointer">
                        Zarezeruj wizytę za pomocą Booksy
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
