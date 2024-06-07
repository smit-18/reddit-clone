import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="images/redditFace.svg" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="images/redditFace.svg"
          type="image/x-icon"
        />
        <meta charSet="UTF-8" />
        <meta name="description" content="This is a Reddit Clone" />
        <meta
          name="keywords"
          content="React, TypeScript, Reddit, Clone, Next.js, ChakraUI, Firebase"
        />
        <meta name="author" content="Smit Vekaria" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
