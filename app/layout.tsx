import { getPages } from "@/sanity/sanity-utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "Mockup project made by Sanity and Nextjs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <div className="nav">
            {pages.map((page) => (
              <Link key={page._id} href={`${page.route}`} className="">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
