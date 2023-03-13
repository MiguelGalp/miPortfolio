import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { CoverImage } from "@/components/cover_image"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Miguel Galperin, desarrollador.</title>
        <meta
          name="description"
          content="Portfolio de Software de Miguel Galperin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_2.ico" />
      </Head>
      <CoverImage />
    </Layout>
  )
}
