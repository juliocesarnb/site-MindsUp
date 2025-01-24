import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minds Up",
  description: "Inteligência Socioemocional",
  icons: {
    icon: [
      { url: '/favicon.ico?v=4', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=4', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  // Adicionando manifest para PWA
  manifest: '/site.webmanifest',
  // Adicionando theme color
  themeColor: '#ffffff'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
