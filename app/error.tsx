"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div>
                <h2>Ups, coś poszło nie tak</h2>
                <Link href="/">Wróć do strony głównej</Link>
            </div>
        </>
    );
}
