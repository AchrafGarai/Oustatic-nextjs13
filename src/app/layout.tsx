import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hey 👋 i`m Achraf this is my W🌍RLD",
  description:
    "Online protfolio example made with NextJS 13 and Outstatic, deployed on Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mx-auto max-w-7xl">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
