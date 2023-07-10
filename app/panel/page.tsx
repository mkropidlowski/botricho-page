"use client";
import { signOut, useSession } from "next-auth/react";
import Loading from "./loading";

const Panel = () => {
    const { data } = useSession();

    return (
        <>
            {data?.user?.email ? (
                <div>
                    <h2>Panel administratora</h2>
                    {data?.user?.email}
                    <button
                        className="p-2 bg-lime-700 text-white"
                        onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                    >
                        Wyloguj mnie
                    </button>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Panel;
