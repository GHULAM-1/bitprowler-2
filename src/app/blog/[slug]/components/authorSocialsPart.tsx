type AuthorSocialsPartprops = {
  authorLinkedin: string;
  authorTwitter: string;
};

export default function AuthorSocialsPart({
  authorLinkedin,
  authorTwitter,
}: AuthorSocialsPartprops) {
  return (
    <>
      <div className="flex gap-4">
        <div>{authorLinkedin}</div>
        <div>{authorTwitter}</div>
      </div>
    </>
  );
}
