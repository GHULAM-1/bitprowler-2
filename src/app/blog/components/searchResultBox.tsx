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
//   if (
//     searchString === "" ||
//     searchString === null ||
//     searchString === undefined
//   ) {
//     return <>

//     {

//     }

//     </>
//   } else {
//     if (searchCategory === "All") {
//       const filteredData = searchArray?.filter((article) => {
//         return article.mainHeading.toLowerCase().includes(searchString);
//       });
//       console.log("from all", filteredData);
//       if (filteredData?.length !== 0) {
//         filteredData?.map((article, i) => {
//           return (
//             <>
//               {console.log("in map function", article.mainHeading)}
//               <SearchResult
//                 mainHeading={article.mainHeading}
//                 slug={article.slug}
//                 category={article.category}
//                 key={i}
//               ></SearchResult>
//             </>
//           );
//         });
//       } else {
//         return (
//           <>
//             <div>no results</div>
//           </>
//         );
//       }

//       // if result array is empty show a component of no results
//     } else {
//       const filteredData = searchArray?.filter((article) => {
//         return (
//           article.mainHeading.toLowerCase().includes(searchString) &&
//           article.category.toLowerCase() === searchCategory.toLowerCase()
//         );
//       });
//       console.log(filteredData);

//       if (filteredData?.length !== 0) {
//         filteredData?.map((article, i) => {
//           return (
//             <>
//               <SearchResult
//                 mainHeading={article.mainHeading}
//                 slug={article.slug}
//                 category={article.category}
//                 key={i}
//               ></SearchResult>
//             </>
//           );
//         });
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
import SearchResult from "./searchResult";
import Link from "next/link";

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
  if (searchString === "" && searchCategory === "All") {
    return (
      <>
        {hotAndFresh.hotArray.map((article, i) => (
          <SearchResult
            mainHeading={article.mainHeading}
            slug={article.slug}
            key={i}
          />
        ))}
        {hotAndFresh.freshArray.map((article, i) => (
          <SearchResult
            mainHeading={article.mainHeading}
            slug={article.slug}
            key={i}
          />
        ))}
      </>
    );
  } else {
    if (searchCategory === "All") {
      console.log("in search all");
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
            <div>no results</div>
          </>
        );
      }
    } else {
      const filteredData = searchArray?.filter((article) => {
        console.log("ghambra", article.category, searchCategory);
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
            <div>no results found</div>
          </>
        );
      }
    }
  }
}
