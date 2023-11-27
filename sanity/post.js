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
          { title: "General", value: "General" },
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
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Author's linkedin",
      name: "authorLinkedin",
      type: "string",
    },
    {
      title: "Author's twitter",
      name: "authorTwitter",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
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
        },
        { type: "image" },
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
