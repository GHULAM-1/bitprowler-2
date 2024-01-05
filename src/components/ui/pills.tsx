import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const pillsVariants = cva(
  "flex flex-row justify-center items-center gap-2 outline-none",
  {
    variants: {
      intent: {
        cta: " bg-themeColor  ",
        highlight: "bg-secondaryBackgroundColor",
        stale: "bg-secondaryBackgroundColor",
        normal: "",
        tag: "",
        search: "",
        filterTag: "text-textPrimaryColor  hover:bg-secondaryBackgroundColor ,",
        All: "bg-textPrimaryColor text-primaryBackgroundColor ",
        filterTagDropDown: "",
        WebDev: "bg-webBg border-webBorder text-webText border-[1px] ",
        AppDev: "bg-appBg border-appBorder text-appText border-[1px]",
        Seo: "bg-seoBg border-seoBorder text-seoText border-[1px]",
        Marketing:
          "bg-marketingBg border-marketingBorder text-marketingText border-[1px]",
        Security:
          "bg-securityBg border-securityBorder text-securityText border-[1px]",
        UxDesign: "bg-uiBg border-uiBorder text-uiText border-[1px] ",
        Specials:
          "text-black bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  ",
      },
      size: {
        regularFilterPills:
          "SMALL_LAPTOP:text-SMALL_LAPTOP-Text  TABLET:text-Tablet-Small-Text text-SMALL_LAPTOP-SS-Text   py-[0.25rem] px-[0.5rem] rounded-[1rem] TABLET:px-[1.5rem] TABLET:py-[0.5rem] TABLET:rounded-[2rem]  whitespace-nowrap",
        blogTags:
          "text-Mobile-S-Text TABLET:text-Mobile-Text py-1 px-2   rounded-[1rem]  TABLET:rounded-[2rem]  whitespace-nowrap",
      },
    },

    defaultVariants: {
      intent: "filterTag",
      size: "regularFilterPills",
    },
  }
);

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
