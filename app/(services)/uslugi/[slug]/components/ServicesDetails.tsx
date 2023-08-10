/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Service, SubCategories } from "@prisma/client";
import Loading from "../loading";
import { motion, Variants } from "framer-motion";
import { Arrow } from "@/components/icons";
import { useRouter } from "next/navigation";

interface ServicesProps {
    services: Service[];
    slug: string;
    subCategories: SubCategories[];
    onClick?: () => void;
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

const ServicesDetails: React.FC<ServicesProps> = ({ services, slug, subCategories }) => {
    const [servicesCategory, setServicesCategory] = useState<string>();
    const [servicesDetails, setServicesDetails] = useState<Service[]>([]);
    const [subCategory, setSubCategory] = useState<SubCategories[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean[]>([]);
    const router = useRouter();

    useEffect(() => {
        scrollToTop();
    }, []);

    useEffect(() => {
        if (slug && services && subCategories) {
            setServicesCategory(slug);
            setServicesDetails(services);
            setSubCategory(subCategories);
            const initialModalState = services.map(() => false);
            setModalOpen(initialModalState);
        }
    }, [slug, services]);

    useEffect(() => {
        scrollToTop();
    }, [servicesCategory]);

    const selectedServicesList = servicesDetails.filter((details) => details.category === servicesCategory);
    const getItemBySubCategory = servicesDetails.filter((details) => details.subCategoryName === slug);
    const getSubCategoryName = subCategory.find((sub) => sub.mainCategory === servicesCategory);
    const getSubCategoryDetails = subCategory.filter((sub) => sub.mainCategory === servicesCategory);

    const handleModalOpen = (index: number) => {
        setModalOpen((prevModalState) => {
            const updatedModalState = [...prevModalState];
            updatedModalState[index] = !updatedModalState[index];
            return updatedModalState;
        });
    };

    const handleSubCategoryClick = (category: string | null) => {
        router.push(`/uslugi/${category}`);
    };

    if (getSubCategoryName?.mainCategory === servicesCategory) {
        return (
            <div
                className={clsx(
                    "flex flex-col items-start gap-10 relative top-[130px] w-full p-3",
                    getSubCategoryName ? "items-center" : ""
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
                    <div className="h-fit mb-[150px]">
                        <h1 className="text-4xl font-bold capitalize">{slug}</h1>
                        <div className="flex flex-wrap md:gap-5 gap-1 p-4 flex-col md:flex-row">
                            {getSubCategoryDetails.map((item) => (
                                <button
                                    key={item.id}
                                    className="text-center bg-boxColor md:w-[200px] w-full rounded-md p-3 md:mt-[50px] mt-[20px] hover:cursor-pointer "
                                    onClick={() => handleSubCategoryClick(item.slugName)}
                                >
                                    <span className="p-3 font-medium text-[18px] capitalize">{item.subName}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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
                        {servicesDetails.length === 0 ? (
                            <div className="flex items-center flex-col gap-5 p-4 h-[550px]">
                                <h2 className="text-lg text-center">
                                    Brak zabiegów w kategorii - <span className="capitalize">{slug}</span>
                                </h2>
                                <Link href={"/"} className="font-medium">
                                    Wróć do strony głownej
                                </Link>
                            </div>
                        ) : (
                            <div className="h-fit mb-[150px] flex flex-col items-center">
                                <h1 className="text-4xl font-bold capitalize">{slug}</h1>

                                {getItemBySubCategory.length > 0 ? (
                                    <motion.div
                                        animate="animate"
                                        initial="initial"
                                        variants={containerVariants}
                                        className="flex flex-wrap gap-5 p-4 justify-center"
                                    >
                                        {getItemBySubCategory.map((item, index) => (
                                            <motion.div key={item.id} variants={cardVariants}>
                                                <div
                                                    className="bg-boxColor md:w-[500px] w-[300px] rounded-md p-3 hover:cursor-pointer"
                                                    onClick={() => handleModalOpen(index)}
                                                >
                                                    <div className="flex">
                                                        <h2 className="p-3 font-medium text-[18px]">{item.title}</h2>
                                                        {item.description?.length ? (
                                                            <button
                                                                className="hover:cursor-pointer"
                                                                onClick={() => handleModalOpen(index)}
                                                            >
                                                                <Arrow width={20} height={20} />
                                                            </button>
                                                        ) : null}
                                                    </div>
                                                    {modalOpen[index] ? (
                                                        <p className="text-[15px]">{item?.description}</p>
                                                    ) : null}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        animate="animate"
                                        initial="initial"
                                        variants={containerVariants}
                                        className="flex flex-wrap gap-5 p-4 justify-center"
                                    >
                                        {selectedServicesList.map((item, index) => (
                                            <motion.div key={item.id} variants={cardVariants}>
                                                <div
                                                    className="bg-boxColor md:w-[500px] w-[300px] rounded-md p-3 hover:cursor-pointer"
                                                    onClick={() => handleModalOpen(index)}
                                                >
                                                    <div className="flex">
                                                        <h2 className="p-3 font-medium text-[18px]">{item.title}</h2>
                                                        {item.description?.length ? (
                                                            <button
                                                                className="hover:cursor-pointer"
                                                                onClick={() => handleModalOpen(index)}
                                                            >
                                                                <Arrow width={20} height={20} />
                                                            </button>
                                                        ) : null}
                                                    </div>
                                                    {modalOpen[index] ? (
                                                        <p className="text-[15px]">{item?.description}</p>
                                                    ) : null}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
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
