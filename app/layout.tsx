import { Header } from './components/Header';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='dark'>
        <Header/>
        {children}
      </body>
    </html>
  );
}