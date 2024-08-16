import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Adsense from "./components/adsense";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-txt',
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  display: 'swap',
});

export const headingFont = Ubuntu({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap',
})

export const metadata = {
  title: "Acapulco en la piel",
  description: " Descubre Acapulco como nunca antes. Encuentra los mejores hoteles, restaurantes y negocios locales, y explora los lugares más destacados para hacer que tus vacaciones sean inolvidables. ¡Vive la verdadera esencia de Acapulco con nosotros! ",
  keywords: ['Acapulco', 'turismo', 'hoteles', 'restaurantes', 'negocios locales', 'vacaciones', 'explorar Acapulco', 'Aca', 'Acapulco en la piel'],
  openGraph: {
    title: 'Acapulco en la piel ',
    description: '¡Descubre Acapulco como nunca antes! En Acapulco en la Piel, te sumergirás en una experiencia turística auténtica que te llevará a los mejores hoteles, restaurantes y negocios locales.',
    url: 'https://www.acapulcoenlapiel.com',
    siteName: 'Acapulco en la piel',
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${headingFont.variable} ${inter.variable}`}>
    <head>
      <Adsense pid="4044386539932680"/>
    </head>
      
      <body>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
