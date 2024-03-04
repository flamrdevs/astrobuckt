import { cn } from "./ui/utils.ts";
import { Simple } from "./icons";

const socials = [
  {
    href: "https://www.instagram.com",
    name: "Instagram",
    icon: Simple.IconInstagram,
  },
  {
    href: "https://www.tiktok.com",
    name: "Tiktok",
    icon: Simple.IconTiktok,
  },
  {
    href: "https://x.com",
    name: "X",
    icon: Simple.IconX,
  },
];

export default () => {
  return (
    <ul className="flex items-center justify-center gap-3 lg:gap-5 p-1">
      {socials.map((social) => {
        return (
          <li key={social.name}>
            <a
              href={social.href}
              className={cn(
                "group",
                "flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14",
                "bg-transparent",
                "outline-none border border-white-8 hover:border-white-12 rounded-full",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-12"
              )}
              target="_blank"
              aria-label="Open"
            >
              <social.icon className="transition size-1/2 text-white-8 group-hover:text-white group-hover:scale-110 group-focus-visible:text-white group-focus-visible:scale-110" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
