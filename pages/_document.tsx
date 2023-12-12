import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen overflow-x-hidden font-sans text-slate-900 antialiased dark:text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
