import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { defineConfig, s } from "velite";
// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "vitesse-dark" }],
      [
        rehypeAutoLinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
  collections: {
    other: {
      name: "Other", // collection type name
      pattern: "other/**/*.mdx", // content files glob pattern
      schema: s
        .object({
          code: s.mdx(),
          title: s.string(), // Zod primitive type
          slug: s.slug("other"), // validate format, unique in posts collection
          tag: s.string().optional(),
          // slug: s.path(), // auto generate slug from file path
          date: s.isodate(), // input Date-like string, output ISO Date string.
          cover: s.image().optional(),
          metadata: s.metadata().optional(),
          published: s.boolean().optional().default(true),
        })
        // more additional fields (computed fields)
        .transform((data) => ({ ...data, permalink: `/post/${data.slug}` })),
    },
    posts: {
      name: "Post", // collection type name
      pattern: "post/**/*.mdx", // content files glob pattern
      schema: s
        .object({
          code: s.mdx(),
          title: s.string(), // Zod primitive type
          slug: s.slug("post"), // validate format, unique in posts collection
          tag: s.string().optional(),
          // slug: s.path(), // auto generate slug from file path
          date: s.isodate(), // input Date-like string, output ISO Date string.
          cover: s.image().optional(),
          metadata: s.metadata().optional(),
          published: s.boolean().optional().default(true),
        })
        // more additional fields (computed fields)
        .transform((data) => ({ ...data, permalink: `/post/${data.slug}` })),
    },
  },
});
