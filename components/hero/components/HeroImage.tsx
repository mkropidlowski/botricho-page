import Image from "next/image";
import heroBackground from "@/public/images/heroBackground.jpeg";
const HeroImage = () => {
    return (
        <>
            <div className="w-full absolute h-[600px] inset-0">
                <Image
                    src={heroBackground}
                    alt="Botricho Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-50"
                    priority
                />
            </div>
        </>
    );
};

export default HeroImage;
