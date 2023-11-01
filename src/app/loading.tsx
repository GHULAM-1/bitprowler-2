import "./loadingStyles.css";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </>
  );
}
