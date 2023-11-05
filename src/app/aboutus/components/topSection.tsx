import HeroGradient from "./heroGradient";
import AboutusBSVG from "../../../../public/aboutusBSVG";
import EllipseSVG from "../../../../public/ellipseSVG";
import TopSectionLaptops from "./topSectionLaptops";
import TopSectionMobile from "./topSectionMobile";
TopSectionLaptops;
type TopSectionProps = {
  description: string;
};
export default function TopSection({ description }: TopSectionProps) {
  return (
    <>
      <div className="hidden SMALL_LAPTOP:flex">
        <TopSectionLaptops description={description}></TopSectionLaptops>
      </div>
      <div className="flex SMALL_LAPTOP:hidden">
        <TopSectionMobile description={description}></TopSectionMobile>
      </div>
    </>
  );
}
