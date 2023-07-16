import Image from "next/image";
import heroCuts from "@/public/images/heroBackground_cut.jpeg";

const HeroImage = () => {
    return (
        <>
            <div className="-w-full absolute h-[600px] inset-0 top-[50px]">
                <Image
                    src={heroCuts}
                    alt="Botricho Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-70 object-top"
                    priority
                />
            </div>
        </>
    );
};

export default HeroImage;
