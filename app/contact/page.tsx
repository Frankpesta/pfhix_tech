"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedImage } from "@/components/animated-image";

export default function ContactPage() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real implementation, you would handle the form submission here
		setFormSubmitted(true);
	};

	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<AnimatedSection
							className="flex flex-col justify-center space-y-4"
							animation="fade-right">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Contact Us
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
									Get in touch with our team to discuss your security needs.
								</p>
							</div>
						</AnimatedSection>
						<AnimatedImage
							src="/placeholder.svg?height=400&width=600"
							width={600}
							height={400}
							alt="Pfhix customer support team ready to assist with cyber security inquiries"
							className="rounded-lg object-cover shadow-lg"
							animation="fade-left"
						/>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<AnimatedSection
							className="flex flex-col space-y-4"
							animation="fade-right">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter">
									Get in Touch
								</h2>
								<p className="text-muted-foreground">
									Fill out the form below and our team will get back to you as
									soon as possible.
								</p>
							</div>
							<AnimatedCard>
								<Card className="transition-all duration-300 hover:shadow-lg">
									<CardContent className="p-6">
										{formSubmitted ? (
											<div className="flex flex-col items-center justify-center space-y-4 py-12">
												<div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 animate-bounce-slow">
													<CheckCircle2 className="h-10 w-10 text-primary" />
												</div>
												<h3 className="text-2xl font-bold">Thank You!</h3>
												<p className="text-center text-muted-foreground">
													Your message has been received. We'll get back to you
													shortly.
												</p>
												<Button
													onClick={() => setFormSubmitted(false)}
													className="mt-4 transition-all duration-300 hover:scale-105">
													Send Another Message
												</Button>
											</div>
										) : (
											<form onSubmit={handleSubmit} className="space-y-4">
												<div className="grid gap-4 sm:grid-cols-2">
													<div className="space-y-2">
														<Label htmlFor="first-name">First name</Label>
														<Input
															id="first-name"
															placeholder="John"
															required
															className="transition-all duration-300 focus:border-primary focus:ring-primary"
														/>
													</div>
													<div className="space-y-2">
														<Label htmlFor="last-name">Last name</Label>
														<Input
															id="last-name"
															placeholder="Doe"
															required
															className="transition-all duration-300 focus:border-primary focus:ring-primary"
														/>
													</div>
												</div>
												<div className="space-y-2">
													<Label htmlFor="email">Email</Label>
													<Input
														id="email"
														placeholder="john.doe@example.com"
														type="email"
														required
														className="transition-all duration-300 focus:border-primary focus:ring-primary"
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="phone">Phone (optional)</Label>
													<Input
														id="phone"
														placeholder="+1 (555) 000-0000"
														type="tel"
														className="transition-all duration-300 focus:border-primary focus:ring-primary"
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="company">Company (optional)</Label>
													<Input
														id="company"
														placeholder="Acme Inc."
														className="transition-all duration-300 focus:border-primary focus:ring-primary"
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="message">Message</Label>
													<Textarea
														id="message"
														placeholder="Tell us about your security needs..."
														className="min-h-[120px] transition-all duration-300 focus:border-primary focus:ring-primary"
														required
													/>
												</div>
												<Button
													type="submit"
													className="w-full transition-all duration-300 hover:scale-[1.02] animate-pulse-subtle">
													Send Message
												</Button>
											</form>
										)}
									</CardContent>
								</Card>
							</AnimatedCard>
						</AnimatedSection>
						<AnimatedSection
							className="flex flex-col space-y-6"
							animation="fade-left">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter">
									Contact Information
								</h2>
								<p className="text-muted-foreground">
									Reach out to us directly using the information below.
								</p>
							</div>
							<div className="grid gap-6 sm:grid-cols-2">
								{[
									{
										icon: <MapPin className="h-5 w-5 text-primary" />,
										title: "Address",
										content:
											"123 Security Street<br />Cyber City, CS 12345<br />United States",
										delay: 0,
									},
									{
										icon: <Phone className="h-5 w-5 text-primary" />,
										title: "Phone",
										content:
											'<a href="tel:+15551234567" class="hover:underline">+1 (555) 123-4567</a>',
										delay: 0.1,
									},
									{
										icon: <Mail className="h-5 w-5 text-primary" />,
										title: "Email",
										content:
											'<a href="mailto:info@pfhix.com" class="hover:underline">info@pfhix.com</a>',
										delay: 0.2,
									},
									{
										icon: <Clock className="h-5 w-5 text-primary" />,
										title: "Hours",
										content: "Monday - Friday<br />9:00 AM - 5:00 PM EST",
										delay: 0.3,
									},
								].map((item, index) => (
									<AnimatedCard key={index} delay={item.delay}>
										<Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
											<CardHeader className="pb-2">
												<div className="flex items-center gap-2">
													<div className="transition-transform duration-500 hover:scale-110">
														{item.icon}
													</div>
													<CardTitle className="text-base">
														{item.title}
													</CardTitle>
												</div>
											</CardHeader>
											<CardContent>
												<CardDescription
													dangerouslySetInnerHTML={{ __html: item.content }}
												/>
											</CardContent>
										</Card>
									</AnimatedCard>
								))}
							</div>
							<AnimatedCard delay={0.4}>
								<Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
									<CardHeader>
										<CardTitle>Our Locations</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="aspect-[16/9] overflow-hidden rounded-lg">
											<Image
												src="/placeholder.svg?height=400&width=600"
												width={600}
												height={400}
												alt="Map showing Pfhix headquarters and global office locations"
												className="object-cover transition-transform duration-700 hover:scale-105"
											/>
										</div>
									</CardContent>
								</Card>
							</AnimatedCard>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Need Immediate Assistance?
							</h2>
							<p className="max-w-[700px] md:text-xl/relaxed">
								Schedule a meeting with our security experts to discuss your
								needs.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button
								asChild
								size="lg"
								variant="secondary"
								className="bg-background text-foreground hover:bg-background/90 animate-pulse-subtle">
								<Link href="/schedule">Schedule Meeting</Link>
							</Button>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ContactPage",
						mainEntity: {
							"@type": "Organization",
							name: "Pfhix Cyber Security",
							address: {
								"@type": "PostalAddress",
								streetAddress: "123 Security Street",
								addressLocality: "Cyber City",
								addressRegion: "CS",
								postalCode: "12345",
								addressCountry: "US",
							},
							telephone: "+1-555-123-4567",
							email: "info@pfhix.com",
							openingHours: "Mo-Fr 09:00-17:00",
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "+1-555-123-4567",
								contactType: "customer service",
								availableLanguage: ["English"],
								contactOption: "TollFree",
								areaServed: "US",
							},
						},
					}),
				}}
			/>
		</div>
	);
}
