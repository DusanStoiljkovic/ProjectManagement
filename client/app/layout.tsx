import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard | User Management, Analytics & Control Panel",
  description:
    "Modern admin dashboard for managing users, content, and business data. Secure, fast, and designed for scalable web applications.",
  keywords: [
    "admin dashboard",
    "admin panel",
    "user management",
    "analytics dashboard",
    "control panel",
    "SaaS dashboard",
    "web application",
  ],
  openGraph: {
    title: "Admin Dashboard – Modern Management Platform",
    description:
      "A centralized admin panel to manage users, data, and business operations efficiently.",
    url: "https://admin-dashboard.dusanstoiljkovic.com",
    siteName: "Admin Dashboard",
    images: [
      {
        url: "https://admin-dashboard.dusanstoiljkovic.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Admin Dashboard interface preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin Dashboard – Modern Management Platform",
    description:
      "A powerful admin dashboard for user management, analytics, and operational control.",
    images: [
      "https://admin-dashboard.dusanstoiljkovic.com/preview.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar/>
            <main className="w-full">
              <Navbar/>
              <div className="px-4">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


