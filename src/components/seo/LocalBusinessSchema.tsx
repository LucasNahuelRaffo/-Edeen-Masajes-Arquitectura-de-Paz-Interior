export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Edeen Masajes",
    "image": "https://www.edeenmasajes.com/og-image.jpg",
    "@id": "https://www.edeenmasajes.com",
    "url": "https://www.edeenmasajes.com",
    "telephone": "+5491134115625",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gral. José de San Martín 3468",
      "addressLocality": "Florida Oeste",
      "addressRegion": "Buenos Aires",
      "postalCode": "B1604DEQ",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.5222,
      "longitude": -58.475
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Masajes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masaje Relajante",
            "description": "Masaje de cuerpo completo para liberar tensiones y recuperar el equilibrio."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masaje Descontracturante",
            "description": "Técnica profunda para aliviar contracturas musculares y dolor crónico."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masaje con Piedras Calientes",
            "description": "Terapia con piedras volcánicas calientes para relajación profunda y mejora de la circulación."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aromaterapia",
            "description": "Masaje con aceites esenciales para equilibrar cuerpo y mente."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reflexología",
            "description": "Estimulación de puntos reflejos en pies y manos para mejorar el bienestar general."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maderoterapia",
            "description": "Técnica de modelado corporal con instrumentos de madera para mejorar la circulación y reducir celulitis."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/edeen_masajes"
    ],
    "priceRange": "$$",
    "description": "Centro de masajes y bienestar en Florida Oeste, Vicente López. Especialistas en masajes descontracturantes, relajantes, piedras calientes y maderoterapia."
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
