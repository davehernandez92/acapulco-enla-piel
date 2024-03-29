import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-txt',
  weight: ['300','400','500','700'],
  style: ['normal'],
  display: 'swap',
 });

export const headingFont = Ubuntu({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400','500','700'],
  style: ['normal'],
  display: 'swap',
})

export const metadata = {
  title: "Acapulco en la piel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${headingFont.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        
      <Footer/>
      </body>
    </html>
  );
}
