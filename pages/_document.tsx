import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen overflow-x-hidden font-sans text-slate-900 antialiased dark:bg-slate-600 dark:text-slate-50 md:bg-blue-200 lg:bg-transparent">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
