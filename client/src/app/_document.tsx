import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Google AdSense */}
        <script
          async
          src="
https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1508534101075098"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Theme detection script */}
      <script
        id="theme-detection"
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const t = localStorage.theme ??
                (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
              if (t === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
        }}
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}