/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { BE_Category, BE_Services } from "@/types/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { getCategories, getServices } from "@/app/(root)/page";
import Loading from "./loading";

export default function ServicesDetails({ params }: { params: { slug: string } }) {
    const [servicesCategory, setServicesCategory] = useState<BE_Category[]>([]);
    const [servicesDetails, setServicesDetails] = useState<BE_Services[]>([]);
    const serviceName = decodeURIComponent(params.slug);
    const categories = getCategories();
    const services = getServices();

    useEffect(() => {
        services.then((serviceData) => {
            setServicesDetails(serviceData);
        });
    }, []);

    useEffect(() => {
        categories.then((category) => {
            setServicesCategory(category);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selectedService = servicesCategory.find((singleCat) => singleCat.name === serviceName);
    const selectedServicesList = servicesDetails.filter((details) => details.category === serviceName);

    selectedServicesList.map((list) => {
        console.log(list.title, list.description);
    });

    return (
        <>
            {selectedService ? (
                <div className="flex flex-col items-start gap-10 relative top-[130px] w-full p-3">
                    <div>
                        <h3 className="flex flex-row gap-2">
                            <Link href="/">Home</Link> &gt;
                            <Link href="/">Usługi</Link> &gt;
                            <Link
                                href={params.slug}
                                className={clsx(selectedService?.name ? "underline font-semibold" : "")}
                            >
                                {selectedService?.name}
                            </Link>
                        </h3>
                    </div>
                    <div className="max-w-[1000px] flex ">
                        <div>
                            <h1 className="text-4xl font-bold">{selectedService?.name}</h1>
                            <div className="flex flex-wrap gap-5 p-4">
                                {selectedServicesList.map((list) => (
                                    <div className="bg-serviceBoxColor max-w-[400px] rounded-md p-3" key={list.id}>
                                        <h2>{list.title}</h2>
                                        <p>{list.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-10 relative top-[130px] w-full p-3">
                    <Loading />
                </div>
            )}
        </>
    );
}
