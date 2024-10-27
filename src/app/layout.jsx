import localFont from "next/font/local";
import "@/app/globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "NextJS: contenido dinámico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.className} antialiased text-lg`} >

          {children}

      </body>
    </html>
  );
}