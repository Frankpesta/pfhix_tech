import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Footer } from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pfhix - Professional Cyber Security Solutions",
	description:
		"Enterprise-grade cyber security services for businesses of all sizes. Protect your digital assets with our expert security solutions.",
	keywords:
		"cyber security, penetration testing, security audit, managed security, incident response, risk assessment, security training",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://pfhix.com",
		title: "Pfhix - Professional Cyber Security Solutions",
		description:
			"Enterprise-grade cyber security services for businesses of all sizes. Protect your digital assets with our expert security solutions.",
		siteName: "Pfhix Cyber Security",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Pfhix Cyber Security",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Pfhix - Professional Cyber Security Solutions",
		description:
			"Enterprise-grade cyber security services for businesses of all sizes. Protect your digital assets with our expert security solutions.",
		images: ["/og-image.jpg"],
		creator: "@pfhixsecurity",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "verification_token",
		yandex: "verification_token",
		yahoo: "verification_token",
	},
	alternates: {
		canonical: "https://pfhix.com",
		languages: {
			"en-US": "https://pfhix.com",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.className
				)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="relative flex min-h-screen flex-col">
						<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
							<div className="container flex h-16 items-center justify-between">
								<MainNav />
								<div className="flex items-center gap-4">
									<ModeToggle />
									<div className="block md:hidden">
										<MobileNav />
									</div>
								</div>
							</div>
						</header>
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
