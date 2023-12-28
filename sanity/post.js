
const post = {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Read Next Articles",
      name: "readNextArticles",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      title: "Category",
      name: "category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Web Dev", value: "Web Dev" },
          { title: "App Dev", value: "App Dev" },
          { title: "Marketing", value: "Marketing" },
          { title: "Seo", value: "Seo" },
          { title: "Security", value: "Security" },
          { title: "Ux Design", value: "Ux Design" },
          { title: "Specials", value: "Specials" },
        ],
      },
    },

    {
      name: "bannerImage",
      title: "Banner image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },

    {
      name: "authorName",
      title: "Author name",
      type: "string",
    },
    {
      name: "authorImage",
      title: "Author image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Author's first social link",
      name: "firstSocialLink",
      type: "string",
    },
    {
      title: "Author's second social link",
      name: "secondSocialLink",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
    },

    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Code", value: "code" },
              
            ],
          },
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
          options: {
            hotspot: true,
          },
        },
        {
          type: "code",
          name: "myCodeField",
          title: "Code with all options",
          _style: "code",
          options: {
            language: "javascript",
            languageAlternatives: [
              { title: "Javascript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "tsx", value: "tsx" },
            ],
            withFilename: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

export default post;
