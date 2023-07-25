"use client";
import Image from "next/image";
import owner from "@/public/images/owner.png";
import clsx from "clsx";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import { aboutDescription, aboutHeading } from "./helpers/data";

const containerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const itemVariants: Variants = {
    initial: {
        x: -150,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    imageInitial: {
        y: -150,
        opacity: 0,
    },
    imageAnimation: {
        y: 0,
        opacity: 1,
    },
};

const AboutSection = () => {
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
        <div ref={sectionRef} className="w-full h-full flex justify-center items-center flex-col mb-[80px] " id="about">
            <div>
                <h1 className={clsx("md:text-[60px] md:font-bold p-5 text-[45px] font-semibold")}>O nas</h1>
            </div>
            <motion.div
                className="w-full min-h-[600px] flex md:flex-row flex-col justify-evenly gap-[50px] items-center"
                ref={inViewRef}
                variants={containerVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
            >
                <div className="flex flex-col gap-3 max-w-[500px]">
                    <motion.h2
                        className="text-[30px] font-medium"
                        variants={itemVariants}
                        style={{ marginBottom: "10px" }}
                    >
                        {aboutHeading.heading}
                    </motion.h2>
                    <motion.div
                        className="max-w-[300px] md:max-w-[550px] mt-[20px]"
                        variants={itemVariants}
                        style={{ marginBottom: "10px" }}
                    >
                        {aboutDescription()}
                    </motion.div>
                    <Link
                        href="https://botricho.booksy.com"
                        target="_blank"
                        className="cursor-pointer"
                        aria-label="Booksy Botriocho"
                    >
                        <motion.button
                            variants={itemVariants}
                            style={{ marginBottom: "10px" }}
                            className=" md:h-[50px] h-[60px] text-lg rounded-lg bg-buttonColor font-medium text-white pl-3 pr-3 cursor-pointer hover:bg-buttonHover transition-colors duration-300"
                        >
                            Dowiedz się więcej
                        </motion.button>
                    </Link>
                </div>
                <div>
                    <motion.div
                        ref={inViewRef}
                        variants={itemVariants}
                        initial="imageInitial"
                        animate={isInView ? "imageAnimation" : "imageInitial"}
                        transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
                        className="flex items-center justify-center w-[310px] h-[300px]"
                    >
                        <Image
                            src={owner}
                            alt="Aneta Botricho"
                            style={{ objectFit: "cover" }}
                            height={350}
                            className="rounded-xl"
                            priority
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutSection;
