import { Html, Head, Main, NextScript } from "next/document";
import NoSsr from "utils/NoSsr";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/assets/images/favicon.png"
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.png"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree&display=swap"
          rel="stylesheet"
        />{" "}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
