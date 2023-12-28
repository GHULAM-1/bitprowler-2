type PackagesHeaderMobileProps = {
  price: number;
  name: string;
  currency: string;
};

export default function PackagesHeaderMobile({
  price,
  name,
  currency,
}: PackagesHeaderMobileProps) {
  return (
    <>
      <div className="mb-[3.72%] flex justify-center w-full text-Mobile-L-Head  gap-[1rem]">
        <div className="text-themeColor flex justify-center">{name}</div>
        <div className="text-textPrimaryColor flex  justify-center">
          {currency}
          {price}
        </div>
      </div>
    </>
  );
}
