import Head from "next/head";
import {ReactNode} from "react";

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

export function MainLayout({children, title = 'Mistique Tarro'}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}