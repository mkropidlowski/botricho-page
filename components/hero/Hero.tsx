"use client";
import { FC } from "react";
import HeroImage from "./components/HeroImage";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
    className?: string;
}

const Hero: FC<HeroProps> = ({ className }) => {
    return (
        <div className={clsx("md:justify-center justify-start", className)}>
            <HeroImage />
            <motion.div
                className="flex flex-col gap-5 relative top-[150px] md:top-0 p-5"
                initial={{ opacity: 0, y: 175 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
            >
                <div>
                    <h1 className="uppercase md:text-[37px] text-[27px] font-semibold text-[#fffaf0]">
                        Gabinet Botricho
                    </h1>
                    <p className="p-4 md:text-4xl text-[23px] max-w-3xl font-bold text-[#f5fffa]">
                        Specjalizujemy się w trychologi praktycznej i kosmetologi.
                    </p>
                </div>
                <Link
                    href="https://botricho.booksy.com"
                    target="_blank"
                    className="cursor-pointer z-[30] max-w-[360px]"
                >
                    <button className=" md:h-[50px] h-[60px] text-lg rounded-lg bg-buttonColor font-medium text-white pl-3 pr-3 cursor-pointer hover:bg-buttonHover transition-colors duration-300">
                        Zarezeruj wizytę już teraz!
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Hero;
