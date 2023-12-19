import Pills from "@/components/ui/pills";
import LinkSVg from "../../../../../public/linkSVG";
export default function ShareSection() {
  return (
    <>
      <div className="mt-16 TABLET:mt-10 mb-16 TABLET:mb-28">
        <div className="text-Mobile-Head TABLET:text-Tablet-Subheading mb-2">
          Liked what you read?
          <div>
            <span className="text-themeColor">share it</span> with your friends
          </div>
        </div>
        <Pills intent="All" size="regularFilterPills">
          <LinkSVg className="w-6 h-6 fill-none"></LinkSVg>
          <span>Copy Link</span>
        </Pills>
      </div>
    </>
  );
}
