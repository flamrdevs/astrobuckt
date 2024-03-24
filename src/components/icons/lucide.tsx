import { forwardRef } from "react";
import type { ReactNode, SVGProps } from "react";

type BaseProps = Omit<SVGProps<SVGSVGElement>, "role" | "viewBox" | "xmlns"> & { size?: number };

const Base = forwardRef<SVGSVGElement, BaseProps>(({ d, size = 16, width = size, height = size, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    width={width}
    height={height}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  />
));

type IconProps = Omit<BaseProps, "children">;

const create = (children: ReactNode) =>
  forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Base ref={ref} {...props}>
      {children}
    </Base>
  ));

/**
 * How to add icons ?
 *
 * - Go to https://lucide.dev/icons
 *
 * - Copy the icon as SVG, example:
 *    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
 *      <path d="M18 6 6 18" />
 *      <path d="m6 6 12 12" />
 *    </svg>
 *
 * - create component with `create` function then copy paste path elements, example:
 *    export const IconX = create(
 *      <>
 *        <path d="M18 6 6 18" />
 *        <path d="m6 6 12 12" />
 *      </>
 *    );
 */

// TODO : update icons

export const IconArrowRight = create(
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>
);

export const IconCheck = create(
  <>
    <path d="M20 6 9 17l-5-5" />
  </>
);

export const IconChevronDown = create(
  <>
    <path d="m6 9 6 6 6-6" />
  </>
);

export const IconChevronUp = create(
  <>
    <path d="m18 15-6-6-6 6" />
  </>
);

export const IconImage = create(
  <>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </>
);
