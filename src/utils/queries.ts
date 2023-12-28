export const blogCardsQuery = `*[_type == "post"]| order(publishedAt desc){
"mainHeading":title ,
  "slug":slug.current ,
  "bannerImage": bannerImage.asset->url ,
  authorName,
  "tag":category[0],
  publishedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  
}`;
