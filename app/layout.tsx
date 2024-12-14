import "@/app/globals.css";

import { NavBar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "./providers";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                geistSans.variable,
                geistMono.variable,
                "scroll-smooth"
            )}
        >
            <body className="relative">
                <Providers>
                    <NavBar />

                    <main
                        id="skip-nav"
                        className="mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8"
                    >
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
