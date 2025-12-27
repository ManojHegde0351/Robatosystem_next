import { Montserrat } from 'next/font/google';
import { Suspense } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteScrollGuard from "@/hooks/RouteScrollGuard";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '700'],
  fallback: ['Arial', 'sans-serif'],

  preload: true,
});

export const metadata = {
  title: {
    default: 'Robato System',
    template: '%s | Robato System'
  },
  description: "Automation | Parking | Secure Access - Robato System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
    
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
      </head>
      <body className="antialiased">
        <Suspense>
          <Header />
            <main>
              <RouteScrollGuard>
                {children}
              </RouteScrollGuard>
            </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}