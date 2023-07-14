import { BE_Services } from "@/types/types";
import Card from "./components/Card";
import { FC } from "react";
import styles from "./service.module.scss";
import clsx from "clsx";

interface IServices {
    services: BE_Services[];
}

const Services: FC<IServices> = ({ services }) => {
    return (
        <div className="w-full flex justify-center items-center flex-col mb-[80px]" id="offer">
            <div>
                <h1 className={clsx("md:text-[60px] md:font-bold p-5 text-[45px] font-semibold", styles.heading)}>
                    Oferta
                </h1>
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
