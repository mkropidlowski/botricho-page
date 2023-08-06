import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AuthContext from "./provider/AuthContext";
import ToasterContext from "./provider/ToasterContext";

const roboto = Montserrat({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://botricho.pl"),
    title: "Botricho - Trychologia i kosmetologia.",
    description:
        "W Botricho zadbasz o swoją urodę. Rozwiążesz problemy dotyczące włosów, skóry głowy, cery oraz stóp. Oferujemy zabiegi z wykorzystaniem profesjonalnych kosmoceutyków i certyfikowanych urządzeń, które wykonywane są przez wykwalifikowany personel.",
    openGraph: {
        title: "Botricho - Trychologia i kosmetologia.",
        description:
            "W Botricho zadbasz o swoją urodę. Rozwiążesz problemy dotyczące włosów, skóry głowy, cery oraz stóp. Oferujemy zabiegi z wykorzystaniem profesjonalnych kosmoceutyków i certyfikowanych urządzeń, które wykonywane są przez wykwalifikowany personel.",
        url: "https://botricho.pl",
        siteName: "Botricho",
        locale: "pl-PL",
        countryName: "Polska",
        type: "website",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "Kosmetologia i Trychologia",
    applicationName: "Botricho",
    keywords: [
        "botricho gdańsk",
        "kosmetologia gdańsk",
        "kosmetologia",
        "trychologia",
        "botricho gdańsk kosmetologia",
        "kosmetologia zabiegi",
        "zabiegi na twarz",
        "twarz gdańsk",
        "skóra głowy gdańsk",
        "zabiegi skóra głowy gdańsk",
        "konsulatacje trycholog",
        "trycholog gdańsk",
        "zarezerwuj wizytę",
        "botricho zabiegi",
        "botricho",
        "trycholog",
        "oferta",
        "o nas",
        "gdańsk",
        "profesjonane zabiegi",
        "rezerwacja booksy",
    ],
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
