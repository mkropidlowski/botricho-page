"use client";

import { BE_Services } from "@/types/types";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "@/app/(dashboard)/panel/loading";

type Variant = "ADD";

const AddServicesForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState<Variant>("ADD");
    const session = useSession();
    const formRef = useRef<HTMLFormElement | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<BE_Services>({ defaultValues: { title: "", subCategoryName: "", description: "", category: "" } });

    const formSubmit: SubmitHandler<FieldValues> = (data, result: any) => {
        if (variant === "ADD") {
            const modifiedData = {
                ...data,
                subCategoryName: data.subCategoryName.toLowerCase(),
                category: data.category.toLowerCase(),
            };

            setValue("title", "", { shouldValidate: true });
            axios
                .post("api/services", {
                    ...modifiedData,
                })
                .then(() => {
                    formRef.current?.reset();
                    toast.success("Usługa dodana pomyślnie.");
                })
                .catch(() => toast.error("Bład dodawania usługi."))
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    return (
        <div className="flex flex-col items-center md:w-fit w-[310px] bg-orange-100 p-3 rounded-lg">
            <h2 className="text-lg font-medium">Formularz dodawania usługi.</h2>
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
                            id="title"
                            label="Podaj tytuł usługi."
                            type="text"
                        />
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            id="description"
                            label="Podaj opis usługi lub zostaw puste pole."
                            type="text"
                        />
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                            id="category"
                            label="Podaj dokładną nazwę kategorii."
                            type="text"
                        />
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            id="subCategoryName"
                            label="Podaj dokładną nazwę podkategorii ( dla Kosmetologii )"
                            type="text"
                        />
                    </div>

                    <div>
                        <Button disabled={isLoading} type="submit">
                            {variant === "ADD" && "Dodaj usługę"}
                        </Button>
                    </div>
                </form>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default AddServicesForm;
