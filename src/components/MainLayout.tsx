import Head from "next/head";

export function MainLayout({children, title='Mistique Tarro'}) {
  return(
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