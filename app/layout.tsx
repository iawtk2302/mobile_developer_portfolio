import { EmailJsProvider } from "@/components/email-js-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tuankhoidev.com"),
  title: "Tuan Khoi | Mobile Developer",
  description:
    "Experienced Mobile Developer specializing in Flutter and native app development",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
  },
  openGraph: {
    title: "Tuan Khoi | Mobile Developer",
    description:
      "Experienced Mobile Developer specializing in Flutter and native app development",
    url: "https://tuankhoidev.com",
    siteName: "Tuan Khoi Portfolio",
    images: [
      {
        url: "images/thumbnail/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Tuan Khoi - Mobile Developer",
      },
    ],
    locale: "en_US",
    type: "website",
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
          <EmailJsProvider>
            <div className="flex min-h-screen flex-col items-center">
              <Navbar />
              <main className="flex-1 w-full flex flex-col items-center pt-4">
                {children}
              </main>
              <Footer />
            </div>
          </EmailJsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
