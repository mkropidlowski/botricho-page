"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { MenuLinksProps, NavbarProps } from "./helpers/types";
import { menuLinks } from "./helpers/links";
import { signOut, useSession } from "next-auth/react";
import clsx from "clsx";
import { Facebook, Instagram } from "../icons";

const Navbar: FC<NavbarProps> = ({ className, links = menuLinks }) => {
    const { data } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={clsx(
                "fixed top-0 flex flex-wrap justify-around items-center w-full bg-white md:h-[90px] shadow-[0_8px_5px_-10px_rgba(0,0,0,0.3)] h-navBarHeight "
            )}
        >
            <h2 className={clsx("text-black")}>
                <Link href="/" className="flex flex-col">
                    <span className="text-lg font-medium">Botricho Gdańsk</span>
                    <span className="text-xs">Kosmetologia | Trychologia</span>
                </Link>
            </h2>
            <div className={clsx("me-[-25px] md:hidden", isMobileMenuOpen ? "p-2" : "p-2")}>
                <button
                    type="button"
                    onClick={handleMobileMenuToggle}
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
                    "flex items-center gap-[50px] text-base font-medium",
                    isMobileMenuOpen
                        ? "flex-col bg-white w-full h-[500px] z-10 gap-[5px] text-center"
                        : "hidden md:flex"
                )}
            >
                {Object.values(links).map(({ id, text, redirectToComponent }: MenuLinksProps) => {
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
                                    <button type="button">{text}</button>
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
                        <div className={clsx("flex gap-5", isMobileMenuOpen ? "flex-col" : "")}>
                            <Link href="/panel">
                                <button>Witaj, {data?.user?.name}</button>
                            </Link>
                            <button onClick={() => signOut({ callbackUrl: "/" })}>Wyloguj</button>
                        </div>
                    ) : null}
                </li>
                <li className="flex gap-3">
                    <Link href="https://www.facebook.com/botricho" target="_blank">
                        <Facebook width={25} height={25} />
                    </Link>
                    <Link href="https://www.instagram.com/botricho/" target="_blank">
                        <Instagram width={25} height={25} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
