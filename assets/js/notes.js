document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("notes-list");
  if (!container) {
    return;
  }

  try {
    const notes = await window.Site.fetchJSON("data/notes.json");
    const sorted = notes.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!sorted.length) {
      window.Site.renderEmpty(container, "Notes are being prepared.");
      return;
    }

    container.innerHTML = "";
    sorted.forEach((note) => {
      const article = document.createElement("article");
      article.className = "note-item";

      const date = document.createElement("span");
      date.className = "note-item__date";
      date.textContent = note.date;

      const title = document.createElement("h2");
      title.className = "note-item__title";
      title.textContent = note.title;

      const summary = document.createElement("p");
      summary.className = "note-item__summary";
      summary.textContent = note.summary;

      const link = document.createElement("a");
      link.href = note.link;
      link.textContent = "Read note";

      article.appendChild(date);
      article.appendChild(title);
      article.appendChild(summary);
      article.appendChild(link);
      container.appendChild(article);
    });
  } catch (error) {
    window.Site.renderEmpty(container, "Notes could not be loaded.");
  }
});
