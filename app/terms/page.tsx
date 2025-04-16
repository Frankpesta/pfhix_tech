import { AnimatedSection } from "@/components/animated-section";

export const metadata = {
	title: "Terms and Conditions | Pfhix Cyber Security",
	description:
		"Read the terms and conditions for using Pfhix's cyber security services. Learn about our service terms, user responsibilities, intellectual property rights, and more.",
	keywords:
		"terms and conditions, legal terms, service terms, cyber security terms, Pfhix terms",
	alternates: {
		canonical: "https://pfhix.com/terms",
	},
};

export default function TermsPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="w-full py-12 md:py-16 bg-muted">
				<div className="container px-4 md:px-6">
					<AnimatedSection
						className="flex flex-col justify-center space-y-4"
						animation="fade-up">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Terms and Conditions
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-lg">
								Last updated:{" "}
								{new Date().toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric",
								})}
							</p>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Terms Content */}
			<section className="w-full py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-3xl space-y-8">
						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.1}>
							<h2 className="text-2xl font-bold">1. Introduction</h2>
							<p className="text-muted-foreground">
								Welcome to Pfhix ("Company", "we", "our", "us"). These Terms and
								Conditions ("Terms", "Terms and Conditions") govern your use of
								our website located at pfhix.com (the "Service") and any related
								services offered by Pfhix.
							</p>
							<p className="text-muted-foreground">
								By accessing or using the Service, you agree to be bound by
								these Terms. If you disagree with any part of the terms, then
								you may not access the Service.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.2}>
							<h2 className="text-2xl font-bold">2. Service Terms</h2>
							<p className="text-muted-foreground">
								Our Service includes cyber security consulting, security
								assessments, penetration testing, managed security services,
								incident response, risk assessment, and security training. The
								specific details, deliverables, and timelines for these services
								will be outlined in a separate Statement of Work or Service
								Agreement between Pfhix and the client.
							</p>
							<p className="text-muted-foreground">
								We reserve the right to modify, suspend, or discontinue the
								Service (or any part or content thereof) at any time with or
								without notice, and we will not be liable to you or to any third
								party for any such modification, suspension, or discontinuance.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.3}>
							<h2 className="text-2xl font-bold">3. User Responsibilities</h2>
							<p className="text-muted-foreground">
								When using our Service, you agree to:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									Provide accurate, current, and complete information as may be
									requested in service intake forms or other communications
								</li>
								<li>
									Maintain and promptly update your information to keep it
									accurate, current, and complete
								</li>
								<li>
									Ensure that your use of the Service complies with all
									applicable laws, regulations, and these Terms
								</li>
								<li>
									Obtain proper authorization for any security testing,
									assessments, or related activities performed on systems,
									networks, or applications
								</li>
								<li>
									Maintain the confidentiality of any credentials provided to
									access our Service
								</li>
								<li>
									Notify us immediately of any unauthorized use of your account
									or any other breach of security
								</li>
							</ul>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.4}>
							<h2 className="text-2xl font-bold">4. Intellectual Property</h2>
							<p className="text-muted-foreground">
								The Service and its original content, features, and
								functionality are and will remain the exclusive property of
								Pfhix and its licensors. The Service is protected by copyright,
								trademark, and other laws of both the United States and foreign
								countries. Our trademarks and trade dress may not be used in
								connection with any product or service without the prior written
								consent of Pfhix.
							</p>
							<p className="text-muted-foreground">
								Any deliverables, reports, or materials provided to you as part
								of our Service are for your internal use only, unless otherwise
								specified in a separate agreement. You may not distribute,
								modify, transmit, reuse, repost, or use the content of our
								Service for public or commercial purposes, including the text,
								images, audio, and video, without written permission from Pfhix.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.5}>
							<h2 className="text-2xl font-bold">5. Confidentiality</h2>
							<p className="text-muted-foreground">
								We understand the sensitive nature of security services and
								commit to maintaining the confidentiality of your information.
								We will not disclose your confidential information to any third
								party unless required by law or with your explicit permission.
								Confidential information includes, but is not limited to,
								security assessment results, vulnerability information, network
								configurations, and any other sensitive data shared during the
								course of our Service.
							</p>
							<p className="text-muted-foreground">
								Similarly, you agree to maintain the confidentiality of any
								proprietary information, methodologies, or tools shared by Pfhix
								during the provision of our Service.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.6}>
							<h2 className="text-2xl font-bold">6. Limitation of Liability</h2>
							<p className="text-muted-foreground">
								In no event shall Pfhix, nor its directors, employees, partners,
								agents, suppliers, or affiliates, be liable for any indirect,
								incidental, special, consequential, or punitive damages,
								including without limitation, loss of profits, data, use,
								goodwill, or other intangible losses, resulting from:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									Your access to or use of or inability to access or use the
									Service
								</li>
								<li>
									Any conduct or content of any third party on the Service
								</li>
								<li>Any content obtained from the Service</li>
								<li>
									Unauthorized access, use, or alteration of your transmissions
									or content
								</li>
								<li>
									Security breaches or incidents that occur despite our
									services, as no security measure can guarantee complete
									protection against all threats
								</li>
							</ul>
							<p className="text-muted-foreground">
								Our liability is limited to the maximum extent permitted by law
								and shall not exceed the amount paid by you, if any, for
								accessing or using our Service.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.7}>
							<h2 className="text-2xl font-bold">7. Indemnification</h2>
							<p className="text-muted-foreground">
								You agree to defend, indemnify, and hold harmless Pfhix and its
								licensee and licensors, and their employees, contractors,
								agents, officers, and directors, from and against any and all
								claims, damages, obligations, losses, liabilities, costs or
								debt, and expenses (including but not limited to attorney's
								fees), resulting from or arising out of:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>Your use and access of the Service</li>
								<li>Your violation of any term of these Terms</li>
								<li>
									Your violation of any third-party right, including without
									limitation any copyright, property, or privacy right
								</li>
								<li>
									Any claim that your actions caused damage to a third party
								</li>
							</ul>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.8}>
							<h2 className="text-2xl font-bold">8. Termination</h2>
							<p className="text-muted-foreground">
								We may terminate or suspend your access to our Service
								immediately, without prior notice or liability, for any reason
								whatsoever, including without limitation if you breach the
								Terms.
							</p>
							<p className="text-muted-foreground">
								All provisions of the Terms which by their nature should survive
								termination shall survive termination, including, without
								limitation, ownership provisions, warranty disclaimers,
								indemnity, and limitations of liability.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.9}>
							<h2 className="text-2xl font-bold">9. Governing Law</h2>
							<p className="text-muted-foreground">
								These Terms shall be governed and construed in accordance with
								the laws of the United States and the State of Delaware, without
								regard to its conflict of law provisions.
							</p>
							<p className="text-muted-foreground">
								Our failure to enforce any right or provision of these Terms
								will not be considered a waiver of those rights. If any
								provision of these Terms is held to be invalid or unenforceable
								by a court, the remaining provisions of these Terms will remain
								in effect.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={1.0}>
							<h2 className="text-2xl font-bold">10. Changes to Terms</h2>
							<p className="text-muted-foreground">
								We reserve the right, at our sole discretion, to modify or
								replace these Terms at any time. If a revision is material, we
								will try to provide at least 30 days' notice prior to any new
								terms taking effect. What constitutes a material change will be
								determined at our sole discretion.
							</p>
							<p className="text-muted-foreground">
								By continuing to access or use our Service after those revisions
								become effective, you agree to be bound by the revised terms. If
								you do not agree to the new terms, please stop using the
								Service.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={1.1}>
							<h2 className="text-2xl font-bold">11. Contact Us</h2>
							<p className="text-muted-foreground">
								If you have any questions about these Terms, please contact us
								at:
							</p>
							<p className="text-muted-foreground">
								Pfhix Cyber Security
								<br />
								123 Security Street
								<br />
								Cyber City, CS 12345
								<br />
								United States
								<br />
								Email: legal@pfhix.com
								<br />
								Phone: +1 (555) 123-4567
							</p>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebPage",
						name: "Terms and Conditions",
						description:
							"Terms and conditions for using Pfhix's cyber security services.",
						publisher: {
							"@type": "Organization",
							name: "Pfhix Cyber Security",
							logo: {
								"@type": "ImageObject",
								url: "https://pfhix.com/logo.png",
							},
						},
						mainEntity: {
							"@type": "WebContent",
							about: {
								"@type": "Thing",
								name: "Terms and Conditions",
								description:
									"Legal terms governing the use of Pfhix's cyber security services.",
							},
							datePublished: new Date().toISOString(),
							dateModified: new Date().toISOString(),
						},
					}),
				}}
			/>
		</div>
	);
}
