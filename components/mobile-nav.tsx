"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
					<Menu className="h-6 w-6" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="pr-0">
				<div className="flex items-center gap-2 px-7">
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src={"/logo.png"}
							alt="logo"
							width={100}
							height={100}
							className="object-contain"
						/>
					</Link>
				</div>
				<div className="flex flex-col gap-4 px-7 py-8">
					<Link
						href="/"
						className="text-lg font-medium transition-colors hover:text-primary"
						onClick={() => setOpen(false)}>
						Home
					</Link>
					<Link
						href="/about"
						className="text-lg font-medium transition-colors hover:text-primary"
						onClick={() => setOpen(false)}>
						About Us
					</Link>
					<Link
						href="/services"
						className="text-lg font-medium transition-colors hover:text-primary"
						onClick={() => setOpen(false)}>
						Services
					</Link>
					<Link
						href="/contact"
						className="text-lg font-medium transition-colors hover:text-primary"
						onClick={() => setOpen(false)}>
						Contact
					</Link>
					<Button
						className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
						asChild>
						<Link href="/schedule" onClick={() => setOpen(false)}>
							Schedule Meeting
						</Link>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}
