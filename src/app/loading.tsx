import "@/styles/loadingStyles.css";

export default function Loading() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
