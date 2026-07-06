import "./globals.css";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

// Define local fonts
const agrandir = localFont({
  src: "../fonts/Agrandir-Regular.otf",
  variable: "--font-agrandir",
  weight: "400",
});

const agrandirBold = localFont({
  src: "../fonts/Agrandir-TextBold.otf",
  variable: "--font-agrandir-bold",
  weight: "800",
});

const neueMachina = localFont({
  src: "../fonts/NeueMachina-Regular.otf",
  variable: "--font-neue-machina",
  weight: "400",
});

const neueMachinaBold = localFont({
  src: "../fonts/NeueMachinaUltrabold.otf",
  variable: "--font-neue-machina-bold",
  weight: "700",
});

const chalkduster = localFont({
  src: "../fonts/Chalkduster.ttf",
  variable: "--font-chalkduster",
  weight: "normal",
});

export const metadata = {
  title: "Isaac Prince portfolio",
  description:
    "Prince operates at the intersection of two critical domains: the pursuit of enjoyment and the pragmatic resolution of business challenges through design. This approach enables Prince to deliver exceptional user experiences while effectively addressing the needs of the business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${inter.className} ${dmSans.className} ${agrandir.variable} ${agrandirBold.variable} ${neueMachina.variable} ${neueMachinaBold.variable} ${chalkduster.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
