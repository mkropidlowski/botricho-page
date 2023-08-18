"use client";
import { Service } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../loading";

interface ListProps {
    services: Service[];
    onClick?: () => void;
}

const List: React.FC<ListProps> = ({ services }) => {
    const [servicesDetails, setServicesDetails] = useState<Service[]>([]);
    const { data } = useSession();

    const handleDeleteService = async (serviceId: string) => {
        try {
            await axios.delete(`/api/services`, { data: { serviceId } });
            const updatedServices = servicesDetails.filter((item) => item.id !== serviceId);

            setServicesDetails(updatedServices);
            toast.success("Pomyślnie usunięto rekord.");
        } catch (error) {
            toast.error("Bład usuwania.");
        }
    };

    return (
        <div className="max-w-[600px] flex justify-center flex-col items-center">
            {data?.user?.name ? (
                <div className="w-full">
                    <div className="flex gap-3 p-4 justify-center">
                        <Link href={"/"}>
                            <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg text-white">
                                Strona główna
                            </button>
                        </Link>

                        <Link href={"/panel"}>
                            <button className="p-2 rounded-lg text-white bg-sky-600 hover:bg-sky-700">Panel</button>
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-center">Wybierz usługę z listy a następnie kliknij usuń.</h2>
                    </div>
                    <div>
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="flex p-2 bg-slate-400 text-white text-lg mt-[7px] justify-between"
                            >
                                <h2>{service.title}</h2>
                                <button
                                    className="hover:cursor-pointer text-red-500"
                                    onClick={() => handleDeleteService(service.id as string)}
                                >
                                    Usuń
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default List;
