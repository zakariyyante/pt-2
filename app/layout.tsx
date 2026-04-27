import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://melhorescasinopt.com"),
  title: "MelhoresCasinoPT – Melhores Casinos Online Portugal 2026 | SRIJ",
  description:
    "Encontre os melhores casinos online licenciados pelo SRIJ em 2026. Análises independentes por bónus, velocidade de levantamento e avaliações reais. 18+ | JogoResponsavel.pt",
  keywords: [
    "melhores casinos online portugal",
    "casino online SRIJ",
    "casino bonus portugal",
    "casino licenciado portugal",
    "levantamento rápido casino",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://melhorescasinopt.com",
    siteName: "MelhoresCasinoPT",
    title: "MelhoresCasinoPT – Melhores Casinos Online Portugal 2026 | SRIJ",
    description: "Análises independentes dos melhores casinos online licenciados pelo SRIJ em Portugal.",
    locale: "pt_PT",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#06090f" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
