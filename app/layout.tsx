import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Portside Agency | Maritime & Bunkering',
  description: 'Premium maritime services and bunker trading in the Maldives.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}