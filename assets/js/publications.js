document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("publications-list");
  const tagsContainer = document.getElementById("publication-tags");
  const listSection = document.getElementById("publications-section");
  const allowedTags = [
    "Peridynamics",
    "Phase Field Modeling",
    "Configurational Forces",
    "Ferroelectrics"
  ];
  if (!container) {
    return;
  }

  try {
    const publications = await window.Site.fetchJSON("data/publications.json");
    const sorted = publications.slice().sort((a, b) => b.year - a.year);
    let activeTag = "";

    if (!sorted.length) {
      window.Site.renderEmpty(container, "No publications are listed yet.");
      return;
    }

    const availableTags = allowedTags.filter((tag) =>
      sorted.some((item) => Array.isArray(item.tags) && item.tags.includes(tag))
    );

    function renderList(tag) {
      const filtered = tag
        ? sorted.filter((item) => Array.isArray(item.tags) && item.tags.includes(tag))
        : sorted;

      container.innerHTML = "";

      if (!filtered.length) {
        window.Site.renderEmpty(container, "No publications matched this tag.");
        return;
      }

      filtered.forEach((item) => {
        container.appendChild(window.Site.createPublicationElement(item, "h3", { detailPage: "publication-detail.html" }));
      });
    }

    function renderTags() {
      if (!tagsContainer) {
        return;
      }

      tagsContainer.innerHTML = "";

      const allButton = document.createElement("button");
      allButton.type = "button";
      allButton.className = "tag-chip" + (activeTag === "" ? " is-active" : "");
      allButton.textContent = "All";
      allButton.addEventListener("click", () => {
        activeTag = "";
        renderTags();
        renderList(activeTag);
        if (listSection) {
          listSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      tagsContainer.appendChild(allButton);

      availableTags.forEach((tag) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "tag-chip" + (activeTag === tag ? " is-active" : "");
        button.textContent = tag;
        button.addEventListener("click", () => {
          activeTag = tag;
          renderTags();
          renderList(activeTag);
          const firstMatch = container.querySelector(".publication-item");
          if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
        tagsContainer.appendChild(button);
      });
    }

    renderTags();
    renderList(activeTag);
  } catch (error) {
    window.Site.renderEmpty(container, "Publications could not be loaded.");
  }
});
