"use client";
import { ErrorImage } from "@/components/icons";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className="w-full flex-col flex items-center p-4 gap-[20px] mt-[30px]">
                <h2 className="text-[20px] font-bold">Ups, coś poszło nie tak</h2>
                <Link href="/" className="font-medium hover:bg-gray-400 p-4 rounded-lg hover:text-white">
                    Wróć do strony głównej
                </Link>
                <ErrorImage width={300} height={300} />
            </div>
        </>
    );
}
