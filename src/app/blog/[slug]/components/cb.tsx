type CBProps = {
  text: any;
};
export default function CB({ text }: CBProps) {
  return (
    <div className="w-full bg-themeColor text-primaryBackgroundColor">
      <button
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
      >
        Copy code
      </button>
    </div>
  );
}
