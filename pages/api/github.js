export default async function handler(req, res) {
  const response = await fetch('https://api.github.com/users/MiguelGalp/repos', {
    headers: {
      Authorization: `token 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`
    }
  })

  if (!response.ok) {
    console.error('GitHub API response status:', response.status)
    res.status(500).json({ error: 'Failed to fetch repos from GitHub API' })
    return
  }

  const data = await response.json()

  if (!Array.isArray(data) || data.length === 0) {
    console.error('Unexpected data from GitHub API:', data)
    res.status(500).json({ error: 'No repos found in GitHub API response' })
    return
  }

  const latestRepoName = data[0].name
  res.status(200).json({ latestRepoName })
}
