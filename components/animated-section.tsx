"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant =
	| "fade-up"
	| "fade-down"
	| "fade-left"
	| "fade-right"
	| "zoom-in"
	| "zoom-out";

interface AnimatedSectionProps {
	children: React.ReactNode;
	animation: AnimationVariant;
	className?: string;
	delay?: number;
	threshold?: number;
}

export function AnimatedSection({
	children,
	animation,
	className,
	delay = 0,
	threshold = 0.2,
}: AnimatedSectionProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold,
				rootMargin: "0px 0px -100px 0px",
			}
		);

		const currentRef = ref.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [threshold]);

	const getAnimationClasses = () => {
		const baseClasses = "transition-all duration-1000";
		const delayClass = delay ? `delay-[${delay * 1000}ms]` : "";

		if (!isVisible) {
			switch (animation) {
				case "fade-up":
					return `${baseClasses} opacity-0 translate-y-10`;
				case "fade-down":
					return `${baseClasses} opacity-0 -translate-y-10`;
				case "fade-left":
					return `${baseClasses} opacity-0 translate-x-10`;
				case "fade-right":
					return `${baseClasses} opacity-0 -translate-x-10`;
				case "zoom-in":
					return `${baseClasses} opacity-0 scale-95`;
				case "zoom-out":
					return `${baseClasses} opacity-0 scale-105`;
				default:
					return `${baseClasses} opacity-0`;
			}
		}

		return `${baseClasses} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
	};

	return (
		<div ref={ref} className={cn(getAnimationClasses(), className)}>
			{children}
		</div>
	);
}
