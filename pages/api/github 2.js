export default async function handler(req, res) {
  const response = await fetch(
    "https://api.github.com/users/MiguelGalp/repos?sort=updated", {
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  );
  const data = await response.json();
  const latestRepoName = data[0].name;

  res.status(200).json({ latestRepoName });
}
