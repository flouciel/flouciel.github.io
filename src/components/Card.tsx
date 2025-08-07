import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-bold decoration-dashed hover:underline font-serif leading-tight mb-2",
  };

  return (
    <li className="my-8 pb-8 border-b border-skin-border border-opacity-30 last:border-b-0">
      <a
        href={href}
        className="inline-block text-lg font-bold text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 font-serif hover:text-skin-base transition-colors duration-200"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p className="font-serif mt-3 leading-relaxed text-skin-base opacity-90">{description}</p>
    </li>
  );
}