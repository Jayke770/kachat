import { Html, Head, Main, NextScript } from "next/document"
export default function Document() {
  return (
    <Html className="scroll-smooth transition-all">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0066d6" />
        <meta name="title" content="KaChat" />
        <link rel="shortcut icon" href="/icon.png" type="image/x-png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-page-material-dark bg-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
