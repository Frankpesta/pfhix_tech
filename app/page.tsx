import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Shield,
	Lock,
	Server,
	AlertTriangle,
	BarChart,
	Users,
	ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedImage } from "@/components/animated-image";

export const metadata = {
	title: "Pfhix - Enterprise Cyber Security Solutions | Home",
	description:
		"Protect your business with advanced cyber security solutions. Stay one step ahead of threats with our expert security services.",
	alternates: {
		canonical: "https://pfhix.com",
	},
};

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
						<AnimatedSection
							className="flex flex-col justify-center space-y-4"
							animation="fade-right">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Secure Your Digital Future with Pfhix
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">
									Advanced cyber security solutions to protect your business
									from evolving threats. Stay one step ahead with our expert
									team.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button
									asChild
									size="lg"
									className="bg-primary text-primary-foreground hover:bg-primary animate-pulse-subtle">
									<Link href="/services">Explore Services</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
									<Link href="/schedule">Schedule Meeting</Link>
								</Button>
							</div>
						</AnimatedSection>
						<AnimatedImage
							src="/security2.jpg"
							width={550}
							height={550}
							alt="Cyber Security Dashboard visualization showing real-time threat monitoring"
							className="rounded-lg object-cover shadow-lg"
							animation="fade-left"
						/>
					</div>
				</div>
			</section>

			{/* Trusted By Section */}
			<section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
								Trusted by Leading Organizations
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-lg">
								Protecting businesses across industries with our comprehensive
								security solutions.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
							{[...Array(6)].map((_, i) => (
								<AnimatedSection
									key={i}
									className="flex items-center justify-center"
									animation="zoom-in"
									delay={i * 0.1}>
									<Image
										src="/placeholder.svg?height=40&width=120"
										width={120}
										height={40}
										alt={`Trusted client ${
											i + 1
										} logo - Enterprise security partner`}
										className="grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110"
									/>
								</AnimatedSection>
							))}
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Services Section */}
			<section className="w-full py-12 md:py-24 lg:py-32" id="services">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Comprehensive Security Services
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Protect your business with our full suite of cyber security
								solutions.
							</p>
						</div>
					</AnimatedSection>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								icon: <Shield className="h-8 w-8 text-primary" />,
								title: "Security Audit",
								description:
									"Comprehensive assessment of your security posture to identify vulnerabilities.",
								link: "/services#security-audit",
								delay: 0,
							},
							{
								icon: <Lock className="h-8 w-8 text-primary" />,
								title: "Penetration Testing",
								description:
									"Simulated cyber attacks to test your defenses and identify weaknesses.",
								link: "/services#penetration-testing",
								delay: 0.1,
							},
							{
								icon: <Server className="h-8 w-8 text-primary" />,
								title: "Managed Security",
								description:
									"24/7 monitoring and management of your security infrastructure.",
								link: "/services#managed-security",
								delay: 0.2,
							},
							{
								icon: <AlertTriangle className="h-8 w-8 text-primary" />,
								title: "Incident Response",
								description:
									"Rapid response to security incidents to minimize damage and recovery time.",
								link: "/services#incident-response",
								delay: 0.3,
							},
							{
								icon: <BarChart className="h-8 w-8 text-primary" />,
								title: "Risk Assessment",
								description:
									"Identify and prioritize security risks based on your business needs.",
								link: "/services#risk-assessment",
								delay: 0.4,
							},
							{
								icon: <Users className="h-8 w-8 text-primary" />,
								title: "Security Training",
								description:
									"Educate your team on security best practices and threat awareness.",
								link: "/services#security-training",
								delay: 0.5,
							},
						].map((service, index) => (
							<AnimatedCard key={index} delay={service.delay}>
								<Card className="flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
									<CardHeader>
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 hover:scale-110">
											{service.icon}
										</div>
										<CardTitle className="mt-4">{service.title}</CardTitle>
										<CardDescription>{service.description}</CardDescription>
									</CardHeader>
									<CardContent className="flex flex-col items-center mt-auto">
										<Link
											href={service.link}
											className="inline-flex items-center text-sm font-medium text-primary transition-all duration-300 hover:translate-x-1">
											Learn more <ArrowRight className="ml-1 h-4 w-4" />
										</Link>
									</CardContent>
								</Card>
							</AnimatedCard>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<AnimatedSection
							className="flex flex-col justify-center space-y-4"
							animation="fade-right">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Why Choose Pfhix?
								</h2>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
									We combine industry expertise with cutting-edge technology to
									deliver superior security solutions.
								</p>
							</div>
							<ul className="grid gap-6">
								{[
									{
										icon: <Shield className="h-5 w-5 text-primary" />,
										title: "Expert Team",
										description:
											"Our security professionals have decades of combined experience in the industry.",
									},
									{
										icon: <Lock className="h-5 w-5 text-primary" />,
										title: "Advanced Technology",
										description:
											"We leverage the latest security tools and technologies to stay ahead of threats.",
									},
									{
										icon: <Users className="h-5 w-5 text-primary" />,
										title: "Tailored Solutions",
										description:
											"We customize our security services to meet your specific business needs.",
									},
								].map((feature, index) => (
									<AnimatedSection
										key={index}
										className="flex items-start gap-4"
										animation="fade-up"
										delay={index * 0.1}>
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 hover:scale-110">
											{feature.icon}
										</div>
										<div className="space-y-1">
											<h3 className="font-medium">{feature.title}</h3>
											<p className="text-sm text-muted-foreground">
												{feature.description}
											</p>
										</div>
									</AnimatedSection>
								))}
							</ul>
						</AnimatedSection>
						<AnimatedImage
							src="/placeholder.svg?height=500&width=500"
							width={500}
							height={500}
							alt="Security Operations Center with analysts monitoring threat intelligence dashboards"
							className="rounded-lg object-cover shadow-lg"
							animation="fade-left"
						/>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								What Our Clients Say
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
								Hear from organizations that trust Pfhix with their security
								needs.
							</p>
						</div>
					</AnimatedSection>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								name: "Sarah Johnson",
								position: "CTO, TechCorp",
								testimonial:
									"Pfhix has transformed our security posture. Their team's expertise and proactive approach have given us confidence in our digital security.",
							},
							{
								name: "Michael Chen",
								position: "IT Director, Global Finance",
								testimonial:
									"The penetration testing conducted by Pfhix uncovered critical vulnerabilities that other vendors missed. Their remediation guidance was clear and effective.",
							},
							{
								name: "Emily Rodriguez",
								position: "CISO, Healthcare Systems",
								testimonial:
									"In an industry with strict compliance requirements, Pfhix has been an invaluable partner in ensuring our security meets and exceeds regulatory standards.",
							},
						].map((testimonial, index) => (
							<AnimatedCard key={index} delay={index * 0.1}>
								<Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
									<CardHeader>
										<div className="flex items-center gap-4">
											<Image
												src="/placeholder.svg?height=40&width=40"
												width={40}
												height={40}
												alt={`${testimonial.name} profile photo`}
												className="rounded-full"
											/>
											<div>
												<CardTitle className="text-base">
													{testimonial.name}
												</CardTitle>
												<CardDescription>
													{testimonial.position}
												</CardDescription>
											</div>
										</div>
									</CardHeader>
									<CardContent className="flex-1">
										<p className="text-sm text-muted-foreground">
											"{testimonial.testimonial}"
										</p>
									</CardContent>
								</Card>
							</AnimatedCard>
						))}
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
								Ready to Secure Your Business?
							</h2>
							<p className="max-w-[700px] md:text-xl/relaxed">
								Schedule a consultation with our security experts to discuss
								your needs.
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
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
								<Link href="/contact">Contact Us</Link>
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
						"@type": "Organization",
						name: "Pfhix Cyber Security",
						url: "https://pfhix.com",
						logo: "https://pfhix.com/logo.png",
						description:
							"Enterprise-grade cyber security solutions for businesses of all sizes.",
						address: {
							"@type": "PostalAddress",
							streetAddress: "123 Security Street",
							addressLocality: "Cyber City",
							addressRegion: "CS",
							postalCode: "12345",
							addressCountry: "US",
						},
						contactPoint: {
							"@type": "ContactPoint",
							telephone: "+1-555-123-4567",
							contactType: "customer service",
							availableLanguage: ["English"],
						},
						sameAs: [
							"https://twitter.com/pfhixsecurity",
							"https://linkedin.com/company/pfhix",
							"https://github.com/pfhix",
						],
						offers: {
							"@type": "AggregateOffer",
							offerCount: "6",
							lowPrice: "999",
							highPrice: "9999",
							priceCurrency: "USD",
							offers: [
								{
									"@type": "Offer",
									name: "Security Audit",
									description:
										"Comprehensive assessment of your security posture to identify vulnerabilities.",
									url: "https://pfhix.com/services#security-audit",
								},
								{
									"@type": "Offer",
									name: "Penetration Testing",
									description:
										"Simulated cyber attacks to test your defenses and identify weaknesses.",
									url: "https://pfhix.com/services#penetration-testing",
								},
							],
						},
					}),
				}}
			/>
		</div>
	);
}
