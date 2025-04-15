"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	threshold?: number;
}

export function AnimatedCard({
	children,
	className,
	delay = 0,
	threshold = 0.1,
}: AnimatedCardProps) {
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

	const animationStyle = {
		opacity: isVisible ? 1 : 0,
		transform: isVisible
			? "translateY(0) scale(1)"
			: "translateY(20px) scale(0.98)",
		transition: `opacity 0.6s ease-out, transform 0.8s ease-out`,
		transitionDelay: `${delay}s`,
	};

	return (
		<div ref={ref} style={animationStyle} className={cn(className)}>
			{children}
		</div>
	);
}
