
import { Head, Html, Main, NextScript } from "next/document"
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
