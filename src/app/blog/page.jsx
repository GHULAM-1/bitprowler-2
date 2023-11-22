import { client } from "../../lib/sanity";
async function giveData() {
  console.log("aaya");
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    'slug': slug.current,
    body
  }`;

  const posts = await client.fetch(query);

  return {
    props: { posts },
  };
}
export default async function BlogsPage() {
  const data = await client.fetch(`*[_type == "post"][1] `, {
    cache: "no-store",
  });

  console.log(data);
  return (
    <>
      <div className="mt-5rem bg-green-400 ">
        <div className="mt-5rem text-themeColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          voluptatibus dolorem delectus totam, incidunt aut a, ratione itaque
          molestiae, nihil ipsam ut earum aliquid iusto excepturi rerum placeat
          asperiores assumenda?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio optio vel obcaecati neque amet rerum accusamus
          similique eius enim. Repellendus quod facere saepe dolor incidunt
          necessitatibus, quam suscipit! Sit perferendis aliquid eligendi. Neque
          temporibus quibusdam repellendus incidunt omnis adipisci aliquam,
          libero ex, ab dignissimos, tempora enim dolore. Et, aperiam dolore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          dolores veniam hic! Temporibus reprehenderit est dicta eius ex eveniet
          modi labore voluptatem nobis sequi quas, voluptates ratione molestias?
          Nemo, sint quod. Voluptas cum ipsum voluptatum, obcaecati sint
          voluptatem, nisi libero vero laboriosam officiis adipisci aspernatur
          assumenda repellat aliquam quidem quod!
        </div>
        <div className="text-SMALL_LAPTOP-Heading">{data?.title}</div>
      </div>
    </>
  );
}
