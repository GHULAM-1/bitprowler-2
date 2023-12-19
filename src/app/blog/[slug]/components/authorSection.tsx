import { ReactNode } from "react";

type AuthorSectionProps = {
  children: ReactNode;
};
export default function AuthorSection({ children }: AuthorSectionProps) {
  return (
    <>
      <div className="flex justify-between w-full items-center  py-3">
        {children}
      </div>
    </>
  );
}
