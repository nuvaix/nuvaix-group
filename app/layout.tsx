import type { ReactNode } from "react";
import "./globals.css";
import { baseMetadata, baseViewport } from "@/lib/metadata";
import { ToastProvider } from "@/components/ui/ToastProvider";

export const metadata = baseMetadata;
export const viewport = baseViewport;

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
          <main id="main-content">{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
