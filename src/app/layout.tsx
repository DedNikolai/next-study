import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Providers } from "./components/Providers/Profiders";

const robotoText = Roboto({style: 'italic', weight: '500', subsets: ['cyrillic']})

export const metadata: Metadata = {
  title: "My first NEXT APP",
  description: "My next description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${robotoText.className}`}>
          <Header />
          <main className='main'>
            {children}
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
