"use client";
import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

import CB from "./cb";

export default function CodeBlock({ data, fileName }) {
  const { theme } = useTheme();
  const blockTheme = theme === "light" ? coldarkCold : coldarkDark;
  SyntaxHighlighter.registerLanguage("jsx", jsx);

  return (
    <div className="w-full  border-[1px] rounded-[10px] dark:border-zinc-700 my-10 border-neutral-300">
      <CB text={data} fileName={fileName}></CB>
      <SyntaxHighlighter
        language="jsx"
        style={blockTheme}
        showLineNumbers={true}
        customStyle={{
          height: "auto",
          fontSize: "1.15rem",
          lineHeight: "1.5",
          background: "transparent",
          overflowX: "scroll",
        }}
      >
        {data}
      </SyntaxHighlighter>
    </div>

    // <div className="w-full flex flex-col my-10 md:my-20 justify-start items-start">
    //   <CB text={data} fileName={fileName}></CB>
    //   <div className="max-w-[800px] rounded-b-lg border-[1px] border-zinc-800 justify-center flex items-center  ">
    //     <SyntaxHighlighter
    //       language="jsx"
    //       style={blockTheme}
    //       showLineNumbers
    //       wrapLines={true}
    //       customStyle={{
    //         borderRadius: "0 0 8px 8px",
    //         fontSize: "1.3rem",
    //         lineHeight: "1.5",
    //         padding: "1.25rem",
    //         background: "transparent",
    //         boxShadow: "none",
    //         overscrollBehaviorX: "hidden",
    //         overflowX: "auto",
    //       }}
    //     >
    //       {data}
    //     </SyntaxHighlighter>
    //   </div>
    // </div>
  );
}
