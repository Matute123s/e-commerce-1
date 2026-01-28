import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: {
    default: "Northwind Supply",
    template: "%s | Northwind Supply"
  },
  description:
    "Premium essentials for modern commerce. Shop curated products and seamless checkout.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="py-10">
          <Container>{children}</Container>
        </main>
        <footer className="border-t border-slate-200 bg-white">
          <Container>
            <div className="flex flex-col gap-2 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <span>© 2024 Northwind Supply. All rights reserved.</span>
              <span>Built for a premium checkout experience.</span>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
