"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
}

export const Reveal = ({ children, width = "100%", className = "", delay = 0.25 }: RevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0, 1] }} // Smooth ease
            viewport={{ once: true, margin: "-50px" }}
            style={{ width }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeIn = ({ children, delay = 0.25, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const SlideInRight = ({ children, delay = 0.25, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
