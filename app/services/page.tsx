import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Shield,
	Lock,
	Server,
	AlertTriangle,
	BarChart,
	Users,
	Check,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedImage } from "@/components/animated-image";

export const metadata = {
	title: "Cyber Security Services | Pfhix",
	description:
		"Comprehensive cyber security solutions including security audits, penetration testing, managed security, incident response, risk assessment, and security training.",
	keywords:
		"security audit, penetration testing, managed security, incident response, risk assessment, security training, cyber security services",
	alternates: {
		canonical: "https://pfhix.com/services",
	},
};

export default function ServicesPage() {
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
									Our Services
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
									Comprehensive cyber security solutions tailored to your
									business needs.
								</p>
							</div>
						</AnimatedSection>
						<AnimatedImage
							src="/placeholder.svg?height=400&width=600"
							width={600}
							height={400}
							alt="Cyber security services dashboard showing multiple security monitoring screens"
							className="rounded-lg object-cover shadow-lg"
							animation="fade-left"
						/>
					</div>
				</div>
			</section>

			{/* Services Tabs Section */}
			<section className="w-full py-12 md:py-24 lg:py-32" id="services-tabs">
				<div className="container px-4 md:px-6">
					<Tabs defaultValue="security-audit" className="w-full">
						<AnimatedSection
							className="flex justify-center mb-8"
							animation="fade-down">
							<TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-3">
								<TabsTrigger
									value="security-audit"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Security Audit
								</TabsTrigger>
								<TabsTrigger
									value="penetration-testing"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Penetration Testing
								</TabsTrigger>
								<TabsTrigger
									value="managed-security"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Managed Security
								</TabsTrigger>
								<TabsTrigger
									value="incident-response"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Incident Response
								</TabsTrigger>
								<TabsTrigger
									value="risk-assessment"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Risk Assessment
								</TabsTrigger>
								<TabsTrigger
									value="security-training"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Security Training
								</TabsTrigger>
							</TabsList>
						</AnimatedSection>

						{[
							{
								id: "security-audit",
								icon: <Shield className="h-6 w-6 text-primary" />,
								title: "Security Audit",
								description:
									"Comprehensive assessment of your security posture",
								content:
									"Our security audit service provides a thorough assessment of your organization's security posture, identifying vulnerabilities and recommending improvements to enhance your overall security.",
								features: [
									"Infrastructure security assessment",
									"Application security review",
									"Policy and procedure evaluation",
									"Compliance gap analysis",
									"Detailed findings report",
									"Prioritized remediation recommendations",
								],
								image: "/placeholder.svg?height=300&width=400",
								imageAlt:
									"Security audit process showing vulnerability assessment dashboard",
							},
							{
								id: "penetration-testing",
								icon: <Lock className="h-6 w-6 text-primary" />,
								title: "Penetration Testing",
								description: "Simulated cyber attacks to test your defenses",
								content:
									"Our penetration testing service simulates real-world cyber attacks to identify vulnerabilities in your systems before malicious actors can exploit them.",
								features: [
									"External network penetration testing",
									"Internal network penetration testing",
									"Web application penetration testing",
									"Mobile application penetration testing",
									"Detailed vulnerability report",
									"Remediation guidance and support",
								],
								image: "/placeholder.svg?height=300&width=400",
								imageAlt:
									"Penetration testing visualization showing network attack vectors",
							},
							{
								id: "managed-security",
								icon: <Server className="h-6 w-6 text-primary" />,
								title: "Managed Security",
								description:
									"24/7 monitoring and management of your security infrastructure",
								content:
									"Our managed security service provides continuous monitoring and management of your security infrastructure, ensuring your systems are protected around the clock.",
								features: [
									"24/7 security monitoring",
									"Threat detection and response",
									"Security device management",
									"Vulnerability management",
									"Regular security reporting",
									"Security advisory services",
								],
								image: "/placeholder.svg?height=300&width=400",
								imageAlt:
									"Security operations center with 24/7 monitoring screens",
							},
							{
								id: "incident-response",
								icon: <AlertTriangle className="h-6 w-6 text-primary" />,
								title: "Incident Response",
								description: "Rapid response to security incidents",
								content:
									"Our incident response service provides rapid response to security incidents, minimizing damage and recovery time when a breach occurs.",
								features: [
									"24/7 incident response support",
									"Incident containment and eradication",
									"Forensic investigation",
									"Recovery assistance",
									"Post-incident analysis",
									"Recommendations for future prevention",
								],
								image: "/placeholder.svg?height=300&width=400",
								imageAlt:
									"Incident response team analyzing security breach data",
							},
							{
								id: "risk-assessment",
								icon: <BarChart className="h-6 w-6 text-primary" />,
								title: "Risk Assessment",
								description: "Identify and prioritize security risks",
								content:
									"Our risk assessment service helps you identify and prioritize security risks based on your business needs, enabling you to allocate resources effectively.",
								features: [
									"Asset identification and valuation",
									"Threat and vulnerability assessment",
									"Risk analysis and prioritization",
									"Risk treatment recommendations",
									"Risk management strategy",
									"Executive summary and detailed report",
								],
								image: "/placeholder.svg?height=300&width=400",
								imageAlt:
									"Risk assessment matrix showing threat levels and vulnerability scores",
							},
							{
								id: "security-training",
								icon: <Users className="h-6 w-6 text-primary" />,
								title: "Security Training",
								description: "Educate your team on security best practices",
								content:
									"Our security training service educates your team on security best practices and threat awareness, turning your employees into your first line of defense.",
								features: [
									"Security awareness training",
									"Phishing simulation exercises",
									"Social engineering awareness",
									"Password security training",
									"Data protection best practices",
									"Training effectiveness assessment",
								],
								image: "/placeholder.svg?height=300&width=400",
								imageAlt:
									"Security training session with employees learning about cyber threats",
							},
						].map((service) => (
							<TabsContent
								key={service.id}
								value={service.id}
								id={service.id}
								className="animate-in fade-in-50 duration-500">
								<AnimatedSection animation="fade-up">
									<Card className="transition-all duration-300 hover:shadow-lg">
										<CardHeader>
											<div className="flex items-center gap-4">
												<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 hover:scale-110">
													{service.icon}
												</div>
												<div>
													<CardTitle>{service.title}</CardTitle>
													<CardDescription>
														{service.description}
													</CardDescription>
												</div>
											</div>
										</CardHeader>
										<CardContent>
											<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
												<div className="space-y-4">
													<p className="text-muted-foreground">
														{service.content}
													</p>
													<div className="space-y-2">
														<h3 className="font-medium">What's Included:</h3>
														<ul className="grid gap-2">
															{service.features.map((feature, index) => (
																<li
																	key={index}
																	className="flex items-center gap-2">
																	<Check className="h-4 w-4 text-primary" />
																	<span>{feature}</span>
																</li>
															))}
														</ul>
													</div>
													<div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
														<Button
															asChild
															className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-subtle">
															<Link href="/schedule">
																Schedule a Consultation
															</Link>
														</Button>
													</div>
												</div>
												<AnimatedImage
													src={service.image}
													width={400}
													height={300}
													alt={service.imageAlt}
													className="rounded-lg object-cover shadow-lg"
													animation="fade-left"
												/>
											</div>
										</CardContent>
									</Card>
								</AnimatedSection>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</section>

			{/* Process Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Our Process
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
								How we work with you to secure your business.
							</p>
						</div>
					</AnimatedSection>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
						{[
							{
								step: 1,
								title: "Assessment",
								description:
									"We begin by understanding your business, its security needs, and current posture.",
								delay: 0,
							},
							{
								step: 2,
								title: "Implementation",
								description:
									"We implement tailored security solutions based on your specific requirements.",
								delay: 0.2,
							},
							{
								step: 3,
								title: "Continuous Improvement",
								description:
									"We continuously monitor, evaluate, and enhance your security posture.",
								delay: 0.4,
							},
						].map((step, index) => (
							<AnimatedSection
								key={index}
								className="flex flex-col items-center text-center"
								animation="fade-up"
								delay={step.delay}>
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 hover:scale-110">
									<span className="text-2xl font-bold">{step.step}</span>
								</div>
								<h3 className="mt-4 text-xl font-bold">{step.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									{step.description}
								</p>
							</AnimatedSection>
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
						"@type": "ItemList",
						itemListElement: [
							{
								"@type": "Service",
								position: 1,
								name: "Security Audit",
								description:
									"Comprehensive assessment of your security posture to identify vulnerabilities.",
								provider: {
									"@type": "Organization",
									name: "Pfhix Cyber Security",
								},
								url: "https://pfhix.com/services#security-audit",
							},
							{
								"@type": "Service",
								position: 2,
								name: "Penetration Testing",
								description:
									"Simulated cyber attacks to test your defenses and identify weaknesses.",
								provider: {
									"@type": "Organization",
									name: "Pfhix Cyber Security",
								},
								url: "https://pfhix.com/services#penetration-testing",
							},
							{
								"@type": "Service",
								position: 3,
								name: "Managed Security",
								description:
									"24/7 monitoring and management of your security infrastructure.",
								provider: {
									"@type": "Organization",
									name: "Pfhix Cyber Security",
								},
								url: "https://pfhix.com/services#managed-security",
							},
							{
								"@type": "Service",
								position: 4,
								name: "Incident Response",
								description:
									"Rapid response to security incidents to minimize damage and recovery time.",
								provider: {
									"@type": "Organization",
									name: "Pfhix Cyber Security",
								},
								url: "https://pfhix.com/services#incident-response",
							},
							{
								"@type": "Service",
								position: 5,
								name: "Risk Assessment",
								description:
									"Identify and prioritize security risks based on your business needs.",
								provider: {
									"@type": "Organization",
									name: "Pfhix Cyber Security",
								},
								url: "https://pfhix.com/services#risk-assessment",
							},
							{
								"@type": "Service",
								position: 6,
								name: "Security Training",
								description:
									"Educate your team on security best practices and threat awareness.",
								provider: {
									"@type": "Organization",
									name: "Pfhix Cyber Security",
								},
								url: "https://pfhix.com/services#security-training",
							},
						],
					}),
				}}
			/>
		</div>
	);
}
