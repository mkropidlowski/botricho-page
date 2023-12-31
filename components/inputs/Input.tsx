"use client";

import clsx from "clsx";
import styles from "./input.module.scss";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, type = "text", register, required, errors, disabled }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(
                        styles.input,
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-default"
                    )}
                />
            </div>
        </div>
    );
};

export default Input;
