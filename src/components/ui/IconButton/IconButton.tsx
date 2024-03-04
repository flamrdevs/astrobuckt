import { klassed } from "./../utils.ts";

export const IconButton = klassed(
  "button",
  {
    base: [
      "inline-flex items-center justify-center gap-2 outline-none",
      "focus-visible:outline-2 focus-visible:outline-offset-2",
      "disabled:opacity-90 disabled:pointer-events-none",
    ],
    variants: {
      color: {
        neutral: [
          "bg-neutral-9 hover:bg-neutral-10 text-white",
          "focus-visible:outline-neutral-9",
          "disabled:bg-neutral-4 disabled:text-neutral-8",
        ],
        primary: [
          "bg-primary-9 hover:bg-primary-10 text-white",
          "focus-visible:outline-primary-9",
          "disabled:bg-primary-4 disabled:text-primary-8",
        ],
      },
      size: {
        sm: "w-7 h-7 text-sm font-normal",
        md: "w-9 h-9 text-base font-medium",
        lg: "w-11 h-11 text-lg font-medium",
      },
    },
    defaults: {
      color: "primary",
      size: "md",
    },
  },
  {
    dp: {
      type: "button",
    },
  }
);

if (import.meta.env.DEV) IconButton.displayName = "IconButton";
