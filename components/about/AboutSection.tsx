import Image from "next/image";
import owner from "@/public/images/owner.png";
import clsx from "clsx";

const AboutSection = () => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col mb-[80px] " id="about">
            <div>
                <h1 className={clsx("md:text-[60px] md:font-bold p-5 text-[45px] font-semibold")}>O nas</h1>
            </div>
            <div className="w-full min-h-[600px] flex md:flex-row flex-col justify-evenly gap-[100px] items-center">
                <div className="max-w-[500px]">
                    <h2 className="text-[30px]">Salon Botricho</h2>
                    <p className="max-w-[300px] md:w-[500px] mt-[20px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using Content here, content here, making it look like
                        readable English.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-center w-[310px] h-[300px]">
                        <Image
                            src={owner}
                            alt="Aneta Botricho"
                            style={{ objectFit: "cover" }}
                            height={350}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
