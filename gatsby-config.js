require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// TODO: Add keywords
module.exports = {
  siteMetadata: {
    title: "Booker T Showers III",
    siteUrl: "https://booker-showers.dev",
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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        createLinkInHead: true,
      },
    },
    "gatsby-plugin-robots-txt",
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
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-GJ6K6VX839", // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
  jsxRuntime: "automatic",
};
