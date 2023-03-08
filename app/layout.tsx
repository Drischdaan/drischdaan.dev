import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='p-5'>
        <Header/>
        <Modal/>
        {children}
      </body>
    </html>
  );
}