import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex items-start justify-center relative w-screen rounded-t-[30px] h-[250px] bg-serviceBoxColor">
            <div className="max-w-[1240px] inline-grid grid-cols-[250px_250px_250px] mt-[50px]">
                <div>
                    <h2 className={clsx("text-black")}>
                        <Link href="/" className="flex flex-col">
                            <span className="text-lg font-medium">Botricho Gdańsk</span>
                            <span className="text-xs">Kosmetologia | Trychologia</span>
                        </Link>
                    </h2>
                </div>

                <div>dane adresowe</div>

                <div>godziny otwarcia</div>
            </div>
        </footer>
    );
};

export default Footer;
