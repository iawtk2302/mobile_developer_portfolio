import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuan Khoi | Mobile Developer",
  description:
    "Experienced Mobile Developer specializing in Flutter and native app development",
  openGraph: {
    title: "Tuan Khoi | Mobile Developer",
    description:
      "Experienced Mobile Developer specializing in Flutter and native app development",
    url: "https://johndoe.dev",
    siteName: "Tuan Khoi Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
        width: 1200,
        height: 630,
        alt: "John Doe - Mobile Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Mobile Developer",
    description:
      "Experienced Mobile Developer specializing in Flutter and native app development",
    images: ["https://images.unsplash.com/photo-1555774698-0b77e0d5fac6"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col items-center">
            <Navbar />
            <main className="flex-1 w-full flex flex-col items-center pt-4">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
