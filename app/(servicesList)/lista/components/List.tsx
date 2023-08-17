"use client";
import { Service } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface ListProps {
    services: Service[];
    onClick?: () => void;
}

const List: React.FC<ListProps> = ({ services }) => {
    const [servicesDetails, setServicesDetails] = useState<Service[]>([]);

    const handleDeleteService = async (serviceId: string) => {
        try {
            await axios.delete(`/api/services/${serviceId}`);
            const updatedServices = servicesDetails.filter((item) => item.id !== serviceId);

            setServicesDetails(updatedServices);

            toast.success("Success");
        } catch (error) {
            toast.error("Erorr");
        }
    };

    return (
        <div className="max-w-[600px]">
            {services.map((service) => (
                <div key={service.id} className="flex p-2 bg-slate-400 text-white text-lg mt-[5px] justify-between">
                    <h2>{service.title}</h2>
                    <button
                        className="hover:cursor-pointer text-red-500"
                        onClick={() => handleDeleteService(service.id as any)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default List;
