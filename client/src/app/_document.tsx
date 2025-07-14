import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return
    (
        <Html lang="en" suppressHydrationWarning>
            <Head />
            <script dangerouslySetInnerHTML={{ __html: `(()=>{const t=localStorage.theme??(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'); if(t==='dark')document.documentElement.classList.add('dark');})();` }} />
            <body><Main /><NextScript /></body>
        </Html>
    )
}