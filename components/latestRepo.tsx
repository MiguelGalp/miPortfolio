import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"

function LatestRepo() {
  const [latestRepoName, setLatestRepoName] = useState("")
  const [latestRepoImage, setLatestRepoImage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      // Fetch the latest repo
      const response = await fetch("/api/github")
      const data = await response.json()
      setLatestRepoName(data.latestRepoName)

      // Fetch the social preview image of the latest repo
      const repoResponse = await fetch(`https://api.github.com/repos/MiguelGalp/${data.latestRepoName}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `token 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`
        }
      })
      const repoData = await repoResponse.json()
      setLatestRepoImage(repoData.open_graph_image)

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
      Hoy estoy trabajando en ⇢ <span className="">{latestRepoName}</span>
      <img src={latestRepoImage} alt={latestRepoName} />
    </p>
  )
}

export default LatestRepo
