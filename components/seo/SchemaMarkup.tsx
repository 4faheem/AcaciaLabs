import { company } from "@/lib/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name,
    "url": company.url,
    "logo": `${company.url}/icon.png`,
    "founder": [
      {
        "@type": "Person",
        "name": company.ceo,
        "jobTitle": "CEO & Founder",
        "url": `${company.url}/founder`
      },
      {
        "@type": "Person",
        "name": company.coo,
        "jobTitle": "COO & Co-Founder",
        "url": `${company.url}/coo`
      }
    ],
    "member": [
      {
        "@type": "Person",
        "name": company.ceo,
        "url": `${company.url}/founder`
      },
      {
        "@type": "Person",
        "name": company.coo,
        "url": `${company.url}/coo`
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": company.email,
      "contactType": "customer support"
    },
    "sameAs": [
      // Add social links here in the future
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema({ 
  name, 
  role, 
  bio, 
  url, 
  sameAs 
}: { 
  name: string; 
  role: string; 
  bio: string; 
  url?: string; 
  sameAs?: string[]; 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": role,
    "worksFor": {
      "@type": "Organization",
      "name": company.name,
      "url": company.url
    },
    "description": bio,
    ...(url ? { "url": url } : {}),
    ...(sameAs ? { "sameAs": sameAs } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
