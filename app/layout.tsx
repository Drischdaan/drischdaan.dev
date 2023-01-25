import './globals.scss';
import '../node_modules/highlight.js/styles/googlecode.css';

import 'highlight.js/styles/atom-one-dark.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}