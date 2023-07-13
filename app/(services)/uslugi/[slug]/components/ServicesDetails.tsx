import { BE_Services } from "@/types/types";
import { FC } from "react";

export default function ServicesDetails({ id, name }: BE_Services) {
    return (
        <div>
            <h3>Numer: {id}</h3>
            <h2>{name}</h2>
        </div>
    );
}
