"use client";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { PhotoIcon } from "../icons";
import { CldUploadButton } from "next-cloudinary";
import Loading from "@/app/(dashboard)/panel/loading";

const AddEffectsImage = () => {
    const session = useSession();

    const handleUpload = async (result: any) => {
        try {
            const formData = new FormData();
            formData.append("file", result?.info?.secure_url);
            formData.append("upload_preset", "pkh3cs6m");
            formData.append("folder", "effectsImage");

            await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            toast.success("Zdjęcie dodane do podstrony Efekty.");
        } catch (error) {
            toast.error("Błąd dodawania zdjęcia do sekcji Efekt.");
            console.error(error);
        }
    };

    return (
        <div className="bg-orange-100 p-4 rounded-lg">
            <h2 className="text-lg font-medium">Formularz dodawania do sekcji EFEKTY.</h2>
            {session.data?.user ? (
                <div className="flex items-center justify-center">
                    <CldUploadButton
                        options={{
                            maxFiles: 1,
                        }}
                        onUpload={handleUpload}
                        uploadPreset="pkh3cs6m"
                    >
                        <div className="flex gap-3 mt-[15px]">
                            <p className="font-bold hover:cursor-pointer"> Kliknij, aby dodać.</p>
                            <PhotoIcon width={30} height={30} className="relative top-[-3px] cursor-pointer" />
                        </div>
                    </CldUploadButton>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default AddEffectsImage;
