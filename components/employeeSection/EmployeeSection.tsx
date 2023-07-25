"use client";
import Image from "next/image";
import michalPhoto from "@/public/images/michalPhoto.png";
import martynaPhoto from "@/public/images/martynaPhoto.jpg";
import clsx from "clsx";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

const containerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            delay: 0.4,
        },
    },
};

const itemVariants: Variants = {
    initial: {
        y: 150,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.4,
            ease: "anticipate",
            duration: 1,
        },
    },

    initialImage: {
        y: 150,
        opacity: 0,
    },
    animateImage: {
        y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            ease: "easeOut",
            duration: 1,
        },
    },
};

const EmployeeSection = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { ref: inViewRef } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -40% 0px",
        onChange(inView, entry) {
            setIsInView(inView);
        },
    });

    useEffect(() => {
        if (isInView) {
        }
    }, [isInView]);

    return (
        <div
            ref={sectionRef}
            className="w-full h-full flex justify-center items-center flex-col mb-[80px] "
            id="employee"
        >
            <div>
                <h1 className={clsx("md:text-[60px] md:font-bold p-5 text-[45px] font-semibold")}>Nasz zespół</h1>
            </div>
            <motion.div
                className="w-full min-h-[600px] flex md:flex-row items-center md:items-start flex-col justify-evenly gap-[50px] mt-5"
                ref={inViewRef}
                variants={containerVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
            >
                <div className="flex flex-col gap-5 max-w-[500px] items-center">
                    <motion.div
                        variants={itemVariants}
                        animate={isInView ? "animateImage" : "initialImage"}
                        className="w-[200px] h-[200px] overflow-hidden"
                    >
                        <Image
                            src={martynaPhoto}
                            alt="Martyna Photo"
                            style={{ objectFit: "cover", width: "200px", height: "200px" }}
                            className="rounded-[100%] object-top"
                            priority
                        />
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-xl font-medium">
                        Martyna
                    </motion.h2>
                    <motion.div variants={itemVariants} className="max-w-[300px] md:max-w-[550px] mt-[20px]">
                        <p>
                            Martyna jest studentką studiów drugiego stopnia z{" "}
                            <b>kosmetologii na Wyższej Szkole Zdrowia w Gdańsku ze specjalizacją trychologia.</b>{" "}
                            Ukończyła roczny staż w jednym z Tczewskich salonów urody. Szkoliła się w{" "}
                            <b>liftingu rzęs, manicure kombinowanym.</b> Jest perfekcjonistką, pracuje w pełnym
                            skupieniu osiągając w rezultacie zadowolenie klientki z dokładności swojej pracy. Uwielbia
                            swój zawód, stale stara się rozwijać, poprzez szkolenia, prelekcje ale również literaturę.
                            Jest fanką holistycznego podejścia w pracy kosmetologa, łączenie pielęgnacji gabinetowej z
                            domową, dobre nawyki żywieniowe i zdrowy styl życia to dla niej przepis na piękną skórę i
                            pogodę ducha.
                        </p>
                    </motion.div>
                    <Link
                        href="https://botricho.booksy.com"
                        target="_blank"
                        className="cursor-pointer z-[30] max-w-[300px]"
                        aria-label="Booksy Botriocho Martyna"
                    >
                        <button className=" md:h-[50px] h-[60px] text-lg rounded-lg bg-employeeButton font-medium text-white pl-3 pr-3 cursor-pointer hover:bg-buttonHover transition-colors duration-300">
                            Umów wizytę
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col gap-5 max-w-[500px] items-center">
                    <motion.div
                        variants={itemVariants}
                        animate={isInView ? "animateImage" : "initialImage"}
                        className="w-[200px] h-[200px]"
                    >
                        <Image
                            src={michalPhoto}
                            alt="Michał Botricho"
                            style={{ objectFit: "cover", width: "200px", height: "200px" }}
                            className="rounded-[100%]"
                            priority
                        />
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-xl font-medium">
                        Michał
                    </motion.h2>
                    <motion.div variants={itemVariants} className="max-w-[300px] md:max-w-[550px] mt-[20px]">
                        <p>
                            Michał w Botricho wykonuje <b>masaże - sportowy, klasyczny i relaksacyjny. </b>Studiuje na
                            AWFiS w Gdańsku, jest dyplomowanym masażystą. Michał do tej pory masował w klubie sportowym
                            i u klienta. Cały czas podnosi swoje kwalifikacje kolejnymi kursami i szkoleniami. Jest
                            człowiekiem zmotywowanym, kocha sport i zdrowy styl życia a swoim zaangażowaniem i chęcią
                            pracy nad sobą zaraża innych.
                        </p>
                    </motion.div>
                    <Link
                        href="https://booksy.com/pl-pl/72550_botricho-kosmetologia-i-trychologia_salon-kosmetyczny_20383_gdansk/staffer/192434#ba_s=bd_1"
                        target="_blank"
                        className="cursor-pointer z-[30] max-w-[300px]"
                        aria-label="Booksy Botriocho Michał"
                    >
                        <button className=" md:h-[50px] h-[60px] text-lg rounded-lg bg-employeeButton font-medium text-white pl-3 pr-3 cursor-pointer hover:bg-buttonHover transition-colors duration-300">
                            Umów wizytę
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default EmployeeSection;
