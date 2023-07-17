import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface IFooter {
    className?: string;
}

const Footer: FC<IFooter> = ({ className }) => {
    const currentYear = new Date();

    return (
        <footer
            className={clsx(
                "max-h-fit flex flex-col items-start justify-center relative w-screen rounded-t-[30px] bg-serviceBoxColor",
                className
            )}
        >
            <div className="m-auto p-4">
                <Link
                    href="https://botricho.booksy.com"
                    target="_blank"
                    className="cursor-pointer z-[30] max-w-[300px]"
                    aria-label="Booksy Botriocho"
                >
                    <button className=" md:h-[50px] h-[60px] text-lg rounded-lg bg-buttonColor font-medium text-white pl-3 pr-3 cursor-pointer">
                        Zarezeruj wizytę za pomocą Booksy!
                    </button>
                </Link>
            </div>
            <div className="md:max-w-[1240px] max-w-[300px] md:inline-grid block grid-cols-[290px_200px_290px] md:mt-[50px] mt-0 gap-5 m-auto">
                <div>
                    <h2 className={clsx("text-black")}>
                        <Link href="/" className="flex flex-col">
                            <span className="text-2xl font-medium">Botricho Gdańsk</span>
                            <span className="text-lg">Kosmetologia | Trychologia</span>
                        </Link>
                    </h2>
                </div>

                <div className="mt-[30px] mb-[30px] text-center">
                    <Link
                        href="https://goo.gl/maps/UJUyyqVRzgfGmkyy6"
                        className="cursor-pointer font-medium"
                        aria-label="Google Maps Botriocho"
                    >
                        Cedrowa 31 - Łostowice, U4, 80-180, Gdańsk
                    </Link>
                </div>

                <div className="mb-[50px]">
                    <p className="font-medium text-lg">GODZINY OTWARCIA: </p>
                    <ul className="text-lg p-4">
                        <li>
                            <span className="font-medium">Pon-Pt:</span> 9:00 - 20:00
                        </li>
                        <li>
                            <span className="font-medium">Sobota:</span> 10:00 - 15:00
                        </li>
                        <li>
                            <span className="font-medium">Niedziela:</span> Zamknięte
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full text-center text-xs font-medium text-black">
                <Link
                    href="https://mkropidlowski.pl"
                    className="cursor-pointer"
                    target="_blank"
                    aria-label="Michał Kropidłowski"
                >
                    Wykonał: M.Kropidłowski - {currentYear.getFullYear()}
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
