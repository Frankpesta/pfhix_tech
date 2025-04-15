import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Heart,
	Briefcase,
	Award,
	Users,
	Clock,
	Globe,
	ArrowRight,
	MapPin,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedImage } from "@/components/animated-image";

export const metadata = {
	title: "Careers at Pfhix | Join Our Cyber Security Team",
	description:
		"Join our team of cyber security experts at Pfhix. Explore current job openings, company culture, benefits, and growth opportunities in the security industry.",
	keywords:
		"cyber security careers, security jobs, Pfhix careers, cyber security employment, security analyst jobs",
	alternates: {
		canonical: "https://pfhix.com/careers",
	},
};

export default function CareersPage() {
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
									Join Our Team
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
									Be part of a team that's making the digital world safer.
									Explore career opportunities at Pfhix.
								</p>
							</div>
						</AnimatedSection>
						<AnimatedImage
							src="/placeholder.svg?height=400&width=600"
							width={600}
							height={400}
							alt="Pfhix security team collaborating on cyber security solutions"
							className="rounded-lg object-cover shadow-lg"
							animation="fade-left"
						/>
					</div>
				</div>
			</section>

			{/* Why Join Us Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Why Join Pfhix?
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
								We offer more than just a job. Join a mission-driven team with a
								culture of innovation and growth.
							</p>
						</div>
					</AnimatedSection>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								icon: <Heart className="h-8 w-8 text-primary" />,
								title: "Meaningful Work",
								description:
									"Make a real impact by protecting organizations from cyber threats and contributing to a safer digital world.",
								delay: 0,
							},
							{
								icon: <Award className="h-8 w-8 text-primary" />,
								title: "Professional Growth",
								description:
									"Continuous learning opportunities, certifications, and career advancement paths tailored to your goals.",
								delay: 0.1,
							},
							{
								icon: <Users className="h-8 w-8 text-primary" />,
								title: "Collaborative Culture",
								description:
									"Work alongside industry experts in a supportive environment that values teamwork and innovation.",
								delay: 0.2,
							},
							{
								icon: <Clock className="h-8 w-8 text-primary" />,
								title: "Work-Life Balance",
								description:
									"Flexible work arrangements, generous PTO, and policies designed to support your wellbeing.",
								delay: 0.3,
							},
							{
								icon: <Briefcase className="h-8 w-8 text-primary" />,
								title: "Competitive Benefits",
								description:
									"Comprehensive health coverage, retirement plans, and additional perks to support you and your family.",
								delay: 0.4,
							},
							{
								icon: <Globe className="h-8 w-8 text-primary" />,
								title: "Global Opportunities",
								description:
									"With offices in multiple countries, explore opportunities to work and grow internationally.",
								delay: 0.5,
							},
						].map((benefit, index) => (
							<AnimatedCard key={index} delay={benefit.delay}>
								<Card className="flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
									<CardHeader>
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 hover:scale-110">
											{benefit.icon}
										</div>
										<CardTitle className="mt-4">{benefit.title}</CardTitle>
									</CardHeader>
									<CardContent className="flex-1">
										<p className="text-sm text-muted-foreground">
											{benefit.description}
										</p>
									</CardContent>
								</Card>
							</AnimatedCard>
						))}
					</div>
				</div>
			</section>

			{/* Our Culture Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<AnimatedSection
							className="flex flex-col justify-center space-y-4"
							animation="fade-right">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
									Our Culture
								</h2>
								<p className="text-muted-foreground md:text-lg/relaxed">
									At Pfhix, we believe that our people are our greatest asset.
									We've built a culture that values innovation, collaboration,
									and continuous learning. We celebrate diversity and are
									committed to creating an inclusive environment where everyone
									can thrive.
								</p>
								<p className="text-muted-foreground md:text-lg/relaxed">
									Our team members are passionate about cyber security and
									driven by our mission to make the digital world safer. We work
									hard, but we also know the importance of balance and taking
									time to recharge.
								</p>
								<p className="text-muted-foreground md:text-lg/relaxed">
									We foster a culture of ownership and empowerment, where every
									team member has the opportunity to make an impact and grow
									both personally and professionally.
								</p>
							</div>
						</AnimatedSection>
						<div className="grid grid-cols-2 gap-4">
							<AnimatedImage
								src="/placeholder.svg?height=250&width=250"
								width={250}
								height={250}
								alt="Pfhix team members collaborating in a modern office environment"
								className="rounded-lg object-cover shadow-lg"
								animation="fade-up"
								delay={0.1}
							/>
							<AnimatedImage
								src="/placeholder.svg?height=250&width=250"
								width={250}
								height={250}
								alt="Pfhix security analysts working together on threat detection"
								className="rounded-lg object-cover shadow-lg"
								animation="fade-up"
								delay={0.2}
							/>
							<AnimatedImage
								src="/placeholder.svg?height=250&width=250"
								width={250}
								height={250}
								alt="Pfhix team building activity promoting collaboration"
								className="rounded-lg object-cover shadow-lg"
								animation="fade-up"
								delay={0.3}
							/>
							<AnimatedImage
								src="/placeholder.svg?height=250&width=250"
								width={250}
								height={250}
								alt="Pfhix office space designed for productivity and collaboration"
								className="rounded-lg object-cover shadow-lg"
								animation="fade-up"
								delay={0.4}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Current Openings Section */}
			<section className="w-full py-12 md:py-24 lg:py-32" id="openings">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Current Openings
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
								Explore our current job opportunities and find your next career
								move.
							</p>
						</div>
					</AnimatedSection>

					<Tabs defaultValue="all" className="w-full mt-8">
						<AnimatedSection
							className="flex justify-center mb-8"
							animation="fade-down">
							<TabsList className="grid w-full max-w-md grid-cols-4">
								<TabsTrigger
									value="all"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									All
								</TabsTrigger>
								<TabsTrigger
									value="security"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Security
								</TabsTrigger>
								<TabsTrigger
									value="engineering"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Engineering
								</TabsTrigger>
								<TabsTrigger
									value="business"
									className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									Business
								</TabsTrigger>
							</TabsList>
						</AnimatedSection>

						<TabsContent
							value="all"
							className="animate-in fade-in-50 duration-500">
							<div className="grid gap-6 md:grid-cols-2">
								{[
									{
										title: "Senior Security Analyst",
										location: "New York, NY",
										type: "Full-time",
										category: "security",
										description:
											"Lead security assessments and penetration testing for enterprise clients. Develop and implement security strategies.",
										requirements: [
											"5+ years of experience in security analysis",
											"CISSP, CEH, or equivalent certification",
											"Experience with SIEM tools and threat hunting",
										],
									},
									{
										title: "Security Engineer",
										location: "Remote (US)",
										type: "Full-time",
										category: "security",
										description:
											"Design and implement security solutions for our clients. Monitor and respond to security incidents.",
										requirements: [
											"3+ years of experience in security engineering",
											"Experience with cloud security (AWS, Azure, GCP)",
											"Knowledge of security frameworks (NIST, ISO 27001)",
										],
									},
									{
										title: "Full Stack Developer",
										location: "Austin, TX",
										type: "Full-time",
										category: "engineering",
										description:
											"Develop and maintain security applications and tools. Work with front-end and back-end technologies.",
										requirements: [
											"3+ years of full stack development experience",
											"Proficiency in React, Node.js, and database technologies",
											"Understanding of security principles and best practices",
										],
									},
									{
										title: "DevSecOps Engineer",
										location: "San Francisco, CA",
										type: "Full-time",
										category: "engineering",
										description:
											"Integrate security into the CI/CD pipeline. Automate security testing and deployment processes.",
										requirements: [
											"3+ years of experience in DevOps or DevSecOps",
											"Experience with containerization and orchestration (Docker, Kubernetes)",
											"Knowledge of infrastructure as code (Terraform, CloudFormation)",
										],
									},
									{
										title: "Security Sales Specialist",
										location: "Chicago, IL",
										type: "Full-time",
										category: "business",
										description:
											"Drive sales of security solutions to enterprise clients. Build and maintain client relationships.",
										requirements: [
											"5+ years of B2B sales experience, preferably in security or technology",
											"Strong understanding of cyber security concepts",
											"Proven track record of meeting or exceeding sales targets",
										],
									},
									{
										title: "Marketing Manager",
										location: "Remote (US)",
										type: "Full-time",
										category: "business",
										description:
											"Develop and execute marketing strategies for our security services. Create compelling content and campaigns.",
										requirements: [
											"5+ years of B2B marketing experience",
											"Experience in the technology or security industry",
											"Strong content creation and campaign management skills",
										],
									},
								].map((job, index) => (
									<AnimatedCard key={index} delay={index * 0.1}>
										<Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
											<CardHeader>
												<div className="flex justify-between items-start">
													<div>
														<CardTitle className="text-xl">
															{job.title}
														</CardTitle>
														<CardDescription className="flex items-center mt-1">
															<MapPin className="h-4 w-4 mr-1" />
															{job.location}
														</CardDescription>
													</div>
													<Badge
														variant="outline"
														className="bg-primary/10 text-primary">
														{job.type}
													</Badge>
												</div>
											</CardHeader>
											<CardContent className="space-y-4">
												<p className="text-sm text-muted-foreground">
													{job.description}
												</p>
												<div>
													<h4 className="text-sm font-medium mb-2">
														Requirements:
													</h4>
													<ul className="text-sm text-muted-foreground space-y-1">
														{job.requirements.map((req, i) => (
															<li key={i} className="flex items-start">
																<span className="mr-2">•</span>
																<span>{req}</span>
															</li>
														))}
													</ul>
												</div>
												<Button
													asChild
													className="w-full mt-4 transition-all duration-300 hover:bg-primary/90">
													<Link
														href={`/careers/apply?job=${encodeURIComponent(
															job.title
														)}`}>
														Apply Now <ArrowRight className="ml-2 h-4 w-4" />
													</Link>
												</Button>
											</CardContent>
										</Card>
									</AnimatedCard>
								))}
							</div>
						</TabsContent>

						<TabsContent
							value="security"
							className="animate-in fade-in-50 duration-500">
							<div className="grid gap-6 md:grid-cols-2">
								{[
									{
										title: "Senior Security Analyst",
										location: "New York, NY",
										type: "Full-time",
										category: "security",
										description:
											"Lead security assessments and penetration testing for enterprise clients. Develop and implement security strategies.",
										requirements: [
											"5+ years of experience in security analysis",
											"CISSP, CEH, or equivalent certification",
											"Experience with SIEM tools and threat hunting",
										],
									},
									{
										title: "Security Engineer",
										location: "Remote (US)",
										type: "Full-time",
										category: "security",
										description:
											"Design and implement security solutions for our clients. Monitor and respond to security incidents.",
										requirements: [
											"3+ years of experience in security engineering",
											"Experience with cloud security (AWS, Azure, GCP)",
											"Knowledge of security frameworks (NIST, ISO 27001)",
										],
									},
								].map((job, index) => (
									<AnimatedCard key={index} delay={index * 0.1}>
										<Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
											<CardHeader>
												<div className="flex justify-between items-start">
													<div>
														<CardTitle className="text-xl">
															{job.title}
														</CardTitle>
														<CardDescription className="flex items-center mt-1">
															<MapPin className="h-4 w-4 mr-1" />
															{job.location}
														</CardDescription>
													</div>
													<Badge
														variant="outline"
														className="bg-primary/10 text-primary">
														{job.type}
													</Badge>
												</div>
											</CardHeader>
											<CardContent className="space-y-4">
												<p className="text-sm text-muted-foreground">
													{job.description}
												</p>
												<div>
													<h4 className="text-sm font-medium mb-2">
														Requirements:
													</h4>
													<ul className="text-sm text-muted-foreground space-y-1">
														{job.requirements.map((req, i) => (
															<li key={i} className="flex items-start">
																<span className="mr-2">•</span>
																<span>{req}</span>
															</li>
														))}
													</ul>
												</div>
												<Button
													asChild
													className="w-full mt-4 transition-all duration-300 hover:bg-primary/90">
													<Link
														href={`/careers/apply?job=${encodeURIComponent(
															job.title
														)}`}>
														Apply Now <ArrowRight className="ml-2 h-4 w-4" />
													</Link>
												</Button>
											</CardContent>
										</Card>
									</AnimatedCard>
								))}
							</div>
						</TabsContent>

						<TabsContent
							value="engineering"
							className="animate-in fade-in-50 duration-500">
							<div className="grid gap-6 md:grid-cols-2">
								{[
									{
										title: "Full Stack Developer",
										location: "Austin, TX",
										type: "Full-time",
										category: "engineering",
										description:
											"Develop and maintain security applications and tools. Work with front-end and back-end technologies.",
										requirements: [
											"3+ years of full stack development experience",
											"Proficiency in React, Node.js, and database technologies",
											"Understanding of security principles and best practices",
										],
									},
									{
										title: "DevSecOps Engineer",
										location: "San Francisco, CA",
										type: "Full-time",
										category: "engineering",
										description:
											"Integrate security into the CI/CD pipeline. Automate security testing and deployment processes.",
										requirements: [
											"3+ years of experience in DevOps or DevSecOps",
											"Experience with containerization and orchestration (Docker, Kubernetes)",
											"Knowledge of infrastructure as code (Terraform, CloudFormation)",
										],
									},
								].map((job, index) => (
									<AnimatedCard key={index} delay={index * 0.1}>
										<Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
											<CardHeader>
												<div className="flex justify-between items-start">
													<div>
														<CardTitle className="text-xl">
															{job.title}
														</CardTitle>
														<CardDescription className="flex items-center mt-1">
															<MapPin className="h-4 w-4 mr-1" />
															{job.location}
														</CardDescription>
													</div>
													<Badge
														variant="outline"
														className="bg-primary/10 text-primary">
														{job.type}
													</Badge>
												</div>
											</CardHeader>
											<CardContent className="space-y-4">
												<p className="text-sm text-muted-foreground">
													{job.description}
												</p>
												<div>
													<h4 className="text-sm font-medium mb-2">
														Requirements:
													</h4>
													<ul className="text-sm text-muted-foreground space-y-1">
														{job.requirements.map((req, i) => (
															<li key={i} className="flex items-start">
																<span className="mr-2">•</span>
																<span>{req}</span>
															</li>
														))}
													</ul>
												</div>
												<Button
													asChild
													className="w-full mt-4 transition-all duration-300 hover:bg-primary/90">
													<Link
														href={`/careers/apply?job=${encodeURIComponent(
															job.title
														)}`}>
														Apply Now <ArrowRight className="ml-2 h-4 w-4" />
													</Link>
												</Button>
											</CardContent>
										</Card>
									</AnimatedCard>
								))}
							</div>
						</TabsContent>

						<TabsContent
							value="business"
							className="animate-in fade-in-50 duration-500">
							<div className="grid gap-6 md:grid-cols-2">
								{[
									{
										title: "Security Sales Specialist",
										location: "Chicago, IL",
										type: "Full-time",
										category: "business",
										description:
											"Drive sales of security solutions to enterprise clients. Build and maintain client relationships.",
										requirements: [
											"5+ years of B2B sales experience, preferably in security or technology",
											"Strong understanding of cyber security concepts",
											"Proven track record of meeting or exceeding sales targets",
										],
									},
									{
										title: "Marketing Manager",
										location: "Remote (US)",
										type: "Full-time",
										category: "business",
										description:
											"Develop and execute marketing strategies for our security services. Create compelling content and campaigns.",
										requirements: [
											"5+ years of B2B marketing experience",
											"Experience in the technology or security industry",
											"Strong content creation and campaign management skills",
										],
									},
								].map((job, index) => (
									<AnimatedCard key={index} delay={index * 0.1}>
										<Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
											<CardHeader>
												<div className="flex justify-between items-start">
													<div>
														<CardTitle className="text-xl">
															{job.title}
														</CardTitle>
														<CardDescription className="flex items-center mt-1">
															<MapPin className="h-4 w-4 mr-1" />
															{job.location}
														</CardDescription>
													</div>
													<Badge
														variant="outline"
														className="bg-primary/10 text-primary">
														{job.type}
													</Badge>
												</div>
											</CardHeader>
											<CardContent className="space-y-4">
												<p className="text-sm text-muted-foreground">
													{job.description}
												</p>
												<div>
													<h4 className="text-sm font-medium mb-2">
														Requirements:
													</h4>
													<ul className="text-sm text-muted-foreground space-y-1">
														{job.requirements.map((req, i) => (
															<li key={i} className="flex items-start">
																<span className="mr-2">•</span>
																<span>{req}</span>
															</li>
														))}
													</ul>
												</div>
												<Button
													asChild
													className="w-full mt-4 transition-all duration-300 hover:bg-primary/90">
													<Link
														href={`/careers/apply?job=${encodeURIComponent(
															job.title
														)}`}>
														Apply Now <ArrowRight className="ml-2 h-4 w-4" />
													</Link>
												</Button>
											</CardContent>
										</Card>
									</AnimatedCard>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Application Process Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
								Our Application Process
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-lg">
								We've designed our application process to be transparent and
								efficient. Here's what you can expect:
							</p>
						</div>
					</AnimatedSection>
					<div className="mx-auto max-w-4xl py-12">
						<div className="relative">
							<div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>
							{[
								{
									step: 1,
									title: "Application Submission",
									description:
										"Submit your application through our careers portal. Make sure to include your resume and a cover letter explaining why you're interested in joining Pfhix.",
									delay: 0,
								},
								{
									step: 2,
									title: "Initial Screening",
									description:
										"Our recruiting team will review your application and reach out to schedule an initial phone interview if your qualifications match our requirements.",
									delay: 0.2,
								},
								{
									step: 3,
									title: "Technical Assessment",
									description:
										"Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your skills and problem-solving abilities.",
									delay: 0.4,
								},
								{
									step: 4,
									title: "Team Interviews",
									description:
										"Meet with potential team members and managers through a series of interviews to discuss your experience, skills, and fit with our team and culture.",
									delay: 0.6,
								},
								{
									step: 5,
									title: "Final Decision",
									description:
										"We'll make a decision and extend an offer to the selected candidate. We strive to provide feedback to all candidates who reach the interview stage.",
									delay: 0.8,
								},
							].map((step, index) => (
								<AnimatedSection
									key={index}
									className="relative mb-12 flex items-start gap-8 last:mb-0"
									animation="fade-up"
									delay={step.delay}>
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
										<span className="text-lg font-bold">{step.step}</span>
									</div>
									<div className="space-y-2">
										<h3 className="text-xl font-bold">{step.title}</h3>
										<p className="text-muted-foreground">{step.description}</p>
									</div>
								</AnimatedSection>
							))}
						</div>
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
								Ready to Join Us?
							</h2>
							<p className="max-w-[700px] md:text-xl/relaxed">
								Explore our current openings and take the first step towards a
								rewarding career in cyber security.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button
								asChild
								size="lg"
								variant="secondary"
								className="bg-background text-foreground hover:bg-background/90 animate-pulse-subtle">
								<Link href="#openings">View Open Positions</Link>
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
						"@type": "JobPosting",
						title: "Multiple Positions",
						description:
							"Join our team of cyber security experts at Pfhix. We offer competitive benefits, professional growth opportunities, and a collaborative culture.",
						datePosted: new Date().toISOString(),
						employmentType: "FULL_TIME",
						hiringOrganization: {
							"@type": "Organization",
							name: "Pfhix Cyber Security",
							sameAs: "https://pfhix.com",
							logo: "https://pfhix.com/logo.png",
						},
						jobLocation: {
							"@type": "Place",
							address: {
								"@type": "PostalAddress",
								addressLocality: "Multiple Locations",
								addressRegion: "US",
								addressCountry: "US",
							},
						},
						baseSalary: {
							"@type": "MonetaryAmount",
							currency: "USD",
							value: {
								"@type": "QuantitativeValue",
								minValue: 80000,
								maxValue: 150000,
								unitText: "YEAR",
							},
						},
					}),
				}}
			/>
		</div>
	);
}
