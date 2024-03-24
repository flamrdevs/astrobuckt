import { useMemo, useState } from "react";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Button, Select, Separator } from "~/components/ui";
import { Lucide, Simple } from "~/components/icons";

import DevelopedBy from "~/components/DevelopedBy.tsx";
import Socials from "~/components/Socials.tsx";

// TODO : update products
const products = [
  {
    name: "Astrolinkt",
    description: "Astro template",
    price: 35,
    url: "https://github.com/flamrdevs/astrolinkt",
  },
  {
    name: "Astrovehnt",
    description: "Astro template",
    price: 40,
    url: "https://github.com/flamrdevs/astrovehnt",
  },
  {
    name: "Astrobuckt",
    description: "Astro template",
    price: 45,
    url: "https://github.com/flamrdevs/astrobuckt",
  },
  {
    name: "Attmine React",
    description: "React Admin template",
    price: 160,
    url: "https://github.com/flamrdevs/attmine-react",
  },
  {
    name: "Attmine Solid",
    description: "Solid Admin template",
    price: 140,
    url: "https://github.com/flamrdevs/attmine-solid",
  },
  {
    name: "Attmine Vue",
    description: "Vue Admin template",
    price: 150,
    url: "https://github.com/flamrdevs/attmine-vue",
  },
];

const Catalog = () => {
  type Sort = "none" | "price-lo" | "price-hi" | "name-asc" | "name-desc";

  const [sort, setSort] = useState<Sort>("none");

  const sorted = useMemo(() => {
    switch (sort) {
      case "price-lo":
        return products.toSorted((a, b) => (a.price < b.price ? -1 : a.price > b.price ? 1 : 0));
      case "price-hi":
        return products.toSorted((a, b) => (a.price > b.price ? -1 : a.price < b.price ? 1 : 0));
      case "name-asc":
        return products.toSorted((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
      case "name-desc":
        return products.toSorted((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0));
      case "none":
      default:
        return products;
    }
  }, [sort]);

  return (
    <main className="relative container mx-auto max-w-screen-lg">
      <header className="sticky top-0 left-0 z-10 flex items-center justify-between p-4 lg:p-6 bg-primary-9 shadow">
        <h1 className="font-bold text-white text-3xl lg:text-4xl">Catalog</h1>

        <div className="flex items-center gap-2 lg:gap-4">
          <a
            href="/#about"
            className="outline-none focus-visible:outline-2 focus-visible:outline-white-12 p-1 font-medium text-white-11 hover:text-white-11 text-lg"
            aria-label="About"
          >
            About
          </a>
          <a
            href="/#contact"
            className="outline-none focus-visible:outline-2 focus-visible:outline-white-12 p-1 font-medium text-white-11 hover:text-white-11 text-lg"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="z-0">
        <Separator className="mt-12 mb-4" />

        <div className="flex items-center justify-between gap-2 px-1">
          <Button as="a" href="https://github.com/flamrdevs/astrobuckt" target="_blank" aria-label="GitHub">
            <Simple.IconGitHub />
            GitHub
          </Button>

          <Select<Sort>
            placeholder="Sort by..."
            aria-label="Sort by"
            data={[
              {
                value: "none",
                label: "None",
              },
              {
                value: "price-lo",
                label: "Price low",
              },
              {
                value: "price-hi",
                label: "Price high",
              },
              {
                value: "name-asc",
                label: "Name asc",
              },
              {
                value: "name-desc",
                label: "Name desc",
              },
            ]}
            value={sort}
            onValueChange={setSort}
          />
        </div>

        <Separator className="mt-4 mb-12" />

        <div className="px-1">
          <ul className="grid grid-cols-4 grid-rows-3 gap-2 lg:gap-4">
            {sorted.map((product) => {
              return (
                <li key={product.name} className="col-span-2 row-span-1">
                  <a
                    href={product.url}
                    className="group relative flex flex-col gap-2 lg:gap-3 p-3 lg:p-4 w-full h-full outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-9 bg-neutral-3 border border-neutral-4"
                    target="_blank"
                    aria-label="Open"
                  >
                    <AspectRatio
                      ratio={3 / 2}
                      className="transition duration-300 group-hover:scale-95 group-focus-visible:scale-95 flex items-center justify-center w-full bg-neutral-1 border-2 border-dashed border-neutral-6"
                    >
                      <Lucide.IconImage className="size-1/2 opacity-30" />
                    </AspectRatio>

                    <div className="flex justify-between p-1 lg:p-2">
                      <div>
                        <h2 className="transition duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 font-medium text-neutral-12 text-xl lg:text-2xl">
                          {product.name}
                        </h2>
                        <div className="transition duration-300 group-hover:translate-x-px group-focus-visible:translate-x-px font-normal text-neutral-10 group-hover:text-neutral-11 group-focus-visible:text-neutral-11 text-xs lg:text-sm">
                          {product.description}
                        </div>
                      </div>

                      <div className="transition duration-300 group-hover:-translate-x-1 group-focus-visible:-translate-x-1 font-bold text-neutral-12 text-2xl lg:text-4xl">
                        ${product.price}
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col gap-4 lg:gap-6 py-8 lg:py-12 bg-primary-9">
          <Socials />

          <DevelopedBy />
        </div>
      </main>
    </main>
  );
};

export default Catalog;
