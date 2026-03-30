# Yong Zhang Academic Website

This repository is a pure static, data-driven academic website built with HTML, CSS, and vanilla JavaScript.

## Structure

- `index.html`: homepage
- `publications.html`: publications page
- `projects.html`: projects page
- `notes.html`: notes index
- `assets/css/main.css`: shared stylesheet
- `assets/js/main.js`: shared navigation and homepage rendering
- `assets/js/publications.js`: publications renderer
- `assets/js/projects.js`: projects renderer
- `assets/js/notes.js`: notes renderer
- `data/profile.json`: profile content
- `data/publications.json`: publication data
- `data/projects.json`: project data
- `data/notes.json`: notes metadata
- `content/notes/`: standalone note pages

## Editing Content

Most content updates happen in the `data/` directory:

- update profile text and links in `data/profile.json`
- add papers in `data/publications.json`
- add project entries in `data/projects.json`
- add notes in `data/notes.json` and create the linked HTML page under `content/notes/`

## Local Preview

Open the repository in VS Code and start Live Server from the project root. Because the pages use `fetch()` to load JSON, previewing through a local static server is recommended.

## Deployment

The site is ready for direct deployment on GitHub Pages. The `.nojekyll` file ensures GitHub Pages serves the site as plain static assets without running Jekyll.
