import AuthForm from "./components/AuthForm";
import logo from "@/public/images/botricho.png";
import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full h-screen flex justify-center flex-col items-center relative">
            <div className="flex flex-col items-center gap-8">
                <div>
                    <Image src={logo} alt="Botricho Gdańsk" width={150} height={150} />
                </div>
                <div>
                    <h2 className="w-[320px] xxs:min-w-[500px] text-2xl font-extrabold text-center">
                        Cześć, zaloguj się do swojego panelu zarządzania.
                    </h2>
                </div>
            </div>
            <AuthForm />
        </div>
    );
}
