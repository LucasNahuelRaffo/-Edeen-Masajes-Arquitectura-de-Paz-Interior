export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Edeen Masajes",
    "image": "https://edeenmasajes.com.ar/og-image.jpg",
    "@id": "https://edeenmasajes.com.ar",
    "url": "https://edeenmasajes.com.ar",
    "telephone": "+5491164647433",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vicente López",
      "addressLocality": "Vicente López",
      "addressRegion": "Buenos Aires",
      "postalCode": "1602",
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
    "sameAs": [
      "https://www.instagram.com/edeen.masajes"
    ],
    "priceRange": "$$",
    "description": "Centro de masajes y bienestar en Vicente López. Especialistas en masajes descontracturantes, relajantes, piedras calientes y maderoterapia."
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
