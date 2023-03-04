"use client"

import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"

function LatestRepo() {
  const [latestRepoName, setLatestRepoName] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/github")
      const data = await response.json()
      setLatestRepoName(data.latestRepoName)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <p className="">
        <SyncLoader size={5} />
      </p>
    )
  }

  return (
    <p className="relative ml-[0.5px]">
      Hoy estoy trabajando en ⇢{" "}
      <span className="rounded-sm bg-slate-200 px-1">{latestRepoName}</span>
    </p>
  )
}

export default LatestRepo
