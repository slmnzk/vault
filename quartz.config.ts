import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "slmnzk.space",

    enablePopovers: true,
    analytics: null,
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Fira Code",
        code: "IBM Plex Mono",
      },
      colors: {
        // Whos fuck use light mode?
        lightMode: {
          light: "#000000", // Background
          lightgray: "#393639", // Borders
          gray: "#646464", // Graphs Link, Heavier Borders
          darkgray: "#ccc", // Body text
          dark: "#ebebec", // Header text and icons
          secondary: "#ff2e88", // Link colour, current graph node
          tertiary: "#ff9800", // Hover states and visited nodes
          highlight: "rgba(143, 159, 169, 0.15)", // Internal link background, highlighted text
        },
        darkMode: {
          light: "#000000", // Background
          lightgray: "#393639", // Borders
          gray: "#646464", // Graphs Link, Heavier Borders
          darkgray: "#ccc", // Body text
          dark: "#ebebec", // Header text and icons
          secondary: "#ff2e88", // Link colour, current graph node
          tertiary: "#ff9800", // Hover states and visited nodes
          highlight: "rgba(143, 159, 169, 0.15)", // Internal link background, highlighted text
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],

    filters: [Plugin.RemoveDrafts()],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config;
