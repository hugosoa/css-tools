import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
export const metadata: Metadata = {
  title: "CSS Tool Kit",
  description: "Collection d'outils CSS pour les développeurs web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        {/* Ajouter la police Google Noto Sans JP pour le support japonais */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="">
        <div className="flex h-full min-h-screen flex-col md:flex-row">

          <aside className="md:w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">

            <div className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center px-6">
              <Link href="/" className="text-lg font-semibold">CSS Tool Kit</Link>
            </div>
            <Nav />
            <Footer />
          </aside>

          {/* Main content */}
          <main className="flex-grow overflow-auto">
            <div className="container mx-auto p-4">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}