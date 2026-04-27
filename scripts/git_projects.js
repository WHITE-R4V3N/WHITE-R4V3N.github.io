/*
fetch("https://api.github.com/users/WHITE-R4V3N/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("github-projects");

    data.slice(0, 6).forEach(repo => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
      `;
      container.appendChild(div);
    });
  });*/

  fetch("https://api.github.com/users/WHITE-R4V3N/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("github-projects");
    container.innerHTML = ""; // Clear loader text

    // Shuffle the array using the Fisher-Yates algorithm for true randomness
    const shuffled = data.sort(() => 0.5 - Math.random());
    
    // Select the first 6 projects from the shuffled list
    const selectedProjects = shuffled.slice(0, 6);

    selectedProjects.forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card";
      
      card.innerHTML = `
        <div class="card-header">
            <a href="${repo.html_url}" target="_blank" class="github-link">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </a>
        </div>
        <h3>${repo.name}</h3>
        <p>${repo.description || "Experimental project focusing on software development and security."}</p>
        <div class="card-footer">
            <span class="language">${repo.language || 'Code'}</span>
            <span class="stars">⭐ ${repo.stargazers_count}</span>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error fetching projects:", err);
    document.getElementById("github-projects").innerHTML = "<p>Unable to load projects at this time.</p>";
  });