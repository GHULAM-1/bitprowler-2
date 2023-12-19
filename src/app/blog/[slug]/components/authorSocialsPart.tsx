import { linkToPlatform } from "@/utils/linkToPlatform";
import Link from "next/link";
import FacebookSVG from "../../../../../public/socialSVSGs/facebookSVG";
import LinkedinSVG from "../../../../../public/socialSVSGs/linkedinSVG";
import InstagramSVG from "../../../../../public/socialSVSGs/instagramSVG";
import GlobeSVG from "../../../../../public/socialSVSGs/globeSVG";
import GithubSVG from "../../../../../public/socialSVSGs/githubSVG";
import TwitterSVG from "../../../../../public/socialSVSGs/twitterSVG";
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
    if (platform === "instagram") {
      return (
        <InstagramSVG className={`${iconsClasses} fill-none`}></InstagramSVG>
      );
    }
    if (platform === "twitter") {
      return (
        <TwitterSVG
          className={`${iconsClasses} fill-textPrimaryColor
          `}
        ></TwitterSVG>
      );
    }
    if (platform === "linkedin") {
      return (
        <LinkedinSVG className={`${iconsClasses} fill-none`}></LinkedinSVG>
      );
    }
    if (platform === "facebook") {
      return (
        <FacebookSVG className={`${iconsClasses} fill-none`}></FacebookSVG>
      );
    }
    if (platform === "github") {
      return <GithubSVG className={`${iconsClasses} fill-none`}></GithubSVG>;
    } else {
      return <GlobeSVG className={`${iconsClasses} fill-none`}></GlobeSVG>;
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
{
  /* <div>{authorLinkedin}</div>
        <div>{authorTwitter}</div> */
}
