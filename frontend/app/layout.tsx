import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { evmNetworks } from "@/lib/custom-chains";

import { ThemeProvider } from "@/app/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "./navbar";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Donut",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="w-full max-w-[800px]  flex flex-col  items-center mx-auto">
              {children}
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
