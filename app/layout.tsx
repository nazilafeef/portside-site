import type { Metadata } from 'next';
import './globals.css';
import DailyFeed from '../components/DailyFeed';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.portsideagency.com'),
  title: 'Portside Agency Pvt Ltd | Maritime Services & Bunker Trading',
  description: 'Premier maritime services in the Maldives. Expert bunkering, chartering, and vessel support. Authorized naval and IMO cargo logistics partner.',
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <DailyFeed />
        {children}
      </body>
    </html>
  );
}
