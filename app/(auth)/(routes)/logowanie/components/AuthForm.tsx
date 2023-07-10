"use client";

import Input from "@/components/inputs/Input";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Button from "@/components/Button";
import Link from "next/link";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session.status === "authenticated") {
            router.push("/panel");
        }
    }, [router, session.status, variant]);

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === "REGISTER") {
            axios
                .post("/api/register", data)
                .catch(() => toast.error("Upss.. coś poszło nie tak."))
                .finally(() => {
                    setIsLoading(false);
                    toast.success("Konto zostało utworzone, zaloguj się.");
                    router.push("/");
                });
        }
        if (variant === "LOGIN") {
            signIn("credentials", { ...data, redirect: false })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error("Niepoprawne dane logowania.");
                    }
                    if (callback?.ok && !callback?.error) {
                        toast.success("Zalogowano.");
                        router.push("/panel");
                    }
                })

                .finally(() => setIsLoading(false));
        }
    };

    return (
        <div className="mt-8 sm:max-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === "REGISTER" ? (
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                            id="name"
                            label="Nazwa uzytkownika"
                        />
                    ) : null}
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="email"
                        label="Adres e-mail"
                        type="email"
                    />
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="password"
                        label="Hasło"
                        type="password"
                    />
                    <div>
                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === "LOGIN" ? "Zaloguj" : "Utwórz konto"}
                        </Button>
                    </div>
                </form>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>{variant === "LOGIN" ? "Nie posiadasz konta?" : "Posiadasz juz konto?"}</div>
                    <div onClick={toggleVariant} className="underline cursor-pointer">
                        {variant === "LOGIN" ? "Utwórz konto" : "Zaloguj"}
                    </div>
                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <button className="p-3 bg-sky-500 text-white font-medium rounded-lg">
                        <Link href={"/"}>Powrót do strony głownej</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
