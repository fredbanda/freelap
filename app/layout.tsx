import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/navigation/ResponsiveNav";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "CharityEgg | bridging the digital divide in South Africa",
  description: "Affording a laptop to every kid in South Africa.An organization giving laptops to students who can not afford them."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ResponsiveNav />
        {children}
      </body>
      <Footer />
    </html>
  );
}

