[![Netlify Status](https://api.netlify.com/api/v1/badges/17a8cef7-0bc1-48e9-bf6f-8d4c5aa2ce65/deploy-status)](https://app.netlify.com/sites/unishadowgames/deploys)


# unishadow.games

This repository contains the code for [my personal website](https://alex.gu3.me/), hosted on [Netlify](https://www.netlify.com/), and written in [JavaScript](https://www.javascript.com/) using the [Nuxt.js](https://nuxtjs.org/) framework.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/xezno/gu3.me">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify">
</a>

## Modifying

This website is pretty data-oriented. You can find all the data in the `data` directory. The `data` directory contains the following files:
- `experience.json`: Contains a timeline of work experience.
- `projects.json`: Contains a list of portfolio projects.
- `skills.json`: Contains a list of technical skills.
- `options.json`: Contains misc options (name, avatar URL, etc.)

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```
