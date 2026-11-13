# Ferdinan Simangunsong | Network Engineer Portfolio

A personal portfolio styled after GitHub's dark mode and Network Operations Center (NOC) dashboards. Plain HTML, CSS and JavaScript: no frameworks, no dependencies, no build step.

![Public](https://img.shields.io/badge/Public-3fb950?style=flat-square)
![MTCRE](https://img.shields.io/badge/MTCRE-d29922?style=flat-square)
![MTCNA](https://img.shields.io/badge/MTCNA-d29922?style=flat-square)
![NSE 2](https://img.shields.io/badge/NSE%202-d29922?style=flat-square)

## Features

- **README view**: profile, tech stack, experience written as a commit history, and pinned repositories.
- **Career timeline**: one row per role, one column per year, brighter means broader scope.
- **Topology**: a canvas map of the environments I have worked on, with animated packets. Hover or tap a node for details.
- **Ask NOC**: a rules-based chatbot that answers from the CV.
- **Terminal**: a command-line drawer. Press `` ` `` or use the `>_` button to open it.

## Terminal commands

| Command | Description |
| --- | --- |
| `help` | List available commands |
| `about` | Short introduction |
| `skills` | Technical stack |
| `experience` | Work history |
| `certs` | Certifications |
| `projects` | Pinned projects |
| `contact` | Contact details |
| `whoami` | Who is logged in |
| `readme`, `topology` | Jump to a tab |
| `clear`, `exit` | Clear the screen, close the drawer |

Arrow Up and Arrow Down browse command history.

## Project structure

```
.
├── index.html
├── css/
│   └── style.css
└── js/
    ├── data.js        # CV, timeline roles, topology nodes, chat answers
    ├── topology.js    # canvas map
    ├── terminal.js    # terminal drawer
    └── main.js        # tabs, timeline, Ask NOC
```

To update the content, edit `js/data.js`. Script order matters: `data.js` loads first and `main.js` last.

## Run locally

Open `index.html` in a browser. No server or install needed.

## Deployment

Static site, so any static host works.

- **Vercel**: connect this repository to Vercel and it deploys on every push, or drag and drop the folder.
- **GitHub Pages**: Settings, Pages, deploy from the `main` branch, root folder.

All asset paths are relative, so it works under a sub-path such as `/ferdinan-portofolio/`.

## Contact

- Email: [ferdinan.simangunsong@gmail.com](mailto:ferdinan.simangunsong@gmail.com)
- Location: Citayam, Kabupaten Bogor
