import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://shield-drive777.vercel.app"),

  title: {
    default: "ShieldDrive | Compare Auto Insurance Quotes",
    template: "%s | ShieldDrive",
  },

  description:
    "Compare personalized auto insurance quotes from trusted providers in minutes. Save money, find the right coverage, and protect your vehicle with ShieldDrive.",

  keywords: [
    "auto insurance",
    "car insurance",
    "insurance quotes",
    "compare insurance",
    "vehicle insurance",
    "cheap car insurance",
    "online insurance quotes",
    "insurance comparison",
    "ShieldDrive",
    "best car insurance",
  ],

  authors: [
    {
      name: "Piyush Agrawal",
      url: "https://shield-drive777.vercel.app",
    },
  ],

  creator: "Piyush Agrawal",

  publisher: "ShieldDrive",

  applicationName: "ShieldDrive",

  category: "Insurance",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://shield-drive777.vercel.app",
  },

  openGraph: {
    title: "ShieldDrive | Compare Auto Insurance Quotes",
    description:
      "Compare personalized auto insurance quotes from trusted providers in minutes and save money with ShieldDrive.",
    url: "https://shield-drive777.vercel.app",
    siteName: "ShieldDrive",
    locale: "en_US",
    type: "website",
    
  },

 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}