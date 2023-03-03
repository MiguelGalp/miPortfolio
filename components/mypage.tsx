import React from "react"
import { GetStaticProps, NextPage } from "next"

interface Repository {
  id: string
  full_name: string
  html_url: string
}

interface MyPageProps {
  mostActiveRepos?: Repository[]
}

console.log("test")

const MyPage: NextPage<MyPageProps> = ({ mostActiveRepos }) => {
  return (
    <div>
      <ul>
        {mostActiveRepos?.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.full_name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<MyPageProps> = async () => {
  console.log("Fetching repositories...")
  const response = await fetch("https://api.github.com/MiguelGalp/repos", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch repositories")
  }

  const repositories = await response.json()
  console.log("Fetched repositories:", repositories)

  const mostActiveRepos = repositories
    .filter((repo: any) => !repo.fork)
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 2)
    .map((repo: any) => ({
      id: repo.id,
      full_name: repo.full_name,
      html_url: repo.html_url,
    }))

  console.log("Most active repositories:", mostActiveRepos)

  return {
    props: {
      mostActiveRepos,
    },
  }
}

export default MyPage
