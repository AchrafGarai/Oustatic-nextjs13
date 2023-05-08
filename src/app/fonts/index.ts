import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const DrukWide = localFont({
  src: "./Druk Wide Bold.woff2",
  variable: "--font-drukwide",
});
