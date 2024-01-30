import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"

function LatestRepo() {
  const [latestRepoName, setLatestRepoName] = useState("")
  const [latestRepoImage, setLatestRepoImage] = useState("")
  const [latestRepoUrl, setLatestRepoUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/github")
      const data = await response.json()

      // Check if data is an object and has property latestRepoName
      if (typeof data === 'object' && data.latestRepoName) {
        setLatestRepoName(data.latestRepoName)

        // Fetch the social preview image of the latest repo
        const repoResponse = await fetch(`https://opengraph.githubassets.com/1/MiguelGalp/${data.latestRepoName}`)
        const blob = await repoResponse.blob()
        const repoImageURL = URL.createObjectURL(blob)
        setLatestRepoImage(repoImageURL)

        // Fetch the URL of the latest repo
        const repoDataResponse = await fetch(`https://api.github.com/repos/MiguelGalp/${data.latestRepoName}`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${process.env.GITHUB_TOKEN}`
          }
        })
        const repoData = await repoDataResponse.json()
        setLatestRepoUrl(repoData.html_url)
      } else {
        console.error('Unexpected data from /api/github:', data)
      }

      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <p className="">
        <SyncLoader size={3} />
      </p>
    )
  }

  return (
    <p className="relative ml-[0.5px]">
      <a href={latestRepoUrl}>
        <img src={latestRepoImage} alt={latestRepoName} />
      </a>
    </p>
  )
}

export default LatestRepo
