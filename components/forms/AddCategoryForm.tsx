"use client";

import { BE_Category } from "@/types/types";
import { FC, useRef, useState } from "react";
import { ResponseStatus, formStatusCode } from "./helpers/responseStatus";
import { useSession } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { PhotoIcon } from "../icons";
import { CldUploadButton } from "next-cloudinary";

type Variant = "ADD";

const AddCategoryForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState<Variant>("ADD");
    const [imageSrc, setImageSrc] = useState();
    const session = useSession();
    const formRef = useRef<HTMLFormElement | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<BE_Category>({ defaultValues: { name: "", image: "" } });

    const formSubmit: SubmitHandler<FieldValues> = (data, result: any) => {
        if (variant === "ADD") {
            setValue("name", "image", { shouldValidate: true });
            axios
                .post("api/categories", {
                    ...data,
                    image: result?.info?.secure_url,
                })
                .catch(() => toast.error("Bład dodawania kategorii."))
                .finally(() => {
                    setIsLoading(false);
                    toast.success("Kategoria dodana.");
                });

            console.log(data);
        }
    };

    const handleUpload = (result: any) => {
        axios.post("/api/categories", {
            image: result.info.secure_url,
        });
    };

    return (
        <div className="bg-orange-100 p-3 rounded-lg">
            <h2 className="text-lg font-bold">Formularz dodawania nowej kategorii</h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(formSubmit)();
                }}
                ref={formRef}
                className="flex items-end gap-10 p-4"
            >
                <div className="flex items-end gap-2">
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="name"
                        label="Nazwa kategorii"
                        type="text"
                    />
                    <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset="pkh3cs6m">
                        <PhotoIcon width={30} height={30} className="relative top-[-3px] cursor-pointer" />
                    </CldUploadButton>
                </div>

                <div>
                    <Button disabled={isLoading} type="submit">
                        {variant === "ADD" && "Dodaj kategorię"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddCategoryForm;

// const [imageSrc, setImageSrc] = useState();
// const [uploadData, setUploadData] = useState();
{
    /* <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
<p>
    <input type="file" name="file" />
</p>

{imageSrc && !uploadData && (
    <p>
        <button>Upload Files</button>
    </p>
)}

{uploadData && (
    <code>
        <pre>{JSON.stringify(uploadData.secure_url, null, 2)}</pre>
    </code>
)}
</form> */
}

// function handleOnChange(changeEvent) {
//     const reader = new FileReader();

//     reader.onload = function (onLoadEvent) {
//         setImageSrc(onLoadEvent.target.result);
//         setUploadData(undefined);
//     };

//     reader.readAsDataURL(changeEvent.target.files[0]);
// }

// async function handleOnSubmit(event) {
//     event.preventDefault();

//     const form = event.currentTarget;
//     const fileInput = Array.from(form.elements).find(({ name }) => name === "file");

//     const formData = new FormData();

//     for (const file of fileInput.files) {
//         formData.append("file", file);
//     }

//     formData.append("upload_preset", "pkh3cs6m");

//     const data = await fetch("https://api.cloudinary.com/v1_1/dah4tfxpe/image/upload", {
//         method: "POST",
//         body: formData,
//     }).then((r) => r.json());

//     setImageSrc(data.secure_url);
//     setUploadData(data);
// }
