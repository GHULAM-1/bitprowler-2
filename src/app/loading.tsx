import "./loadingStyles.css";

export default function Loading() {
  // Or a custom loading skeleton component
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
