"use client";
import { cva, VariantProps } from "class-variance-authority";

const dividerVariants = cva("w-full h-[1px]", {
  variants: {
    intent: {
      regular: "bg-textPrimaryColor bg-opacity-30 ",
      dropDown: "bg-textPrimaryColor bg-opacity-30",
    },
    defaultVariants: {
      intent: "regular",
    },
  },
});

export interface DividerProps extends VariantProps<typeof dividerVariants> {
  className: string;
}

export default function Divider({ intent, className }: DividerProps) {
  return (
    <>
      <div className={dividerVariants({ intent, className })}></div>
    </>
  );
}
