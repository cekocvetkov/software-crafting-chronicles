import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import PostsWrapper from "./postsWrapper";

export const metadata: Metadata = {
  title: "Software crafting chronicles",
  description: "Tsvetan Tsvetkov's journal",
};
const inter = Montserrat({
  weight: "100",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor></Cursor>
        <div className="wrapper-wrapper">
          <div className="content-wrapper">
            <div id="content" className="content">
              <Header></Header>

              {children}
            </div>
            <div id="second-column" className="second-column-wrapper">
              <PostsWrapper></PostsWrapper>
              <div className="third-space"></div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
