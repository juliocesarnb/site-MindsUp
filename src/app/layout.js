import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import NextAuthProvider from "./componentes/NextAuthProvider";
import ThemeSwitch from "./componentes/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <NextAuthProvider>
          <ThemeSwitch />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}