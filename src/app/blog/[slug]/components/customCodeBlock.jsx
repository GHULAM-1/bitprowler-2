import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import Prism from "prismjs";
import Refractor from "react-refractor";
import CB from "./cb";
export default function CodeBlock({ data }) {
  Refractor.registerLanguage(js);
  Refractor.registerLanguage(typescript);
  Refractor.registerLanguage(tsx);

  return (
    <div className="w-screen  flex  justify-center">
      <div className="w-[75%] ">
        <CB text={data}></CB>
        <Refractor language="js" value={data}></Refractor>
      </div>
    </div>
  );
}


