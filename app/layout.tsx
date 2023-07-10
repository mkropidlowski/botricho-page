import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AuthContext from "./provider/AuthContext";
import ToasterContext from "./provider/ToasterContext";

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Botricho - Trychologia i kosmetologia.",
    description: "Trychologia i kosmetologia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={roboto.className} suppressHydrationWarning={true}>
                <AuthContext>
                    <ToasterContext />
                    {children}
                </AuthContext>
            </body>
        </html>
    );
}
