
import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"
import Link from "next/link"

interface RepoData {
  latestRepoName?: string;
}

function LatestRepo() {
  const [latestRepoName, setLatestRepoName] = useState("")
  const [latestRepoImage, setLatestRepoImage] = useState("")
  const [latestRepoUrl, setLatestRepoUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      let data: RepoData | null = JSON.parse(localStorage.getItem('latestRepoData') || 'null');
      if (!data) {
        const response = await fetch("/api/github");
        data = await response.json();
        localStorage.setItem('latestRepoData', JSON.stringify(data));
      }
    
      // Check if data is not null, is an object and has property latestRepoName
      if (data && typeof data === 'object' && data.latestRepoName) {
        setLatestRepoName(data.latestRepoName);
    
        // Fetch the social preview image of the latest repo
        const repoResponse = await fetch(`https://opengraph.githubassets.com/1/MiguelGalp/${data.latestRepoName}`);
        const blob = await repoResponse.blob();
        const repoImageURL = URL.createObjectURL(blob);
        setLatestRepoImage(repoImageURL);
    
        // Set the URL of the latest repo
        setLatestRepoUrl(`https://github.com/MiguelGalp/${data.latestRepoName}`);
      } else {
        console.error('Unexpected data from /api/github:', data);
      }
    
      setIsLoading(false);
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
      <Link href={latestRepoUrl} target="_blank">
        <img src={latestRepoImage} alt={latestRepoName} className="rounded-md filter invert"/>
      </Link>
    </p>
  )
}

export default LatestRepo
