"use client";
import { BE_Category } from "@/types/types";
import Card from "./components/Card";
import styles from "./service.module.scss";
import clsx from "clsx";
import { FC } from "react";

interface IService {
    categories: BE_Category[];
}

const Services: FC<IService> = ({ categories }) => {
    return (
        <div className="w-full flex justify-center items-center flex-col mb-[80px]" id="offer">
            <div>
                <h1 className={clsx("md:text-[60px] md:font-bold p-5 text-[45px] font-semibold", styles.heading)}>
                    Oferta
                </h1>
            </div>
            <div className="w-full flex justify-center items-center flex-wrap gap-4">
                {categories.map((category) => {
                    return <Card key={category.id} category={category} />;
                })}
            </div>
        </div>
    );
};

export default Services;
