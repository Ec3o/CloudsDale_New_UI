import React, { ComponentProps } from "react";
import styles from "@/styles/components/ui/card.module.scss";

export interface CardProps extends ComponentProps<"div"> {
    color?: string;
    textcolor?:string
    padding?: "sm" | "md" | "lg";
    shadow?: "none" | "sm" | "md" | "lg";
    border?: "none" | "thin" | "thick";
    radius?: "none" | "sm" | "md" | "lg";
    align?: "start" | "center" | "end";
    width?: string | number;
    height?: string | number;
}

export default function Card(
    props: CardProps & { children?: React.ReactNode }
) {
    const {
        color = "#000000",
        textcolor = "#ffffff",
        padding = "md",
        shadow = "md",
        border = "none",
        radius = "md",
        align = "center",
        width = "auto",  // 默认宽度为 auto
        height = "auto", // 默认高度为 auto
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
        "--card-bg-color": getColor(color),
        "--card-text-color": getColor(textcolor),
        "--card-height":height,
        "--card-width":width
    } as React.CSSProperties;

    const cardClasses = [
        styles.card,
        styles[padding],
        styles[shadow],
        styles[border],
        styles[radius],
        styles[align],
    ].join(" ");

    return (
        <div className={cardClasses} style={variables} {...rest}>
            {children}
        </div>
    );
}
