"use client";
import SearchResult from "./searchResult";
type SearchResultBoxProps = {
  searchArray:
    | {
        mainHeading: string;
        slug: string;
        category: string;
      }[]
    | null
    | undefined;

  hotAndFresh: {
    hotArray: {
      mainHeading: string;
      slug: string;
      category: string;
    }[];

    freshArray: {
      mainHeading: string;
      slug: string;
      category: string;
    }[];
  };
  searchString: string;
  searchCategory: string;
};

export default function SearchResultBox({
  searchArray,
  searchString,
  searchCategory,
  hotAndFresh,
}: SearchResultBoxProps) {
  if (searchCategory === "All") {
    const filteredData = searchArray?.filter((article) =>
      article.mainHeading.toLowerCase().includes(searchString.toLowerCase())
    );

    if (filteredData?.length !== 0) {
      return (
        <>
          {filteredData?.map((article, i) => (
            <SearchResult
              mainHeading={article.mainHeading}
              slug={article.slug}
              category={article.category}
              key={i}
            />
          ))}
        </>
      );
    } else {
      return (
        <>
          <div className="flex text-Mobile-Text TABLET:text-SMALL_LAPTOP-Text py-4 TABLET:py-6 bg-[#cc2c1433]  transition-all ease-linear  px-4">
            no articles found
          </div>
        </>
      );
    }
  } else {
    const filteredData = searchArray?.filter((article) => {
      return (
        article.mainHeading
          .toLowerCase()
          .includes(searchString.toLowerCase()) &&
        article.category.toLowerCase() === searchCategory.toLowerCase()
      );
    });

    if (filteredData?.length !== 0) {
      return (
        <>
          {filteredData?.map((article, i) => (
            <SearchResult
              mainHeading={article.mainHeading}
              slug={article.slug}
              category={article.category}
              key={i}
            />
          ))}
        </>
      );
    } else {
      return (
        <>
          <div className="flex text-Mobile-Text TABLET:text-SMALL_LAPTOP-Text py-4 TABLET:py-6 bg-[#cc2c1433]  transition-all ease-linear  px-4">
            no articles found
          </div>
        </>
      );
    }
  }
}

// "use client";
// import SearchResult from "./searchResult";
// type SearchResultBoxProps = {
//   searchArray:
//     | {
//         mainHeading: string;
//         slug: string;
//         category: string;
//       }[]
//     | null
//     | undefined;

//   hotAndFresh: {
//     hotArray: {
//       mainHeading: string;
//       slug: string;
//       category: string;
//     }[];

//     freshArray: {
//       mainHeading: string;
//       slug: string;
//       category: string;
//     }[];
//   };
//   searchString: string;
//   searchCategory: string;
// };

// export default function SearchResultBox({
//   searchArray,
//   searchString,
//   searchCategory,
//   hotAndFresh,
// }: SearchResultBoxProps) {
//   if (searchString === "" && searchCategory === "All") {
//     return (
//       <>
//         {hotAndFresh.hotArray.map((article, i) => (
//           <SearchResult
//             mainHeading={article.mainHeading}
//             slug={article.slug}
//             key={i}
//           />
//         ))}
//         {hotAndFresh.freshArray.map((article, i) => (
//           <SearchResult
//             mainHeading={article.mainHeading}
//             slug={article.slug}
//             key={i}
//           />
//         ))}
//       </>
//     );
//   } else {
//     if (searchCategory === "All") {
//       const filteredData = searchArray?.filter((article) =>
//         article.mainHeading.toLowerCase().includes(searchString.toLowerCase())
//       );

//       if (filteredData?.length !== 0) {
//         return (
//           <>
//             {filteredData?.map((article, i) => (
//               <SearchResult
//                 mainHeading={article.mainHeading}
//                 slug={article.slug}
//                 category={article.category}
//                 key={i}
//               />
//             ))}
//           </>
//         );
//       } else {
//         return (
//           <>
//             <div>no results</div>
//           </>
//         );
//       }
//     } else {
//       const filteredData = searchArray?.filter((article) => {
//         return (
//           article.mainHeading
//             .toLowerCase()
//             .includes(searchString.toLowerCase()) &&
//           article.category.toLowerCase() === searchCategory.toLowerCase()
//         );
//       });

//       if (filteredData?.length !== 0) {
//         return (
//           <>
//             {filteredData?.map((article, i) => (
//               <SearchResult
//                 mainHeading={article.mainHeading}
//                 slug={article.slug}
//                 category={article.category}
//                 key={i}
//               />
//             ))}
//           </>
//         );
//       } else {
//         return (
//           <>
//             <div>no results found</div>
//           </>
//         );
//       }
//     }
//   }
// }
