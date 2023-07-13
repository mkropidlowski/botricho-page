"use client";
import { fakeData } from "@/app/(root)/page";
import { BE_Services } from "@/types/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function ServicesDetails({ params }: { params: { slug: string } }) {
    const [services, setServices] = useState<BE_Services[]>([]);
    const serviceName = decodeURIComponent(params.slug);

    useEffect(() => {
        setServices(fakeData);
    }, [services]);

    const selectedService = services.find((service) => service.name === serviceName);

    return (
        <div className="flex flex-col gap-10 relative top-[100px] w-full p-3">
            <div>
                <h3 className="flex flex-row gap-2">
                    <Link href="/">Home</Link> &gt;
                    <Link href="/uslugi">Usługi</Link> &gt;
                    <Link href={params.slug} className={clsx(selectedService?.name ? "underline font-semibold" : "")}>
                        {selectedService?.name}
                    </Link>
                </h3>
            </div>
            <div>
                <h1 className="text-4xl font-bold">{selectedService?.name}</h1>
                <div className="max-w-[400px]">
                    {selectedService?.servicesList.map((serviceList) => (
                        <div key={serviceList?.serviceId}>
                            <h1>{serviceList.serviceId}</h1>
                            <h2>{serviceList.serviceName}</h2>
                            <p>{serviceList.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
