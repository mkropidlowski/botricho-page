/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { BE_Services } from "@/types/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Service } from "@prisma/client";
import Loading from "../loading";
import { motion, Variants } from "framer-motion";

interface ServicesProps {
    services: Service[];
    slug: string;
}
const containerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.3,
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
    },
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const ServicesDetails: React.FC<ServicesProps> = ({ services, slug }) => {
    const [servicesCategory, setServicesCategory] = useState<string>();
    const [servicesDetails, setServicesDetails] = useState<BE_Services[]>([]);

    useEffect(() => {
        scrollToTop();
    }, []);

    useEffect(() => {
        if (slug && services) {
            setServicesCategory(slug);
            setServicesDetails(services);
        }
    }, [slug]);

    useEffect(() => {
        scrollToTop();
    }, [servicesCategory]);

    const selectedServicesList = servicesDetails.filter((details) => details.category === servicesCategory);

    return (
        <>
            {services.length > 0 ? (
                <div
                    className={clsx(
                        "flex flex-col items-start gap-10 relative top-[130px] w-full p-3",
                        selectedServicesList.length === 0 ? "items-center" : ""
                    )}
                >
                    <div>
                        <h3 className="flex flex-row gap-2">
                            <Link href="/">Home</Link> &gt;
                            <Link href="/">Usługi</Link> &gt;
                            <Link href={slug} className={clsx(slug ? "underline font-semibold" : "")}>
                                <span className="capitalize">{slug}</span>
                            </Link>
                        </h3>
                    </div>
                    <div className="max-w-[1150px] flex ">
                        {selectedServicesList.length === 0 ? (
                            <div className="flex items-center flex-col gap-5 p-4 h-[550px]">
                                <h2 className="text-lg text-center">
                                    Brak zabiegów w kategorii - <span className="capitalize">{slug}</span>
                                </h2>
                                <Link href={"/"} className="font-medium">
                                    Wróć do strony głownej
                                </Link>
                            </div>
                        ) : (
                            <div className="h-fit mb-[150px]">
                                <h1 className="text-4xl font-bold capitalize">{slug}</h1>

                                <motion.div
                                    animate="animate"
                                    initial="initial"
                                    variants={containerVariants}
                                    className="flex flex-wrap gap-5 p-4"
                                >
                                    {selectedServicesList.map((item) => (
                                        <motion.div key={item.id} variants={cardVariants}>
                                            <div className="bg-boxColor md:w-[500px] w-[300px] rounded-md p-3">
                                                <h2>{item.title}</h2>
                                                <p>{item?.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-10 relative top-[130px] w-full p-3">
                    <Loading />
                </div>
            )}
        </>
    );
};

export default ServicesDetails;
