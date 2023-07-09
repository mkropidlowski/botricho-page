import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Botricho - Trychologia i kosmetologia.",
    description: "Trychologia i kosmetologia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
