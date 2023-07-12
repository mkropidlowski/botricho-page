import clsx from "clsx";
import { HTMLProps, FC } from "react";
import style from "./customButton.module.scss";
import capitalize from "lodash.capitalize";

interface CustomButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    children?: React.ReactNode;
    color?: "primary" | "secondary" | "tertiary";
    buttonSize?: "big" | "medium" | "small";
    variant?: "default" | "blank";
    onClick?: () => void;
    className?: string;
}

const CustomButton: FC<CustomButtonProps & HTMLProps<HTMLButtonElement>> = ({
    color = "primary",
    buttonSize = "medium",
    type = "button",
    variant = "default",
    className,
    children,
    ...rest
}) => (
    <button
        type={type}
        color={color}
        className={clsx(
            style.button,
            style[`button${capitalize(variant)}__${capitalize(color)}`],
            style[`${buttonSize}`],
            className
        )}
        {...rest}
    >
        {children}
    </button>
);

export default CustomButton;
