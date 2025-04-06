import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import HideAppBar from "./_service/clientside/components/headers";
import RootProvider from "./rootprovider";
import HideNavbarLayout from "./hideNavbarLayout";
import Footer from "./_service/clientside/components/footer";

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ["400", "500", "700"]
})

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
        url: "https://yusuffadilahr-portofolio.vercel.app/",
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
      <body className={`${dmSans.className} antialiased`}>
        <RootProvider>
          <HideAppBar />
          <HideNavbarLayout>
            {children}
          </HideNavbarLayout>
          <Footer />
        </RootProvider>
      </body>
    </html >
  );
}
