"use client";

import { BE_SubCategory } from "@/types/types";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "@/app/(dashboard)/panel/loading";

type Variant = "ADD";

const AddSubCategoryForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState<Variant>("ADD");
    const session = useSession();
    const formRef = useRef<HTMLFormElement | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<BE_SubCategory>({ defaultValues: { subName: "", mainCategory: "" } });

    const formSubmit: SubmitHandler<FieldValues> = (data, result: any) => {
        if (variant === "ADD") {
            const modifiedData = {
                ...data,
                mainCategory: data.mainCategory.toLowerCase(),
                subName: data.subName.toLowerCase(),
                slugName: data.subName,
            };

            setValue("subName", "", { shouldValidate: true });
            axios
                .post("api/subcategories", {
                    ...modifiedData,
                })
                .then(() => {
                    formRef.current?.reset();
                    toast.success("Podkategoria dodana pomyślnie.");
                })
                .catch(() => toast.error("Bład dodawania podkategorii."))
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    return (
        <div className="flex flex-col items-center md:w-fit w-[310px] bg-orange-100 p-3 rounded-lg">
            <h2 className="text-lg font-medium">Formularz dodawania podkategorii.</h2>
            {session.data?.user ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(formSubmit)();
                    }}
                    ref={formRef}
                    className="flex gap-10 p-4 flex-col items-center"
                >
                    <div className="flex gap-2 flex-col">
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                            id="subName"
                            label="Podaj nazwę podkategorii."
                            type="text"
                        />
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            id="mainCategory"
                            label="Podaj główną kategorię do której ma być przypisana."
                            type="text"
                        />
                    </div>

                    <div>
                        <Button disabled={isLoading} type="submit">
                            {variant === "ADD" && "Dodaj podkategorię"}
                        </Button>
                    </div>
                </form>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default AddSubCategoryForm;
