import { signOut } from "next-auth/react";
import { FC } from "react";
import Loading from "../loading";
import { Session } from "next-auth";
import Link from "next/link";

interface IDashboard {
    session: Session | null;
}

const Dashboard: FC<IDashboard> = ({ session }) => {
    return (
        <div>
            {session?.user?.email ? (
                <div className="max-w-[1240px] flex flex-col items-center gap-[50px]">
                    <div className="flex items-center h-[80px] flex-flow gap-[40px]">
                        <h2 className="font-bold uppercase">Panel zarządzania - Botricho</h2>
                        <h2>
                            Zalogowany jako: <span className="font-medium">{session?.user?.email}</span>
                        </h2>
                        <Link href={"/"}>
                            <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg text-white">
                                Strona główna
                            </button>
                        </Link>

                        <button
                            className="p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white"
                            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                        >
                            Wyloguj
                        </button>
                    </div>
                    <div>no elo elo tu będziemy zarządzać</div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Dashboard;
