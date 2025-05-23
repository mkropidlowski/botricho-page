"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { MenuLinksProps, NavbarProps } from "./helpers/types";
import { menuLinks } from "./helpers/links";
import { signOut, useSession } from "next-auth/react";
import clsx from "clsx";
import { Booksy, Facebook, Instagram } from "../icons";
import Image from "next/image";
import logo from "@/public/images/botricho.png";

const Navbar: FC<NavbarProps> = ({ className, links = menuLinks }) => {
    const { data } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isBrowser = () => typeof window !== "undefined";

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={clsx(
                "fixed top-0 flex flex-wrap justify-around items-center w-full bg-white md:h-[90px] shadow-[0_8px_5px_-10px_rgba(0,0,0,0.3)] h-navBarHeight z-[100] "
            )}
        >
            <h2 className={clsx("text-black flex justify-center gap-[10px] items-center")} onClick={scrollToTop}>
                <Link href="/">
                    <Image src={logo} alt="Botricho Gdańsk" width={40} height={40} />
                </Link>
                <Link href="/" className="flex flex-col">
                    <span className="text-lg font-medium">Botricho Gdańsk</span>
                    <span className="text-xs">Trychologia</span>
                </Link>
            </h2>
            <div className={clsx("me-[-25px] lg:hidden", isMobileMenuOpen ? "p-2" : "p-2")}>
                <button
                    type="button"
                    onClick={handleMobileMenuToggle}
                    name="menu button"
                    aria-label="Menu"
                    className={clsx("p-2 rounded focus:outline-none", { " bg-gray-100": isMobileMenuOpen })}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <ul
                className={clsx(
                    "flex items-center gap-[35px] text-base font-medium",
                    isMobileMenuOpen ? "flex-col bg-white w-full z-10 gap-[5px] text-center" : "hidden lg:flex"
                )}
            >
                {Object.values(links).map(({ id, text, redirectToComponent, scrollIntoTop }: MenuLinksProps) => {
                    const linkHref = `/#${id}`;
                    const hrefToComponent = `/${id}`;

                    return (
                        <li
                            key={id}
                            className={clsx(
                                isMobileMenuOpen && "w-full p-4 text-black hover:bg-gray-100 cursor-pointer"
                            )}
                        >
                            {redirectToComponent ? (
                                <Link href={hrefToComponent}>
                                    <button
                                        type="button"
                                        className={clsx(
                                            isMobileMenuOpen
                                                ? ""
                                                : "hover:bg-gray-100 rounded-lg w-[90px] p-2 transition duration-500 ease-in-out hover:scale-110"
                                        )}
                                    >
                                        {text}
                                    </button>
                                </Link>
                            ) : scrollIntoTop ? (
                                <Link href={"/"} onClick={scrollToTop}>
                                    <button
                                        type="button"
                                        className={clsx(
                                            isMobileMenuOpen
                                                ? ""
                                                : "hover:bg-gray-100 rounded-lg w-[90px] p-2 transition duration-500 ease-in-out hover:scale-110"
                                        )}
                                    >
                                        {text}
                                    </button>
                                </Link>
                            ) : (
                                <Link href={linkHref}>
                                    <button
                                        type="button"
                                        className={clsx(
                                            isMobileMenuOpen
                                                ? ""
                                                : "hover:bg-gray-100 rounded-lg w-[90px] p-2 transition duration-500 ease-in-out hover:scale-110"
                                        )}
                                    >
                                        {text}
                                    </button>
                                </Link>
                            )}
                        </li>
                    );
                })}
                <li>
                    {data?.user ? (
                        <div className={clsx("flex gap-4 items-center", isMobileMenuOpen ? "flex-col" : "")}>
                            <Link href="/panel">
                                <button className="bg-gray-300 rounded-lg w-[150px] p-2" type="button">
                                    Witaj, {data?.user?.name}
                                </button>
                            </Link>
                            <button
                                className="bg-red-500  text-white rounded-lg w-fit p-2"
                                type="button"
                                onClick={() => signOut({ callbackUrl: "/" })}
                            >
                                Wyloguj
                            </button>
                        </div>
                    ) : null}
                </li>
                <li className="flex gap-3 mb-6">
                    <Link href="https://www.facebook.com/botricho" target="_blank" aria-label="Facebook Botriocho">
                        <Facebook width={25} height={25} />
                    </Link>
                    <Link href="https://www.instagram.com/botricho/" target="_blank" aria-label="Instagram Botrioco">
                        <Instagram width={25} height={25} />
                    </Link>

                    <Link
                        href="https://botricho.booksy.com"
                        target="_blank"
                        className="cursor-pointer"
                        aria-label="Booksy Botriocho"
                    >
                        <Booksy width={60} height={25} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
