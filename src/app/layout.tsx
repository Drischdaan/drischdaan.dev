import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'drischdaan.dev',
  description: 'Personal portfolio website of drischdaan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-boxes h-full bg-neutral-950 font-sans text-white'>
        {children}
      </body>
    </html>
  );
}
