import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AuthContext from "./provider/AuthContext";
import ToasterContext from "./provider/ToasterContext";

const roboto = Montserrat({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Botricho - Trychologia i kosmetologia.",
    description: "Trychologia i kosmetologia.",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
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
