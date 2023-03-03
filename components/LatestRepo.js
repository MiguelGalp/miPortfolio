"use client"

import { useEffect, useState } from "react"

function LatestRepo() {
  const [latestRepoName, setLatestRepoName] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/github")
      const data = await response.json()
      setLatestRepoName(data.latestRepoName)
    }
    fetchData()
  }, [])

  return <p>Trabajo hoy en ⇢ {latestRepoName}</p>
}

export default LatestRepo
