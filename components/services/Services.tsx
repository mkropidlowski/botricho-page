import { BE_Services } from "@/types/types";
import Card from "./components/Card";
import { FC } from "react";

interface IServices {
    services: BE_Services[];
}

const Services: FC<IServices> = ({ services }) => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div>
                <h1 className="md:text-[60px] md:font-bold p-5 text-[45px] font-semibold">Oferta</h1>
            </div>
            <div className="w-full flex justify-center items-center flex-wrap gap-4">
                {services.map((service) => (
                    <Card key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
