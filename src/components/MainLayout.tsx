import Head from "next/head";
import React, {ReactNode} from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Cursor from "@/components/Cursor/Cursor";
import AudioBackground from "@/components/AudioBackground/AudioBackground";

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({children, title = "Mistique Tarro"}) => {
  const topNav = [
    {
      id: 1,
      url: "/",
      title: "Home"
    },
    {
      id: 2,
      url: "/TarotReading",
      title: "Tarot reading"
    },
    {
      id: 3,
      url: "/Blog",
      title: "Blog"
    },
    {
      id: 4,
      url: "/Help",
      title: "Help"
    },
    {
      id: 5,
      url: "/Privacy",
      title: "Privacy"
    },
  ];
  const bottomNav = [
    {
      id: 1,
      url: "/Terms",
      title: "Terms"
    },
    {
      id: 2,
      url: "/Privacy",
      title: "Privacy"
    },
    {
      id: 3,
      url: "/Cookies",
      title: "Cookies"
    },
  ];

  return (
    <>
      {/*<AudioBackground/>*/}
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