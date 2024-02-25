"use client";
import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  // Use the useEffect hook to initialize the Calendly widget after the component mounts
  useEffect(() => {
    // Check if Calendly is defined to avoid errors
    if (typeof window !== "undefined" && window.Calendly) {
      // Do not initialize the Calendly popup widget here
    }
  }, []);

  // Function to handle the click event and show the Calendly popup
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Check if Calendly is defined to avoid errors
    if (typeof window !== "undefined" && window.Calendly) {
      // Initialize and display the Calendly popp widget
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/bitprowler?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=cc2c14",
      });
    }
  };

  return (
    <>
      <div className="w-full flex bg-primaryBackgroundColor ">
        <a
          href=""
          onClick={handleClick}
          className="border-primaryBackgroundColor border-[2px] rounded-md mx-3 px-8 max-w-screen-LARGE_LAPTOP w-full  py-8 dark:gradient-background gradient-background-lightMode"
        >
          Schedule time with me
        </a>
      </div>
    </>
  );
};

export default CalendlyEmbed;
