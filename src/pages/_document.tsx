import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="fonts/EBGaramond-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous"/>
        <link rel="preload" href="fonts/EBGaramond-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="fonts/EBGaramond-Medium.woff" as="font" type="font/woff" crossOrigin="anonymous"/>
        <link rel="preload" href="fonts/EBGaramond-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="fonts/EBGaramond-SemiBold.woff" as="font" type="font/woff" crossOrigin="anonymous"/>
        <link rel="preload" href="fonts/EBGaramond-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
