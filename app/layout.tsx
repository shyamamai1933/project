import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maa Shyama Mandir - Darbhanga',
  description: 'Welcome to Maa Shyama Mandir, Darbhanga - A sacred temple dedicated to Maa Shyama. Explore our history, teachings, and join us for worship.',
  openGraph: {
    title: 'Maa Shyama Mandir - Darbhanga',
    description: 'A sacred temple dedicated to Maa Shyama',
    images: [
      {
        url: '/WhatsApp_Image_2026-06-04_at_8.59.03_PM.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/WhatsApp_Image_2026-06-04_at_8.59.03_PM.jpeg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
