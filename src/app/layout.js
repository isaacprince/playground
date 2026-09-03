import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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

const title = "Prince Isaac — Product Designer";
const description =
  "Prince Isaac is a Product Designer working worldwide, who sits at the intersection of user enjoyment and business outcomes — shipping interfaces, design systems, and research-backed flows for startups and consultancies.";

export const metadata = {
  metadataBase: new URL("https://princeisaac.space"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://princeisaac.space",
    siteName: "Prince Isaac",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.className} ${inter.variable} ${neueMachina.variable} ${neueMachinaBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
