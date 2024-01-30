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
    
      // Check if data is an object and has property latestRepoName
      if (typeof data === 'object' && data.latestRepoName) {
        setLatestRepoName(data.latestRepoName)
    
        // Fetch the social preview image of the latest repo
        const repoResponse = await fetch(`https://api.github.com/repos/MiguelGalp/${data.latestRepoName}`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
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
