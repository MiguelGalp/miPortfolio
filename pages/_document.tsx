import { Head, Html, Main, NextScript } from "next/document"
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen overflow-x-hidden font-sans text-slate-900 antialiased dark:text-slate-100">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
