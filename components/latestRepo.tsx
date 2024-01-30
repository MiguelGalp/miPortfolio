import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"

function LatestRepo() {
  const [latestRepoName, setLatestRepoName] = useState("")
  const [latestRepoImage, setLatestRepoImage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/github")
      const data = await response.json()
    
      // Check if data is an array and is not empty
      if (Array.isArray(data) && data.length > 0) {
        setLatestRepoName(data[0].name)
    
        // Fetch the social preview image of the latest repo
        const repoResponse = await fetch(`https://api.github.com/repos/MiguelGalp/${data[0].name}`, {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `token ${process.env.GITHUB_TOKEN}`
          }
        })
        const repoData = await repoResponse.json()
        setLatestRepoImage(repoData.open_graph_image)
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
