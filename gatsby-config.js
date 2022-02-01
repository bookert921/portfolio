require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// TODO: Add keywords
module.exports = {
  siteMetadata: {
    title: "Booker T Showers III",
    url: "https://booker-showers.dev",
    image: "/dark-mode-desktop.jpg",
    github: "https://github.com/bookert921",
    linkedin: "https://linkedin.com/in/bookert921",
    twitterUsername: "@BookerT921",
    description:
      "Software Engineer specialized in building mobile-first, elegant, performant, scalable, and secure software solutions with TypeScript",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src/components",
          "@hooks": "src/hooks",
          "@project-types": "src/project-types",
          "@assets": "src/assets",
          "@styles": "src/styles",
          "@types": "src/types",
          "@contexts": "src/contexts",
        },
        extensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documents",
        path: `${__dirname}/src/assets/documents`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "svg",
        path: `${__dirname}/src/assets/svg`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
  jsxRuntime: "automatic",
};
