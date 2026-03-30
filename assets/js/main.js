(function () {
  function initNav() {
    const navToggle = document.querySelector("[data-nav-toggle]");
    const siteNav = document.querySelector("[data-site-nav]");

    if (!navToggle || !siteNav) {
      return;
    }

    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  async function fetchJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error("Failed to load " + path);
    }
    return response.json();
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function highlightOwnName(authors) {
    return escapeHTML(authors).replace(/(Yong Zhang|Y\. Zhang)/g, "<strong>$1</strong>");
  }

  function createPublicationElement(item, headingTag, options) {
    const article = document.createElement("article");
    article.className = "publication-item";
    article.id = item.id ? "publication-" + item.id : "";

    const titleTag = headingTag || "h3";
    const settings = options || {};
    const title = escapeHTML(item.title);
    const journal = escapeHTML(item.journal);
    const authors = highlightOwnName(item.authors);
    const year = escapeHTML(item.year);
    const detailHref = item.id ? (settings.detailPage || "publication-detail.html") + "?id=" + encodeURIComponent(item.id) : "";
    const tagMarkup = Array.isArray(item.tags) && item.tags.length
      ? '<div class="publication-item__tags">' + item.tags.map((tag) => '<span class="tag-chip tag-chip--inline">' + escapeHTML(tag) + "</span>").join("") + "</div>"
      : "";
    const titleMarkup = detailHref
      ? "<" + titleTag + ' class="publication-item__title"><a class="publication-item__title-link" href="' + detailHref + '">' + title + "</a></" + titleTag + ">"
      : "<" + titleTag + ' class="publication-item__title">' + title + "</" + titleTag + ">";

    const links = [];
    if (item.pdf) {
      links.push('<a href="' + escapeHTML(item.pdf) + '">PDF</a>');
    }
    if (item.doi) {
      links.push('<a href="' + escapeHTML(item.doi) + '">DOI</a>');
    }
    if (item.code) {
      links.push('<a href="' + escapeHTML(item.code) + '">Code</a>');
    }

    article.innerHTML =
      titleMarkup +
      '<p class="publication-item__authors">' + authors + "</p>" +
      '<p class="publication-item__meta">' + journal + " | " + year + "</p>" +
      tagMarkup +
      (links.length ? '<div class="publication-item__links">' + links.join("") + "</div>" : "");

    return article;
  }

  function renderEmpty(container, message) {
    container.innerHTML = "";
    const paragraph = document.createElement("p");
    paragraph.className = "empty-state";
    paragraph.textContent = message;
    container.appendChild(paragraph);
  }

  async function renderHome() {
    const nameNode = document.getElementById("profile-name");
    if (!nameNode) {
      return;
    }

    try {
      const [profile, publications] = await Promise.all([
        fetchJSON("data/profile.json"),
        fetchJSON("data/publications.json")
      ]);

      document.getElementById("profile-title").textContent = profile.title;
      document.getElementById("profile-name").textContent = profile.name;
      document.getElementById("profile-affiliation").textContent = profile.affiliation;
      document.getElementById("profile-bio").textContent = profile.bio;

      const photo = document.getElementById("profile-photo");
      if (photo && profile.photo) {
        photo.src = profile.photo;
        photo.alt = profile.photo_alt || profile.name;
      }

      const contact = document.getElementById("profile-contact");
      if (contact) {
        contact.innerHTML = "";

        const contactItems = [
          { label: "Email", value: profile.email, href: "mailto:" + profile.email },
          { label: "Affiliation", value: profile.affiliation },
          { label: "Google Scholar", value: "View profile", href: profile.scholar }
        ];

        contactItems.forEach((entry) => {
          const row = document.createElement("div");

          const term = document.createElement("dt");
          term.textContent = entry.label;

          const detail = document.createElement("dd");
          if (entry.href) {
            const link = document.createElement("a");
            link.href = entry.href;
            link.textContent = entry.value;
            detail.appendChild(link);
          } else {
            detail.textContent = entry.value;
          }

          row.appendChild(term);
          row.appendChild(detail);
          contact.appendChild(row);
        });
      }

      const interests = document.getElementById("research-interests");
      interests.innerHTML = "";
      profile.research_interests.forEach((interest) => {
        const item = document.createElement("li");
        item.textContent = interest;
        interests.appendChild(item);
      });

      const links = document.getElementById("profile-links");
      links.innerHTML = "";

      const linkItems = [
        { label: "Google Scholar", href: profile.scholar },
        { label: "GitHub", href: profile.github },
        { label: "Email", href: "mailto:" + profile.email },
        { label: "CV", href: "cv.html" }
      ];

      linkItems.forEach((entry) => {
        if (!entry.href) {
          return;
        }
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = entry.href;
        link.textContent = entry.label;
        item.appendChild(link);
        links.appendChild(item);
      });

      const selectedPublications = document.getElementById("selected-publications");
      selectedPublications.innerHTML = "";
      publications
        .slice()
        .sort((a, b) => b.year - a.year)
        .slice(0, 3)
        .forEach((item) => {
          selectedPublications.appendChild(createPublicationElement(item, "h3", { detailPage: "publication-detail.html" }));
        });
    } catch (error) {
      renderEmpty(document.getElementById("selected-publications"), "Content could not be loaded.");
    }
  }

  window.Site = {
    fetchJSON: fetchJSON,
    escapeHTML: escapeHTML,
    highlightOwnName: highlightOwnName,
    createPublicationElement: createPublicationElement,
    renderEmpty: renderEmpty
  };

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    if (document.body.dataset.page === "home") {
      renderHome();
    }
  });
})();
