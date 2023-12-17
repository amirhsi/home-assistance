import React from "react";
import BlogCard from "../../components/Blog/BlogCard";
import { allBlogs, Blog } from "contentlayer/generated";
import Link from "next/link";

const BlogSection = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="mx-24 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Recent News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-24 flex flex-wrap">
          {allBlogs.slice(0, 4).map((blog: Blog, index: number) => (
            <Link href={`/blog/details/${blog.slug}`}>
              <div>
                <BlogCard
                  key={index}
                  date={blog.publishedDate}
                  CardTitle={blog.title}
                  CardDescription={blog.description}
                  image={blog.image}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
