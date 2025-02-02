import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HideAppBar from "./_service/clientside/components/headers";
import RootProvider from "./rootprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio | Yusuf Fadilah Rukmana",
  description: "Showcasing expertise in web development, software engineering, and digital solutions through projects and professional experiences.",
  openGraph: {
    title: "Portofolio | Yusuf Fadilah Rukmana",
    description: "Showcasing expertise in web development, software engineering, and digital solutions.",
    url: "https://yusuffadilahr-portofolio.vercel.app/",
    siteName: "Yusuf Fadilah Rukmana",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/thumbnail.jpg", // sementara
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootProvider>
          <HideAppBar />
          <section className="pt-5 px-2">
            {children}
          </section>
        </RootProvider>
      </body>
    </html >
  );
}
