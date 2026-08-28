import type { ReactNode } from "react";
import "./globals.css";
import { baseMetadata, baseViewport } from "@/lib/metadata";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = baseMetadata;
export const viewport = baseViewport;

// This is the application shell: every route renders inside it via
// {children}, so Header/Footer are never duplicated per page. There is
// only one shell variant so far, so this layout file itself is the shell;
// a separate wrapper component is not needed yet.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="skip-link label-button focus:fixed focus:top-4 focus:left-4 focus:z-(--z-overlay) focus:rounded-md focus:bg-champagne-gold focus:px-4 focus:py-2 focus:text-deep-black"
        >
          Skip to main content
        </a>
        <ToastProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
