import type { Metadata } from "next";
import '../styles/globals.css';
import ThemeProvider from '@/utils/ThemeProvider';
import NavBar from "@/components/mole/navBar/navBar";
import Footer from "@/components/mole/footer/footer";
import { mainContainer} from "./main.css";

// import './globals.css';

export const metadata: Metadata = {
  title: "JLOG",
  description: "JLOG Generated by create next app",
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
            <NavBar />
            <div className={mainContainer}>
              {children}
            </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
