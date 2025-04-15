import SchedulePageClient from "./SchedulePageClient";

export const metadata = {
	title: "Schedule a Security Consultation | Pfhix",
	description:
		"Book a consultation with our cyber security experts. Discuss your security needs and get personalized recommendations for your business.",
	keywords:
		"schedule meeting, security consultation, cyber security meeting, book appointment, security expert",
};

export default function SchedulePage() {
	return (
		<>
			<SchedulePageClient />
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Service",
						name: "Security Consultation",
						description:
							"Book a consultation with our cyber security experts to discuss your security needs.",
						provider: {
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
						},
						offers: {
							"@type": "Offer",
							availability: "https://schema.org/InStock",
							price: "0",
							priceCurrency: "USD",
							validFrom: "2023-01-01",
							url: "https://pfhix.com/schedule",
						},
					}),
				}}
			/>
		</>
	);
}
