import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function MainNav() {
	return (
		<div className="flex items-center gap-6 md:gap-10 justify-center">
			<Link href="/" className="">
				<Image
					src={"/logo.png"}
					alt="logo"
					width={100}
					height={100}
					className="object-contain"
				/>
			</Link>
			<nav className="hidden gap-6 md:flex">
				<Link
					href="/"
					className="text-sm font-medium transition-colors hover:text-primary">
					Home
				</Link>
				<Link
					href="/about"
					className="text-sm font-medium transition-colors hover:text-primary">
					About Us
				</Link>
				<Link
					href="/services"
					className="text-sm font-medium transition-colors hover:text-primary">
					Services
				</Link>
				<Link
					href="/contact"
					className="text-sm font-medium transition-colors hover:text-primary">
					Contact
				</Link>
			</nav>
			<Button
				className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90"
				asChild>
				<Link href="/schedule">Schedule Meeting</Link>
			</Button>
		</div>
	);
}
