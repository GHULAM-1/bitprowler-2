// import { filterPills } from "../data/general";
// import { useState } from "react";
// import Pills, { PillsProps } from "@/components/custom/pills";
// type FilterSectionProps = {
//   setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
// };
// export default function FilterSection({
//   setSearchCategory,
// }: FilterSectionProps) {
//   const [activeButton, setActiveButton] = useState(0);
//   const [currentIntent, setCurrentIntent] = useState("filterTag");

//   const handleButtonClick = (buttonIndex: any, pill: string) => {
//     console.log(activeButton);
//     setActiveButton(buttonIndex);
//     setSearchCategory(pill);

//     // setActiveButton(buttonIndex);
//     // console.log(
//     //   "in the state",
//     //   pill.split(" ").join(""),
//     //   activeButton,
//     //   buttonIndex
//     // );
//     // if (activeButton === buttonIndex) {
//     //   const stringWithoutSpaces = pill.split(" ").join("");
//     //   setCurrentIntent(stringWithoutSpaces);
//     //   console.log("rang", stringWithoutSpaces);
//     //   setSearchCategory(pill);
//     // }
//   };

//   return (
//     <>
//       <div className="flex mt-[0.75rem] mb-[0.75rem] TABLET:mb-[1.5rem] gap-[0.75rem] SMALL_LAPTOP:gap-[1rem] flex-wrap transition-all">
//         {filterPills.map((pill, index) => {
//           return (
//             <>
//               <Pills
//                 intent={`${activeButton === 1 ? "WebDev" : "filterTag"}`}
//                 size="regularFilterPills"
//                 name={pill}
//                 key={index}
//                 onClick={() => handleButtonClick(index, pill)}
//                 // className={`px-3 py-2 mx-1 ${
//                 //   activeButton === index
//                 //     ? "bg-secondaryBackgroundColor transition-all ease-linear"
//                 //     : "bg-none"
//                 // }`}
//               >
//                 {pill}
//               </Pills>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import { filterPills } from "../data/general";
import { useState } from "react";
import Pills, { PillsProps } from "@/components/custom/pills";

type FilterSectionProps = {
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterSection({
  setSearchCategory,
}: FilterSectionProps) {
  const [activeButton, setActiveButton] = useState<number | null>(0); // Set it initially to 0
  const [intentMap, setIntentMap] = useState<Record<number, string>>({
    0: "All", // Set the initial intent for the 0th index
  });

  const handleButtonClick = (buttonIndex: number, pill: string) => {
    
    setActiveButton(buttonIndex);
    setSearchCategory(pill);

    // Update intent only for the clicked button
    setIntentMap((prevIntentMap) => {
      const newIntentMap = { ...prevIntentMap };

      // Set the intent for the clicked button
      newIntentMap[buttonIndex] = pill.split(" ").join("");

      // Clear intent for all other pills except the clicked button
      Object.keys(newIntentMap).forEach((key: any) => {
        if (parseInt(key) !== buttonIndex) {
          delete newIntentMap[key];
        }
      });

      return newIntentMap;
    });
  };

  return (
    <>
      <div className="flex mt-[0.75rem] mb-[0.75rem] TABLET:mb-[1.5rem] gap-[0.75rem] SMALL_LAPTOP:gap-[1rem] flex-wrap transition-all">
        {filterPills.map((pill, index) => (
          <Pills
            intent={(intentMap[index] as PillsProps["intent"]) || "filterTag"}
            size="regularFilterPills"
            name={pill}
            key={index}
            onClick={() => handleButtonClick(index, pill)}
          >
            {pill}
          </Pills>
        ))}
      </div>
    </>
  );
}
