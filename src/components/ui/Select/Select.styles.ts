import { group } from "../utils.ts";

export default group({
  base: {
    trigger: [
      "inline-flex items-center justify-center gap-8 lg:gap-10 outline-none",
      "focus-visible:outline-2 focus-visible:outline-offset-2",
      "disabled:opacity-90 disabled:pointer-events-none",
      [
        "bg-neutral-3 hover:bg-neutral-4 text-neutral-11",
        "border border-neutral-6",
        "focus-visible:outline-neutral-9",
        "disabled:bg-neutral-4 disabled:text-neutral-8",
      ],
    ],
    content: "z-50 overflow-hidden bg-neutral-1 border border-neutral-5 shadow",
    item: [
      "relative flex items-center text-base text-neutral-11 select-none",
      "data-[highlighted]:outline-none",
      "data-[disabled]:pointer-events-none",
      ["data-[highlighted]:bg-neutral-9 data-[highlighted]:text-white", "data-[disabled]:text-neutral-8"],
    ],
    scrollbutton: "flex items-center justify-center text-neutral-9 cursor-default",
  },
  variants: {
    size: {
      md: {
        trigger: "px-4 h-9 text-base font-medium",
        item: "h-9 pr-9 pl-8",
        scrollbutton: "h-9",
      },
    },
  },
  defaults: {
    size: "md",
  },
});
