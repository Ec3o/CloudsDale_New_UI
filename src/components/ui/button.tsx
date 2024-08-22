import React, { ComponentProps } from "react";
import styles from "@/styles/components/ui/button.module.scss";

export interface ButtonProps extends ComponentProps<"button"> {
    color?: string;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost";
    jusitify?: "start" | "center" | "end";
    align?: "start" | "center" | "end";
    loading?: boolean;
}

export default function Button(
    props: ButtonProps & { children?: React.ReactNode }
) {
    const {
        color = "primary",
        size = "md",
        variant = "solid",
        jusitify = "center",
        align = "center",
        loading = false,
        children,
        ...rest
    } = props;

    function getColor(color: string) {
        if (color.startsWith("#")) {
            return color;
        }

        const regex = /^[a-zA-Z]+-[0-9]+$/;

        if (!regex.test(color)) {
            return `var(--color-${color}-5)`;
        }

        return `var(--color-${color})`;
    }

    const variables = {
        "--btn-bg-color": getColor(color),
        "--btn-text-color": variant === "solid" ? "#fff" : getColor(color),
    } as React.CSSProperties;

    const btnClasses = [
        styles.btn,
        styles[size],
        styles[variant],
        loading ? styles.loading : "",
    ].join(" ");

    return (
        <button className={btnClasses} style={variables} {...rest}>
            {children}
        </button>
    );
}
