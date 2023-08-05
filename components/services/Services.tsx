"use client";
import { BE_Category } from "@/types/types";
import Card from "./components/Card";
import styles from "./service.module.scss";
import clsx from "clsx";
import { FC, useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IService {
    categories: BE_Category[];
}

const containerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            delayChildren: 0.3,
            ease: "easeOut",
            duration: 1,
        },
    },
};

const Services: FC<IService> = ({ categories }) => {
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
        <div ref={sectionRef} className="w-full flex justify-center items-center flex-col mb-[80px]" id="offer">
            <div>
                <h1 className={clsx("md:text-[60px] md:font-bold p-5 text-[45px] font-semibold", styles.heading)}>
                    Oferta
                </h1>
            </div>
            {categories.length === 0 ? (
                <div>
                    <h2>Brak dostępnych kategorii, spróbuj ponowanie później.</h2>
                </div>
            ) : (
                <motion.div
                    ref={inViewRef}
                    className="w-full flex justify-center items-center flex-wrap gap-4"
                    variants={containerVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                >
                    {categories.map((category) => {
                        return (
                            <motion.div key={category.id} variants={cardVariants}>
                                <Card category={category} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            )}
        </div>
    );
};

export default Services;
