"use client"
import React from "react"
import { motion } from "framer-motion"

interface ButtonProps {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "ghost"
    radius?: "full" | "md"
    icon?: React.ReactNode
    className?: string
    style?: React.CSSProperties
    isAnimated?: boolean
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant,
    radius,
    icon,
    className,
    style,
    isAnimated
}) => {
    const [hovered, setHovered] = React.useState(false)

    const baseStyles = `
    relative inline-flex items-center 
    ${isAnimated ? "justify-start" : "justify-center"} 
    gap-2 px-4 cursor-pointer overflow-hidden transition-all duration-300
  `

    const variantStyles =
        variant === "primary"
            ? "bg-primary text-white"
            : variant === "secondary"
                ? "bg-secondary text-white"
                : variant === "ghost"
                    ? "bg-transparent text-white"
                    : ""

    const radiusStyles =
        radius === "full"
            ? "border border-white rounded-full"
            : radius === "md"
                ? "border border-white rounded-[18px]"
                : "border-none"

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${radiusStyles} ${className}`}
            style={style}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {isAnimated && (
                <>
                    {/* Animated background */}
                    <motion.span
                        initial={{ width: "2.5rem", borderRadius: "9999px" }}
                        animate={
                            hovered
                                ? { width: "100%", borderRadius: "18px" }
                                : { width: "3rem", borderRadius: "9999px" }
                        }
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute left-0 top-0 bottom-0 bg-linear-to-r from-[#5B7DCF] to-[#D2E5F5] z-0"
                    />

                    {/* Static icon (on top) */}
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
                        {icon}
                    </span>
                </>
            )}

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 py-3">
                {icon && !isAnimated && (
                    <span
                        className={`flex items-center justify-center ${isAnimated ? "w-10 h-10" : ""
                            }`}
                    >
                        {icon}
                    </span>
                )}
               <main className={`${isAnimated ? "pl-6" : "pl-0"}`}>{children}</main> 
            </span>
        </button>
    )
}
