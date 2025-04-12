const username = "Bhagya-2005"; // replace with your GitHub username
const repoList = document.getElementById("repo-list");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repoList.innerHTML = "";
    repos.forEach(repo => {
      const div = document.createElement("div");
      div.classList.add("repo");
      div.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description"}</p>
      `;
      repoList.appendChild(div);
    });
  })
  .catch(error => {
    repoList.innerHTML = "Failed to load repositories.";
    console.error(error);
  });
