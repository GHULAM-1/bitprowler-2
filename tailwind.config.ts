/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    screens: {
      // tablet: "425px",
      // laptop_sm: "768px",
      // laptop_lg: "1024px",
      // desktop: "1440px",
      TABLET: "700px",
      SMALL_LAPTOP: "1031px",
      LAPTOP: "1515px",
      LARGE_LAPTOP: "1925px",
    },
    // },
    extend: {
      fontFamily: {
        // Poppins: ["Poppins", "sans-serif"],
      },

      fontSize: {
        heading: "5.5rem",
        "sub-heading": "4rem",
        "medium-sub-heading": "3rem",
        "small-sub-heading": "2.5rem",
        "large-text": "2rem",
        text: "1.250rem",
        "small-text": "1rem",
        "ss-text": "0.75rem",
        "Mobile-L-Head": "2.5rem",
        "Mobile-S-Heading": "1.25rem",
        "Mobile-Head": "1.5rem",
        "Mobile-Text": "1rem",
        "Mobile-S-Text": "0.75rem",
        "Tablet-L-Head": "5rem",
        "Tablet-S-Heading": "3rem",
        "Tablet-Head": "4rem",
        "Tablet-Subheading": "2.5rem",
        "Tablet-Large-Text": "2rem",
        "Tablet-Text": "1.5rem",
        "Tablet-Small-Text": "1rem",
        "Tablet-Caption": "0.75rem",
        "SMALL_LAPTOP-Heading": "5.5rem",
        "SMALL_LAPTOP-Subheading": "4rem",
        "SMALL_LAPTOP-M-Subheading": "3rem",
        "SMALL_LAPTOP-S-Subheading": "2.5rem",
        "SMALL_LAPTOP-L-Text": "2rem",
        "SMALL_LAPTOP-Text": "1.25rem",
        "SMALL_LAPTOP-S-Text": "1rem",
        "SMALL_LAPTOP-SS-Text": "0.75rem",
      },
      fontWeight: {
        "base-weight": "400",
      },
      colors: {
        themeColor: "var(--themeColor)",
        primaryBackgroundColor: "var(--primaryBackgroundColor)",
        secondaryBackgroundColor: "var(--secondaryBackgroundColor)",
        tertiaryBackgroundColor: "var(--tertiaryBackgroundColor)",
        textPrimaryColor: "var(--textPrimaryColor)",
        textSecondaryColor: "var(--textSecondaryColor)",
        primaryBackgroundColorDark: "var(--primaryBackgroundColorDark)",
        textSecondaryColorLight: "var(--textSecondaryColorLight)",
        tertiaryBackgroundColorLight: "var(--tertiaryBackgroundColorLight)",

        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsla(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
