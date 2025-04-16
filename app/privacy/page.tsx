import { AnimatedSection } from "@/components/animated-section";

export const metadata = {
	title: "Privacy Policy | Pfhix Cyber Security",
	description:
		"Learn about how Pfhix collects, uses, and protects your personal information. Our privacy policy explains your rights and our data protection practices.",
	keywords:
		"privacy policy, data protection, personal information, GDPR, CCPA, cyber security privacy",
	alternates: {
		canonical: "https://pfhix.com/privacy",
	},
};

export default function PrivacyPage() {
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
								Privacy Policy
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

			{/* Privacy Content */}
			<section className="w-full py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-3xl space-y-8">
						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.1}>
							<h2 className="text-2xl font-bold">1. Introduction</h2>
							<p className="text-muted-foreground">
								At Pfhix ("Company", "we", "our", "us"), we respect your privacy
								and are committed to protecting your personal data. This privacy
								policy will inform you about how we look after your personal
								data when you visit our website (regardless of where you visit
								it from) or use our services, and tell you about your privacy
								rights and how the law protects you.
							</p>
							<p className="text-muted-foreground">
								This privacy policy applies to all personal data collected
								through our website at pfhix.com, as well as any related
								services, sales, marketing, or events (collectively, the
								"Services").
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.2}>
							<h2 className="text-2xl font-bold">2. Information We Collect</h2>
							<p className="text-muted-foreground">
								We collect several different types of information for various
								purposes to provide and improve our Service to you.
							</p>
							<h3 className="text-xl font-semibold mt-4">2.1 Personal Data</h3>
							<p className="text-muted-foreground">
								While using our Service, we may ask you to provide us with
								certain personally identifiable information that can be used to
								contact or identify you ("Personal Data"). Personally
								identifiable information may include, but is not limited to:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>Email address</li>
								<li>First name and last name</li>
								<li>Phone number</li>
								<li>Address, State, Province, ZIP/Postal code, City</li>
								<li>Company name and job title</li>
								<li>Cookies and Usage Data</li>
							</ul>

							<h3 className="text-xl font-semibold mt-4">2.2 Usage Data</h3>
							<p className="text-muted-foreground">
								We may also collect information on how the Service is accessed
								and used ("Usage Data"). This Usage Data may include information
								such as your computer's Internet Protocol address (e.g., IP
								address), browser type, browser version, the pages of our
								Service that you visit, the time and date of your visit, the
								time spent on those pages, unique device identifiers, and other
								diagnostic data.
							</p>

							<h3 className="text-xl font-semibold mt-4">
								2.3 Tracking & Cookies Data
							</h3>
							<p className="text-muted-foreground">
								We use cookies and similar tracking technologies to track the
								activity on our Service and hold certain information. Cookies
								are files with a small amount of data which may include an
								anonymous unique identifier.
							</p>
							<p className="text-muted-foreground">
								You can instruct your browser to refuse all cookies or to
								indicate when a cookie is being sent. However, if you do not
								accept cookies, you may not be able to use some portions of our
								Service.
							</p>
							<p className="text-muted-foreground">
								Examples of Cookies we use:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									<strong>Session Cookies:</strong> We use Session Cookies to
									operate our Service.
								</li>
								<li>
									<strong>Preference Cookies:</strong> We use Preference Cookies
									to remember your preferences and various settings.
								</li>
								<li>
									<strong>Security Cookies:</strong> We use Security Cookies for
									security purposes.
								</li>
							</ul>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.3}>
							<h2 className="text-2xl font-bold">
								3. How We Use Your Information
							</h2>
							<p className="text-muted-foreground">
								Pfhix uses the collected data for various purposes:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>To provide and maintain our Service</li>
								<li>To notify you about changes to our Service</li>
								<li>
									To allow you to participate in interactive features of our
									Service when you choose to do so
								</li>
								<li>To provide customer support</li>
								<li>
									To gather analysis or valuable information so that we can
									improve our Service
								</li>
								<li>To monitor the usage of our Service</li>
								<li>To detect, prevent and address technical issues</li>
								<li>
									To provide you with news, special offers and general
									information about other goods, services and events which we
									offer that are similar to those that you have already
									purchased or enquired about unless you have opted not to
									receive such information
								</li>
							</ul>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.4}>
							<h2 className="text-2xl font-bold">
								4. Legal Basis for Processing Personal Data
							</h2>
							<p className="text-muted-foreground">
								Our legal basis for collecting and using the personal
								information described in this Privacy Policy depends on the
								Personal Data we collect and the specific context in which we
								collect it.
							</p>
							<p className="text-muted-foreground">
								Pfhix may process your Personal Data because:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>We need to perform a contract with you</li>
								<li>You have given us permission to do so</li>
								<li>
									The processing is in our legitimate interests and it's not
									overridden by your rights
								</li>
								<li>To comply with the law</li>
							</ul>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.5}>
							<h2 className="text-2xl font-bold">5. Retention of Data</h2>
							<p className="text-muted-foreground">
								Pfhix will retain your Personal Data only for as long as is
								necessary for the purposes set out in this Privacy Policy. We
								will retain and use your Personal Data to the extent necessary
								to comply with our legal obligations (for example, if we are
								required to retain your data to comply with applicable laws),
								resolve disputes, and enforce our legal agreements and policies.
							</p>
							<p className="text-muted-foreground">
								Pfhix will also retain Usage Data for internal analysis
								purposes. Usage Data is generally retained for a shorter period
								of time, except when this data is used to strengthen the
								security or to improve the functionality of our Service, or we
								are legally obligated to retain this data for longer time
								periods.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.6}>
							<h2 className="text-2xl font-bold">6. Transfer of Data</h2>
							<p className="text-muted-foreground">
								Your information, including Personal Data, may be transferred to
								— and maintained on — computers located outside of your state,
								province, country or other governmental jurisdiction where the
								data protection laws may differ from those of your jurisdiction.
							</p>
							<p className="text-muted-foreground">
								If you are located outside the United States and choose to
								provide information to us, please note that we transfer the
								data, including Personal Data, to the United States and process
								it there.
							</p>
							<p className="text-muted-foreground">
								Your consent to this Privacy Policy followed by your submission
								of such information represents your agreement to that transfer.
							</p>
							<p className="text-muted-foreground">
								Pfhix will take all steps reasonably necessary to ensure that
								your data is treated securely and in accordance with this
								Privacy Policy and no transfer of your Personal Data will take
								place to an organization or a country unless there are adequate
								controls in place including the security of your data and other
								personal information.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.7}>
							<h2 className="text-2xl font-bold">7. Disclosure of Data</h2>
							<h3 className="text-xl font-semibold mt-4">
								7.1 Business Transaction
							</h3>
							<p className="text-muted-foreground">
								If Pfhix is involved in a merger, acquisition or asset sale,
								your Personal Data may be transferred. We will provide notice
								before your Personal Data is transferred and becomes subject to
								a different Privacy Policy.
							</p>

							<h3 className="text-xl font-semibold mt-4">
								7.2 Disclosure for Law Enforcement
							</h3>
							<p className="text-muted-foreground">
								Under certain circumstances, Pfhix may be required to disclose
								your Personal Data if required to do so by law or in response to
								valid requests by public authorities (e.g., a court or a
								government agency).
							</p>

							<h3 className="text-xl font-semibold mt-4">
								7.3 Legal Requirements
							</h3>
							<p className="text-muted-foreground">
								Pfhix may disclose your Personal Data in the good faith belief
								that such action is necessary to:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>To comply with a legal obligation</li>
								<li>To protect and defend the rights or property of Pfhix</li>
								<li>
									To prevent or investigate possible wrongdoing in connection
									with the Service
								</li>
								<li>
									To protect the personal safety of users of the Service or the
									public
								</li>
								<li>To protect against legal liability</li>
							</ul>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.8}>
							<h2 className="text-2xl font-bold">8. Security of Data</h2>
							<p className="text-muted-foreground">
								The security of your data is important to us, but remember that
								no method of transmission over the Internet, or method of
								electronic storage is 100% secure. While we strive to use
								commercially acceptable means to protect your Personal Data, we
								cannot guarantee its absolute security.
							</p>
							<p className="text-muted-foreground">
								As a cyber security company, we implement robust security
								measures to protect your data, including encryption, access
								controls, regular security assessments, and employee training on
								data protection best practices.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={0.9}>
							<h2 className="text-2xl font-bold">
								9. Your Data Protection Rights
							</h2>
							<p className="text-muted-foreground">
								Depending on your location and applicable laws, you may have
								certain rights regarding your personal data:
							</p>

							<h3 className="text-xl font-semibold mt-4">
								9.1 GDPR Data Protection Rights
							</h3>
							<p className="text-muted-foreground">
								If you are a resident of the European Economic Area (EEA), you
								have certain data protection rights. Pfhix aims to take
								reasonable steps to allow you to correct, amend, delete, or
								limit the use of your Personal Data.
							</p>
							<p className="text-muted-foreground">
								You have the following data protection rights:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									The right to access, update or delete the information we have
									on you
								</li>
								<li>
									The right of rectification - the right to have your
									information corrected if it is inaccurate or incomplete
								</li>
								<li>
									The right to object to our processing of your Personal Data
								</li>
								<li>
									The right of restriction - the right to request that we
									restrict the processing of your personal information
								</li>
								<li>
									The right to data portability - the right to be provided with
									a copy of the information we have on you in a structured,
									machine-readable and commonly used format
								</li>
								<li>
									The right to withdraw consent - the right to withdraw your
									consent at any time where Pfhix relied on your consent to
									process your personal information
								</li>
							</ul>

							<h3 className="text-xl font-semibold mt-4">
								9.2 CCPA Privacy Rights
							</h3>
							<p className="text-muted-foreground">
								If you are a California resident, you have specific rights
								regarding your personal information under the California
								Consumer Privacy Act (CCPA). This section describes your CCPA
								rights and explains how to exercise those rights.
							</p>
							<p className="text-muted-foreground">
								Under the CCPA, you have the following rights:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
								<li>
									The right to know what personal information we collect, use,
									disclose, and sell
								</li>
								<li>
									The right to delete personal information collected from you
									(with certain exceptions)
								</li>
								<li>
									The right to opt-out of the sale of your personal information
								</li>
								<li>
									The right to non-discrimination for exercising your CCPA
									rights
								</li>
							</ul>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={1.0}>
							<h2 className="text-2xl font-bold">10. Service Providers</h2>
							<p className="text-muted-foreground">
								We may employ third-party companies and individuals to
								facilitate our Service ("Service Providers"), to provide the
								Service on our behalf, to perform Service-related services or to
								assist us in analyzing how our Service is used.
							</p>
							<p className="text-muted-foreground">
								These third parties have access to your Personal Data only to
								perform these tasks on our behalf and are obligated not to
								disclose or use it for any other purpose. We have contracts in
								place with our data processors, which are designed to help
								safeguard your personal information.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={1.1}>
							<h2 className="text-2xl font-bold">11. Analytics</h2>
							<p className="text-muted-foreground">
								We may use third-party Service Providers to monitor and analyze
								the use of our Service.
							</p>
							<p className="text-muted-foreground">
								<strong>Google Analytics:</strong> Google Analytics is a web
								analytics service offered by Google that tracks and reports
								website traffic. Google uses the data collected to track and
								monitor the use of our Service. This data is shared with other
								Google services. Google may use the collected data to
								contextualize and personalize the ads of its own advertising
								network.
							</p>
							<p className="text-muted-foreground">
								You can opt-out of having your activity on the Service available
								to Google Analytics by installing the Google Analytics opt-out
								browser add-on. The add-on prevents the Google Analytics
								JavaScript (ga.js, analytics.js, and dc.js) from sharing
								information with Google Analytics about visits activity.
							</p>
							<p className="text-muted-foreground">
								For more information on the privacy practices of Google, please
								visit the Google Privacy & Terms web page:{" "}
								<a
									href="https://policies.google.com/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:underline">
									https://policies.google.com/privacy
								</a>
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={1.2}>
							<h2 className="text-2xl font-bold">12. Links to Other Sites</h2>
							<p className="text-muted-foreground">
								Our Service may contain links to other sites that are not
								operated by us. If you click on a third-party link, you will be
								directed to that third party's site. We strongly advise you to
								review the Privacy Policy of every site you visit.
							</p>
							<p className="text-muted-foreground">
								We have no control over and assume no responsibility for the
								content, privacy policies or practices of any third-party sites
								or services.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={1.3}>
							<h2 className="text-2xl font-bold">13. Children's Privacy</h2>
							<p className="text-muted-foreground">
								Our Service does not address anyone under the age of 18
								("Children").
							</p>
							<p className="text-muted-foreground">
								We do not knowingly collect personally identifiable information
								from anyone under the age of 18. If you are a parent or guardian
								and you are aware that your Children has provided us with
								Personal Data, please contact us. If we become aware that we
								have collected Personal Data from children without verification
								of parental consent, we take steps to remove that information
								from our servers.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={1.4}>
							<h2 className="text-2xl font-bold">
								14. Changes to This Privacy Policy
							</h2>
							<p className="text-muted-foreground">
								We may update our Privacy Policy from time to time. We will
								notify you of any changes by posting the new Privacy Policy on
								this page and updating the "Last updated" date at the top of
								this Privacy Policy.
							</p>
							<p className="text-muted-foreground">
								You are advised to review this Privacy Policy periodically for
								any changes. Changes to this Privacy Policy are effective when
								they are posted on this page.
							</p>
						</AnimatedSection>

						<AnimatedSection
							className="space-y-4"
							animation="fade-up"
							delay={1.5}>
							<h2 className="text-2xl font-bold">15. Contact Us</h2>
							<p className="text-muted-foreground">
								If you have any questions about this Privacy Policy, please
								contact us:
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
								Email: privacy@pfhix.com
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
						name: "Privacy Policy",
						description: "Privacy policy for Pfhix's cyber security services.",
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
								name: "Privacy Policy",
								description:
									"Information about how Pfhix collects, uses, and protects personal data.",
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
