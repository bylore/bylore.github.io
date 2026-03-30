document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("projects-list");
  if (!container) {
    return;
  }

  try {
    const projects = await window.Site.fetchJSON("data/projects.json");

    if (!projects.length) {
      window.Site.renderEmpty(container, "Project entries are being prepared.");
      return;
    }

    container.innerHTML = "";
    projects.forEach((project) => {
      const article = document.createElement("article");
      article.className = "project-item";

      const title = document.createElement("h2");
      title.className = "project-item__title";
      title.textContent = project.title;

      const description = document.createElement("p");
      description.className = "project-item__description";
      description.textContent = project.description;

      article.appendChild(title);
      article.appendChild(description);

      if (project.link) {
        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "Learn more";
        article.appendChild(link);
      }

      container.appendChild(article);
    });
  } catch (error) {
    window.Site.renderEmpty(container, "Projects could not be loaded.");
  }
});
