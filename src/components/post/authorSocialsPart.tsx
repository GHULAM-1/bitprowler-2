import { linkToPlatform } from "@/utils/linkToPlatform";
import Link from "next/link";
import FacebookSVG from "~/facebookSVG";
import LinkedinSVG from "~/linkedinSVG";
import InstagramSVG from "~/instagramSVG";
import GlobeSVG from "~/globeSVG";
import GithubSVG from "~/githubSVG";
import TwitterSVG from "~/twitterSVG";
type AuthorSocialsPartprops = {
  firstSocialLink: string;
  secondSocialLink: string;
};

export default function AuthorSocialsPart({
  firstSocialLink,
  secondSocialLink,
}: AuthorSocialsPartprops) {
  const firstPlatform = linkToPlatform(firstSocialLink);
  const secondPlatform = linkToPlatform(secondSocialLink);

  const iconsClasses =
    "TABLET:w-8 TABLET:h-8 w-6 h-6 stroke-textPrimaryColor  ";
 
  function platformToIcon(platform: string) {
    switch (platform) {
      case "instagram":
        return <InstagramSVG className={`${iconsClasses} fill-none`} />;
      case "twitter":
        return (
          <TwitterSVG
            className={`${iconsClasses} fill-textPrimaryColor`}/>
        );
      case "linkedin":
        return <LinkedinSVG className={`${iconsClasses} fill-none`} />;
      case "facebook":
        return <FacebookSVG className={`${iconsClasses} fill-none`} />;
      case "github":
        return <GithubSVG className={`${iconsClasses} fill-none`} />;
      default:
        return <GlobeSVG className={`${iconsClasses} fill-none`} />;
    }
  }

  return (
    <>
      <div className="flex gap-4">
        <Link href={firstSocialLink} target="_blank">
          {platformToIcon(firstPlatform)}
        </Link>
        <Link href={secondSocialLink} target="_blank">
          {platformToIcon(secondPlatform)}
        </Link>
      </div>
    </>
  );
}
