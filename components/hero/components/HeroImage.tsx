import Image from "next/image";
import heroBackground from "@/public/images/heroBackground.jpeg";
const HeroImage = () => {
    return (
        <>
            <div className="absolute h-[600px] inset-0">
                <Image src={heroBackground} alt="Botricho Background" fill objectFit="cover" />
            </div>
        </>
    );
};

export default HeroImage;
