import '@/app/globals.css';
import { opensans } from "@/app/ui/fonts";
import Navigation from './ui/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${opensans.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
