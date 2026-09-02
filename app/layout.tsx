import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ENSA GmbH | Bauunternehmen in Uplengen',
  description: 'Persönliche Beratung für Bau-, Umbau- und Instandsetzungsarbeiten in Uplengen, Ostfriesland und im Raum Oldenburg.',
  openGraph: {
    title: 'ENSA GmbH | Bauunternehmen in Uplengen',
    description: 'Handwerk mit Erfahrung. Persönlich und unkompliziert.',
    images: [{ url: '/og.png', width: 1664, height: 936, alt: 'ENSA GmbH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENSA GmbH | Bauunternehmen in Uplengen',
    description: 'Handwerk mit Erfahrung. Persönlich und unkompliziert.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
