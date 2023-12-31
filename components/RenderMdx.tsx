"use client";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Blog } from "contentlayer/generated";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }: { blog: Blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div
      className="my-40  col-span-3 lg:col-span-8  prose  sm:prose-base md:prose-lg dark:prose-invert max-w-max first-letter:text-5xl 
        prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent
       dark:prose-blockquote:bg-accentDark/20
        dark:prose-blockquote:border-accentDark
        dark:prose-li:marker:text-accentDark
        font-in
        "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
