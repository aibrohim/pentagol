import localFont from "next/font/local";

const Manrope = localFont({
  src: [
    {
      path: "../assets/fonts/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});

const Roboto = localFont({
  src: [
    {
      path: "../assets/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export const createFontsClasses = () => {
  return [Manrope, Roboto].map((font) => font.variable);
};
