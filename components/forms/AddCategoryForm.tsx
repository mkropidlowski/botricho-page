"use client";

import { BE_Category } from "@/types/types";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { PhotoIcon } from "../icons";
import { CldUploadButton } from "next-cloudinary";
import Loading from "@/app/(dashboard)/panel/loading";

type Variant = "ADD";

const AddCategoryForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState<Variant>("ADD");
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
            setValue("name", "", { shouldValidate: true });
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
        }
    };

    return (
        <div className="bg-orange-100 p-3 rounded-lg">
            <h2 className="text-lg font-medium">Formularz dodawania nowej kategorii</h2>
            {session.data?.user ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
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
                            label="Podaj nazwę, następnie dodaj zdjęcie."
                            type="text"
                        />
                        <CldUploadButton
                            options={{ maxFiles: 1 }}
                            onUpload={handleSubmit(formSubmit)}
                            uploadPreset="pkh3cs6m"
                        >
                            <PhotoIcon width={30} height={30} className="relative top-[-3px] cursor-pointer" />
                        </CldUploadButton>
                    </div>

                    <div>
                        <Button disabled={isLoading} type="submit">
                            {variant === "ADD" && "Dodaj kategorię"}
                        </Button>
                    </div>
                </form>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default AddCategoryForm;
