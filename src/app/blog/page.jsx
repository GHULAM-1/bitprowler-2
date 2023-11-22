"use client";
import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";

const BlogsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "post"]`, {
          cache: "no-store",
        });
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  console.log(data);

  return (
    <>
      <div className="mt-5rem bg-green-400 w-screen h-screen flex justify-center items-center ">
        {/* Rest of your component */}
        <div className="text-SMALL_LAPTOP-Heading">{data?.title}</div>
      </div>
    </>
  );
};

export default BlogsPage;
