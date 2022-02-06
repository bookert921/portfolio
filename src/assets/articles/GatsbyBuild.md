# Gatsby Build

- Gatsby generates static assets to be run in the browser.
- There is no server needed once a project has been built.
- The site built runs as a full react application capable of fetching data, etc.e
- Compile code for 2 environments:
  1. Develop
  2. Build

## Step 1

Understand the difference between the build and run environments.

Develop == "Browser Runtime"
Build == "JavaScript Runtime"

### Develop

Develop spins up a development server in the browser for you, allowing you to view your project and edit in real-time with live reloading. This server also allows you to access resources like gatsby's _data explorer_. This can also be likened to developing a node server to convert and serve up a website (SSR).

### Build

Build-time spins up a server compiles everything together for you as browser ready code to be viewed later. Therefore, it does not use the browser and does not understand what commands like `window.location` means. Since HTML is being produced in a Node.js server context, references to browser APIs like window can break the build and must be conditionally applied. Running this process provides production-ready packaging of your app including all your site's configs, data, code, and static HTML files that eventually get _rehydrated_ into a React application.

> When a Gatsby build is successfully completed, everything you need to deploy your site ends up in the public folder at the root of the site. The build includes minified files, transformed images, JSON files with information and data for each page, static HTML for each page, and more.

[Gatsby Docs](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/)
