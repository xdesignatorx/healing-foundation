import { faqs, siteConfig } from "@/data/site";

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.phoneNumbers,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mehta Market, Opp. Tata Motors",
      addressLocality: "Kumarhatti",
      addressRegion: "Himachal Pradesh",
      addressCountry: "IN"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    sameAs: [siteConfig.whatsapp]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "ContactAction",
      target: siteConfig.whatsapp,
      name: "Confidential WhatsApp enquiry"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([localBusiness, faqSchema, webSite])
      }}
    />
  );
}
