# Animals vs. Plastic

A multi-page informational website about how ocean plastic harms marine
animals - and the small everyday choices that help stop it.

**Live site:** https://animals-vs-plastic.kattsyna.workers.dev

## About

Every year, millions of tons of plastic flow from cities and rivers into
the ocean. Sunlight and waves don't destroy it - they shatter it into
smaller and smaller pieces that sea turtles, penguins, and other marine
animals ingest or become entangled in. This site presents the problem in
numbers, lists five things anyone can do, and invites visitors to take a
pledge.

Built as a class project for a Web Development course at Glendale
Community College (Fall 2026).

## Built with

- HTML5 — semantic structure
- CSS3 — one shared stylesheet: flexbox layouts, fluid type with
  `clamp()`, CSS counters, and a mobile breakpoint at 768px
- Vanilla JavaScript — one shared script: hamburger menu and an
  interactive pledge counter

No frameworks, no libraries, no build step.

## Pages

| Page          | Status      |
| ------------- | ----------- |
| Home (index)  | Built    |
| About         | In progress |
| Contact       | In progress |
| Copyrights    | In progress |
| History       | In progress |
| FAQ           | Built |
| Donate        | In progress |

## Project structure

```
├── index.html    # home page
├── styles.css    # shared by all pages
├── script.js     # shared by all pages
└── images/       # site images
```

## Run locally

No build or server setup is required. Clone the repository and open
`index.html` in a browser:

```bash
git clone 
```

## Deployment

Hosted on Cloudflare and connected to this repository — every push to
`main` automatically rebuilds and republishes the live site.

## Author

Margarita Kattsyna - a student project for our oceans.
