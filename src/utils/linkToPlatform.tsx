type SocialMediaPlatform =
  | "instagram"
  | "linkedin"
  | "github"
  | "facebook"
  | "twitter"
  | "website";

export function linkToPlatform(link: string): SocialMediaPlatform {
  const socialMediaRegex: Record<SocialMediaPlatform, RegExp> = {
    instagram: /^(https?:\/\/)?(?:www\.)?instagram\.com/,
    linkedin: /^(https?:\/\/)?(?:www\.)?linkedin\.com/,
    github: /^(https?:\/\/)?(?:www\.)?github\.com/,
    facebook: /^(https?:\/\/)?(?:www\.)?facebook\.com/,
    twitter: /^(https?:\/\/)?(?:www\.)?twitter\.com/,
    website: /^(https?:\/\/)?/, // Modified website property
  };

  for (const platform in socialMediaRegex) {
    if (socialMediaRegex[platform as SocialMediaPlatform].test(link)) {
      return platform as SocialMediaPlatform;
    }
  }

  return "website";
}
