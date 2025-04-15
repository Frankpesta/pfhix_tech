"use client";

import type React from "react";

import { useState } from "react";
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
import { CalendarIcon, Clock, CheckCircle2, Video } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedImage } from "@/components/animated-image";

export default function SchedulePageClient() {
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real implementation, you would handle the form submission here
		// and create a Google Calendar meeting
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
									Schedule a Meeting
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
									Book a consultation with our security experts to discuss your
									needs.
								</p>
							</div>
						</AnimatedSection>
						<AnimatedImage
							src="/placeholder.svg?height=400&width=600"
							width={600}
							height={400}
							alt="Virtual security consultation meeting with Pfhix experts"
							className="rounded-lg object-cover shadow-lg"
							animation="fade-left"
						/>
					</div>
				</div>
			</section>

			{/* Scheduling Form Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-3xl">
						<AnimatedCard>
							<Card className="transition-all duration-300 hover:shadow-lg">
								<CardHeader className="text-center">
									<CardTitle className="text-2xl">
										Book Your Consultation
									</CardTitle>
									<CardDescription>
										Fill out the form below to schedule a virtual meeting with
										our security experts.
									</CardDescription>
								</CardHeader>
								<CardContent>
									{formSubmitted ? (
										<AnimatedSection
											className="flex flex-col items-center justify-center space-y-4 py-12"
											animation="zoom-in">
											<div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 animate-bounce-slow">
												<CheckCircle2 className="h-10 w-10 text-primary" />
											</div>
											<h3 className="text-2xl font-bold">Meeting Scheduled!</h3>
											<p className="text-center text-muted-foreground">
												Your meeting has been scheduled successfully. You will
												receive a confirmation email with the meeting details
												shortly.
											</p>
											<Button
												onClick={() => setFormSubmitted(false)}
												className="mt-4 transition-all duration-300 hover:scale-105">
												Schedule Another Meeting
											</Button>
										</AnimatedSection>
									) : (
										<form onSubmit={handleSubmit} className="space-y-6">
											<div className="space-y-4">
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
													<Label htmlFor="phone">Phone</Label>
													<Input
														id="phone"
														placeholder="+1 (555) 000-0000"
														type="tel"
														required
														className="transition-all duration-300 focus:border-primary focus:ring-primary"
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="company">Company</Label>
													<Input
														id="company"
														placeholder="Acme Inc."
														required
														className="transition-all duration-300 focus:border-primary focus:ring-primary"
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="service">Service of Interest</Label>
													<Select required>
														<SelectTrigger
															id="service"
															className="transition-all duration-300 focus:border-primary focus:ring-primary">
															<SelectValue placeholder="Select a service" />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="security-audit">
																Security Audit
															</SelectItem>
															<SelectItem value="penetration-testing">
																Penetration Testing
															</SelectItem>
															<SelectItem value="managed-security">
																Managed Security
															</SelectItem>
															<SelectItem value="incident-response">
																Incident Response
															</SelectItem>
															<SelectItem value="risk-assessment">
																Risk Assessment
															</SelectItem>
															<SelectItem value="security-training">
																Security Training
															</SelectItem>
															<SelectItem value="other">Other</SelectItem>
														</SelectContent>
													</Select>
												</div>
												<div className="grid gap-4 sm:grid-cols-2">
													<div className="space-y-2">
														<Label htmlFor="date">Date</Label>
														<Popover>
															<PopoverTrigger asChild>
																<Button
																	variant="outline"
																	className={cn(
																		"w-full justify-start text-left font-normal transition-all duration-300",
																		!date && "text-muted-foreground"
																	)}>
																	<CalendarIcon className="mr-2 h-4 w-4" />
																	{date ? format(date, "PPP") : "Select a date"}
																</Button>
															</PopoverTrigger>
															<PopoverContent className="w-auto p-0">
																<Calendar
																	mode="single"
																	selected={date}
																	onSelect={setDate}
																	initialFocus
																	disabled={(date) => {
																		// Disable past dates and weekends
																		const today = new Date();
																		today.setHours(0, 0, 0, 0);
																		const day = date.getDay();
																		return (
																			date < today || day === 0 || day === 6
																		);
																	}}
																	className="animate-in fade-in-50 duration-300"
																/>
															</PopoverContent>
														</Popover>
													</div>
													<div className="space-y-2">
														<Label htmlFor="time">Time</Label>
														<Select required>
															<SelectTrigger
																id="time"
																className="transition-all duration-300 focus:border-primary focus:ring-primary">
																<SelectValue placeholder="Select a time" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="9:00">9:00 AM</SelectItem>
																<SelectItem value="10:00">10:00 AM</SelectItem>
																<SelectItem value="11:00">11:00 AM</SelectItem>
																<SelectItem value="13:00">1:00 PM</SelectItem>
																<SelectItem value="14:00">2:00 PM</SelectItem>
																<SelectItem value="15:00">3:00 PM</SelectItem>
																<SelectItem value="16:00">4:00 PM</SelectItem>
															</SelectContent>
														</Select>
													</div>
												</div>
												<div className="space-y-2">
													<Label htmlFor="message">
														Additional Information
													</Label>
													<Textarea
														id="message"
														placeholder="Tell us more about your security needs..."
														className="min-h-[120px] transition-all duration-300 focus:border-primary focus:ring-primary"
													/>
												</div>
											</div>
											<div className="flex flex-col space-y-4">
												<div className="flex items-center space-x-2 rounded-lg border p-4 transition-all duration-300 hover:border-primary/50 hover:bg-muted/50">
													<Video className="h-5 w-5 text-primary animate-pulse-subtle" />
													<div className="flex-1">
														<h3 className="text-sm font-medium">Google Meet</h3>
														<p className="text-xs text-muted-foreground">
															A Google Meet link will be sent to your email
															after scheduling.
														</p>
													</div>
												</div>
												<Button
													type="submit"
													className="w-full transition-all duration-300 hover:scale-[1.02] animate-pulse-subtle">
													Schedule Meeting
												</Button>
											</div>
										</form>
									)}
								</CardContent>
							</Card>
						</AnimatedCard>
					</div>
				</div>
			</section>

			{/* Meeting Types Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
								What to Expect
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-lg">
								Our consultation process is designed to understand your security
								needs and provide tailored solutions.
							</p>
						</div>
					</AnimatedSection>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
						{[
							{
								icon: <Clock className="h-6 w-6 text-primary" />,
								title: "30-Minute Discovery",
								description:
									"A brief introduction to understand your basic security needs.",
								features: [
									"Overview of your current security posture",
									"Identification of key security concerns",
									"Initial recommendations",
								],
								delay: 0,
							},
							{
								icon: <Clock className="h-6 w-6 text-primary" />,
								title: "60-Minute Consultation",
								description:
									"A comprehensive discussion of your security requirements.",
								features: [
									"Detailed analysis of your security needs",
									"Discussion of potential solutions",
									"Customized security strategy",
								],
								delay: 0.2,
							},
							{
								icon: <Clock className="h-6 w-6 text-primary" />,
								title: "90-Minute Deep Dive",
								description:
									"An in-depth exploration of complex security challenges.",
								features: [
									"Comprehensive security assessment",
									"Detailed implementation planning",
									"Long-term security roadmap",
								],
								delay: 0.4,
							},
						].map((meeting, index) => (
							<AnimatedCard key={index} delay={meeting.delay}>
								<Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
									<CardHeader>
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2 transition-transform duration-500 hover:scale-110">
											{meeting.icon}
										</div>
										<CardTitle>{meeting.title}</CardTitle>
										<CardDescription>{meeting.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-sm">
											{meeting.features.map((feature, i) => (
												<li key={i} className="flex items-center">
													<CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</AnimatedCard>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
