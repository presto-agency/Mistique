import Head from "next/head";
import {ReactNode, useRef} from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Cursor from "@/components/Cursor/Cursor";

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

export function MainLayout({children, title = "Mistique Tarro"}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
      </Head>
      <Cursor/>
      <div className="wrapper">
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}