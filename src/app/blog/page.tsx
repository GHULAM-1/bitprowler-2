
import { reader } from '../reader';
import '../globals.css';
import Image from 'next/image';

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div>
      <h1>Keystatic ⚡️</h1>
      <p>This homepage shows how to load a collection from the reader API.</p>
      <p>
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </p>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            {/* <a href={`/${post.slug}`}>{post.entry.avatar}</a> */}
            <Image
  src={`/${post.entry.avatar}`}
  width={500}
  height={500}
  alt="Picture of the author"
/>
          </li>
        ))}
      </ul>
    </div>
  );
}
