// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'public/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        avatar: fields.image({
          label: 'Avatar',
          description: 'The avatar for this user',
          // This will output the images in the "public" directory
          directory: 'public',
          // publicPath: '/images/avatars/'
        })
      },
    }),
  },
});