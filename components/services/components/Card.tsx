"use client";
import Image from "next/image";
import faceIcon from "@/public/images/face_card_icon.jpeg";
import styles from "./card.module.scss";
import clsx from "clsx";
import { BE_Category } from "@/types/types";
import { FC } from "react";
import { useRouter } from "next/navigation";

interface ICard {
    category?: BE_Category;
    onClick?: () => void;
    className?: string;
}

const Card: FC<ICard> = ({ category }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/uslugi/${category?.name}`);
    };
    return (
        <div
            className="flex justify-center items-center w-[315px] h-[315px] cursor-pointer"
            id={category?.id}
            onClick={handleCardClick}
        >
            <div className="flex  items-center justify-center w-[300px] h-[300px] relative border-gray-300 border-4 ">
                <Image
                    src={faceIcon}
                    alt="img"
                    fill
                    style={{ objectFit: "cover" }}
                    className={clsx("hover:blur-[1px]", styles.image)}
                />
                <h2 className="relative text-4xl text-white font-medium">{category?.name}</h2>
            </div>
        </div>
    );
};

export default Card;
