import Navigation from './components/navigation/Navigation';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className='w-full h-full flex bg-white'>
          <Navigation/>
          <div className='flex-1 h-full p-3'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}