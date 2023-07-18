"use client";
import { useSession } from "next-auth/react";
import Dashboard from "./components/Dashboard";

const Panel = () => {
    const { data } = useSession();

    return (
        <div>
            <Dashboard session={data} />
        </div>
    );
};

export default Panel;
