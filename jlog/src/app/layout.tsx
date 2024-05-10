import type { Metadata } from "next";
import '../styles/globals.css';
import ThemeProvider from '@/utils/ThemeProvider';
import DarkModeBtn from "@/components/darkModeBtn/darkModeBtn";

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
    <html>
      <body>
        <ThemeProvider>
          {children}
          <DarkModeBtn/>
        </ThemeProvider>
      </body>
    </html>
  );
}
