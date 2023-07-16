import Image from "next/image";
import heroBackground from "@/public/images/heroBackground.jpeg";
import heroMobile from "@/public/images/hero_mobile.jpeg";

const HeroImage = () => {
    return (
        <>
            <div className="w-full absolute h-[600px] inset-0 top-[50px]">
                <Image
                    src={heroBackground}
                    alt="Botricho Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-70"
                    priority
                />
            </div>
        </>
    );
};

export default HeroImage;
