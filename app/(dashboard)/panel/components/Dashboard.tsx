import { signOut } from "next-auth/react";
import { FC } from "react";
import Loading from "../loading";
import { Session } from "next-auth";
import Link from "next/link";
import AddCategoryForm from "@/components/forms/AddCategoryForm";
import AddEffectsImage from "@/components/forms/AddEffectsImage";
import AddServicesForm from "@/components/forms/AddServicesForm";
import AddSubCategoryForm from "@/components/forms/AddSubCategoryForm";

interface IDashboard {
    session: Session | null;
}

const Dashboard: FC<IDashboard> = ({ session }) => {
    return (
        <div className="w-full flex items-center justify-center">
            {session?.user?.email ? (
                <div className="max-w-[1240px] flex flex-col items-center md:gap-[50px] gap-[15px]">
                    <div className="flex items-center h-fit p-4 flex-flow md:gap-[40px] gap-[10px] flex-col md:flex-row ">
                        <h2 className="font-bold uppercase">Panel zarządzania - Botricho</h2>
                        <h2>
                            Zalogowany jako: <span className="font-medium">{session?.user?.email}</span>
                        </h2>
                        <div className="flex flex-row gap-3">
                            <Link href={"/"}>
                                <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg text-white">
                                    Strona główna
                                </button>
                            </Link>

                            <Link href={"/lista"}>
                                <button className="p-2 rounded-lg text-white bg-sky-600 hover:bg-sky-700">
                                    Lista zabiegów
                                </button>
                            </Link>
                            <Link href={"/kategorie"}>
                                <button className="p-2 rounded-lg text-white bg-orange-600 hover:bg-orange-700">
                                    Lista kategorii
                                </button>
                            </Link>
                            <button
                                className="p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white"
                                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                            >
                                Wyloguj
                            </button>
                        </div>
                    </div>

                    <AddCategoryForm />
                    <AddEffectsImage />
                    <AddServicesForm />
                    <AddSubCategoryForm />
                </div>
            ) : (
                <div className="flex items-center justify-center w-full h-full">
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
