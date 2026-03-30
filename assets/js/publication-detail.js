document.addEventListener("DOMContentLoaded", async () => {
  const title = document.getElementById("publication-detail-title");
  const meta = document.getElementById("publication-detail-meta");
  const tags = document.getElementById("publication-detail-tags");
  const abstract = document.getElementById("publication-detail-abstract");
  const links = document.getElementById("publication-detail-links");

  if (!title || !meta || !abstract || !links) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    title.textContent = "Publication not found";
    abstract.textContent = "No publication identifier was provided.";
    return;
  }

  try {
    const publications = await window.Site.fetchJSON("data/publications.json");
    const publication = publications.find((item) => item.id === id);

    if (!publication) {
      title.textContent = "Publication not found";
      abstract.textContent = "The requested publication could not be found.";
      return;
    }

    title.textContent = publication.title;
    meta.innerHTML = window.Site.highlightOwnName(publication.authors) + " | " + window.Site.escapeHTML(publication.journal) + " | " + window.Site.escapeHTML(publication.year);
    abstract.textContent = publication.abstract || "Abstract will be added soon.";

    tags.innerHTML = "";
    (publication.tags || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "tag-chip tag-chip--inline";
      chip.textContent = tag;
      tags.appendChild(chip);
    });

    links.innerHTML = "";
    [
      { label: "PDF", href: publication.pdf },
      { label: "DOI", href: publication.doi },
      { label: "Code", href: publication.code }
    ].forEach((entry) => {
      if (!entry.href) {
        return;
      }
      const link = document.createElement("a");
      link.href = entry.href;
      link.textContent = entry.label;
      links.appendChild(link);
    });
  } catch (error) {
    title.textContent = "Publication not found";
    abstract.textContent = "Publication details could not be loaded.";
  }
});
