import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const pillsVariants = cva("flex flex-row justify-center items-center gap-4", {
  variants: {
    intent: {
      cta: " bg-themeColor ",
      highlight: "bg-secondaryBackgroundColor",
      stale: "bg-secondaryBackgroundColor",
      normal: "",
      tag: "",
      search: "",
      filterTag: "text-textPrimaryColor  hover:bg-secondaryBackgroundColor ,",
      All: "bg-textPrimaryColor text-primaryBackgroundColor",
      filterTagDropDown: "",
      WebDev: "bg-red-500",
      AppDev: "bg-green-500",
      Seo: "bg-yellow-500",
      Marketing: "bg-purple-400",
      Security: "bg-lime-400",
      UxDesign: "bg-orange-400",
      
    },
    size: {
      regularFilterPills:
        "SMALL_LAPTOP:text-SMALL_LAPTOP-Text  TABLET:text-Tablet-Small-Text text-SMALL_LAPTOP-SS-Text   py-[0.25rem] px-[0.5rem] rounded-[1rem] TABLET:px-[1.5rem] TABLET:py-[0.5rem] TABLET:rounded-[2rem] transition-all whitespace-nowrap",
    },
  },

  defaultVariants: {
    intent: "filterTag",
    size: "regularFilterPills",
  },
});

export interface PillsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pillsVariants> {}

export default function Pills({
  intent,
  className,
  children,
  size,
  ...props
}: PillsProps) {
  return (
    <>
      <button className={pillsVariants({ intent, className, size })} {...props}>
        {children}
      </button>
    </>
  );
}

// "SMALL_LAPTOP:text-SMALL_LAPTOP-Text focus:bg-secondaryBackgroundColor TABLET:text-Tablet-Small-Text text-SMALL_LAPTOP-SS-Text text-textPrimaryColor bg-none py-[0.25rem] px-[0.5rem] rounded-[1rem] TABLET:px-[1.5rem] TABLET:py-[0.5rem] TABLET:rounded-[2rem] transition-all whitespace-nowrap",
