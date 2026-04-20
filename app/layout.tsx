import './globals.css';
import type { Metadata } from 'next';
import DailyFeed from '../components/DailyFeed';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.portsideagency.com'),
  title: 'Portside Agency Pvt Ltd | Maritime Services & Bunker Trading',
  description: 'Premier maritime services in the Maldives. Expert bunkering, chartering, and vessel support. Authorized naval and IMO cargo logistics partner.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DailyFeed /> {/* This is the hidden food for AI */}
        {children}
      </body>
    </html>
  );
}
