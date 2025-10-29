import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    radius?: "full" | "md";
    icon?: IconType;
    className?: string;
}

export const Button:React.FC<ButtonProps> = ({ children, variant, radius, icon, className }) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-3 text-sm cursor-pointer";
    const variantStyles = variant === "primary" ? "bg-primary text-white" : variant === "secondary" ? "bg-secondary text-white" : variant === "ghost" ? "bg-transparent text-white" : "";
    const radiusStyles = radius === "full" ? "border border-[#FFFFFF] rounded-full" : radius === "md" ? "border border-[#FFFFFF] rounded-[15px]" : "border-none";

    return (
        <button className={`${baseStyles} ${variantStyles} ${radiusStyles} ${className}`}>
            {icon && React.createElement(icon)}
            {children}
        </button>
    )
}