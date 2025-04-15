import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Target, Clock, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedImage } from "@/components/animated-image";

export const metadata = {
	title: "About Pfhix | Our Story, Values & Leadership Team",
	description:
		"Learn about Pfhix's mission to make the digital world safer. Meet our expert leadership team and discover the values that drive our cyber security solutions.",
	alternates: {
		canonical: "https://pfhix.com/about",
	},
};

export default function AboutPage() {
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
									About Pfhix
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
									We're on a mission to make the digital world safer for
									businesses of all sizes.
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

			{/* Our Story Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<AnimatedImage
							src="/placeholder.svg?height=500&width=500"
							width={500}
							height={500}
							alt="Pfhix founding team establishing the company's cyber security mission"
							className="rounded-lg object-cover shadow-lg"
							animation="fade-right"
						/>
						<AnimatedSection
							className="flex flex-col justify-center space-y-4"
							animation="fade-left">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
									Our Story
								</h2>
								<p className="text-muted-foreground md:text-lg/relaxed">
									Founded in 2015, Pfhix was born out of a vision to democratize
									access to enterprise-grade cyber security solutions. Our
									founders, with decades of experience in the security industry,
									recognized that businesses of all sizes face similar threats
									but often lack the resources to combat them effectively.
								</p>
								<p className="text-muted-foreground md:text-lg/relaxed">
									What started as a small team of security experts has grown
									into a global organization with a presence in multiple
									countries. Throughout our journey, our mission has remained
									the same: to protect our clients' digital assets with
									innovative, effective, and accessible security solutions.
								</p>
								<p className="text-muted-foreground md:text-lg/relaxed">
									Today, we serve hundreds of clients across various industries,
									from startups to Fortune 500 companies, helping them navigate
									the complex and ever-evolving landscape of cyber threats.
								</p>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Our Values Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Our Values
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
								The principles that guide everything we do at Pfhix.
							</p>
						</div>
					</AnimatedSection>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								icon: <Shield className="h-12 w-12 text-primary" />,
								title: "Integrity",
								description:
									"We operate with honesty and transparency in all our interactions with clients and partners.",
								delay: 0,
							},
							{
								icon: <Target className="h-12 w-12 text-primary" />,
								title: "Excellence",
								description:
									"We strive for excellence in everything we do, from our security solutions to our customer service.",
								delay: 0.1,
							},
							{
								icon: <Zap className="h-12 w-12 text-primary" />,
								title: "Innovation",
								description:
									"We continuously innovate to stay ahead of evolving threats and provide cutting-edge solutions.",
								delay: 0.2,
							},
							{
								icon: <Users className="h-12 w-12 text-primary" />,
								title: "Collaboration",
								description:
									"We work closely with our clients to understand their unique needs and develop tailored solutions.",
								delay: 0.3,
							},
							{
								icon: <Award className="h-12 w-12 text-primary" />,
								title: "Accountability",
								description:
									"We take responsibility for our actions and are committed to delivering on our promises.",
								delay: 0.4,
							},
							{
								icon: <Clock className="h-12 w-12 text-primary" />,
								title: "Responsiveness",
								description:
									"We respond quickly to our clients' needs and security incidents to minimize impact.",
								delay: 0.5,
							},
						].map((value, index) => (
							<AnimatedCard key={index} delay={value.delay}>
								<Card className="flex flex-col items-center text-center p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
									<div className="mb-4 transition-transform duration-500 hover:scale-110">
										{value.icon}
									</div>
									<h3 className="text-xl font-bold">{value.title}</h3>
									<CardContent className="p-0 pt-2">
										<p className="text-sm text-muted-foreground">
											{value.description}
										</p>
									</CardContent>
								</Card>
							</AnimatedCard>
						))}
					</div>
				</div>
			</section>

			{/* Leadership Team Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col items-center justify-center space-y-4 text-center"
						animation="fade-up">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Our Leadership Team
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
								Meet the experts leading our mission to secure the digital
								world.
							</p>
						</div>
					</AnimatedSection>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								name: "Jane Doe",
								position: "Chief Executive Officer",
								bio: "With over 15 years of experience in cyber security, Jane leads our team with vision and expertise.",
								delay: 0,
							},
							{
								name: "John Smith",
								position: "Chief Technology Officer",
								bio: "John brings 20 years of technical expertise in developing cutting-edge security solutions.",
								delay: 0.1,
							},
							{
								name: "Emily Chen",
								position: "Chief Security Officer",
								bio: "Emily's background in threat intelligence helps shape our proactive security strategies.",
								delay: 0.2,
							},
							{
								name: "Michael Johnson",
								position: "VP of Operations",
								bio: "Michael ensures our security operations run smoothly and efficiently for all clients.",
								delay: 0.3,
							},
							{
								name: "Sarah Williams",
								position: "Director of Research",
								bio: "Sarah leads our research team in identifying emerging threats and developing countermeasures.",
								delay: 0.4,
							},
							{
								name: "David Rodriguez",
								position: "Client Success Director",
								bio: "David works closely with clients to ensure their security needs are met and exceeded.",
								delay: 0.5,
							},
						].map((member, index) => (
							<AnimatedSection
								key={index}
								className="flex flex-col items-center text-center"
								animation="fade-up"
								delay={member.delay}>
								<div className="overflow-hidden rounded-full transition-transform duration-500 hover:scale-105">
									<Image
										src="/placeholder.svg?height=200&width=200"
										width={200}
										height={200}
										alt={`${member.name}, ${member.position} at Pfhix Cyber Security`}
										className="object-cover mb-4 transition-transform duration-700 hover:scale-110"
									/>
								</div>
								<h3 className="text-xl font-bold">{member.name}</h3>
								<p className="text-sm text-muted-foreground mb-2">
									{member.position}
								</p>
								<p className="text-sm text-muted-foreground max-w-[300px]">
									{member.bio}
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
								Join Our Team
							</h2>
							<p className="max-w-[700px] md:text-xl/relaxed">
								We're always looking for talented individuals to join our
								mission of making the digital world safer.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button
								asChild
								size="lg"
								variant="secondary"
								className="bg-background text-foreground hover:bg-background/90 animate-pulse-subtle">
								<Link href="/careers">View Open Positions</Link>
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
						"@type": "AboutPage",
						mainEntity: {
							"@type": "Organization",
							name: "Pfhix Cyber Security",
							description:
								"Enterprise-grade cyber security solutions for businesses of all sizes.",
							foundingDate: "2015",
							founders: [
								{
									"@type": "Person",
									name: "Jane Doe",
									jobTitle: "Chief Executive Officer",
								},
								{
									"@type": "Person",
									name: "John Smith",
									jobTitle: "Chief Technology Officer",
								},
							],
							employees: [
								{
									"@type": "Person",
									name: "Emily Chen",
									jobTitle: "Chief Security Officer",
								},
								{
									"@type": "Person",
									name: "Michael Johnson",
									jobTitle: "VP of Operations",
								},
								{
									"@type": "Person",
									name: "Sarah Williams",
									jobTitle: "Director of Research",
								},
								{
									"@type": "Person",
									name: "David Rodriguez",
									jobTitle: "Client Success Director",
								},
							],
						},
					}),
				}}
			/>
		</div>
	);
}
