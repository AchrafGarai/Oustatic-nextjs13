import "./globals.css";
import { Navbar, Footer, HeroGraphics } from "@/components";
import { inter, DrukWide } from "./fonts";

export const metadata = {
  title: "Achraf Garai Portfilio | this is my W🌍RLD",
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
        <div className="relative overflow-hidden">
          <Navbar />
          <div className="mx-auto max-w-7xl">{children}</div>
          <Footer />
          <HeroGraphics />
        </div>
      </body>
    </html>
  );
}
