"use client";
import { Categories } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import Loading from "@/app/(category)/kategorie/loading";

interface CategoryProps {
    category: Categories[];
}

const CategoryList: FC<CategoryProps> = ({ category }) => {
    const { data } = useSession();
    const [categories, setCategories] = useState<Categories[]>([]);

    const handleDeleteCategory = async (categoryId: string) => {
        try {
            await axios.delete(`/api/categories`, { data: { categoryId } });
            const updateCategories = categories.filter((item) => item.id !== categoryId);

            setCategories(updateCategories);
            toast.success("Pomyślnie usunięto rekord.");
        } catch (error) {
            toast.error("Bład usuwania.");
        }
    };
    return (
        <div className="max-w-[600px] flex justify-center flex-col items-center mb-[50px]">
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
                        <h2 className="text-center">Wybierz kategorie z listy i kliknij usuń.</h2>
                    </div>

                    <div>
                        {category.map((categoryItem) => (
                            <div
                                key={categoryItem.id}
                                className="flex p-2 bg-slate-400 text-white text-lg mt-[7px] justify-between"
                            >
                                <h2>{categoryItem.name}</h2>
                                <button
                                    className="hover:cursor-pointer text-red-500"
                                    onClick={() => handleDeleteCategory(categoryItem.id as string)}
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

export default CategoryList;
