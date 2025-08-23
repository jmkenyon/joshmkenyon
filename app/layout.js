import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Joshua Kenyon - Portfolio",
  description:
    "Hi, I'm Josh Kenyon — a UK-based bilingual founder passionate about scaling startups from 0 to 1. Explore my projects, blogs, and hands-on experience building businesses.",
  openGraph: {
    type: "website",
    url: "https://joshmkenyon.com",
    title: "Joshua Kenyon - Portfolio",
    description:
      "Hi, I'm Josh Kenyon — a UK-based bilingual founder passionate about scaling startups from 0 to 1. Explore my projects, blogs, and hands-on experience building businesses.",
    images: [
      {
        url: "https://joshmkenyon/public/assets/profile-img.png",
        width: 1200,
        height: 630,
        alt: "Joshua Kenyon Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Kenyon - Portfolio",
    description:
      "Hi, I'm Josh Kenyon — a UK-based bilingual founder passionate about scaling startups from 0 to 1. Explore my projects, blogs, and hands-on experience building businesses.",
    images: ["https://joshmkenyon/public/assets/profile-img.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.className} ${outfit.className} antialiased leading-8 overflow-x-hidden dark:bg-[#11001F] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
