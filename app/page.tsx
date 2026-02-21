import { HomeSections } from '@/components/home/home-sections';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'ZOCA Courtyard',
  servesCuisine: ['North Indian', 'Cafe', 'Pizza'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '132, Roshanpura Extension, Najafgarh Kapashera Rd',
    addressLocality: 'Delhi',
    postalCode: '110043'
  },
  telephone: '+91-9582820011'
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HomeSections />
    </>
  );
}
