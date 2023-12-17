import RenderMdx from "@/components/RenderMdx";
import { allBlogs, Blog } from "contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaCalendar, FaClock, FaEye, FaPeopleCarry } from "react-icons/fa";

export const generateStaticParams = async () =>
  allBlogs.map((blog: Blog) => ({ slug: blog.slug }));

export default async function Blog({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blog = allBlogs.find((blog: Blog) => blog.slug === slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="w-full flex flex-col md:flex-row  justify-center items-center md:items-start  gap-5 relative">
      <div className="content-list md:ww-100% md:w-30% md:sticky top-2  mt-14 ">
        <details
          className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 m-5  max-h-[80vh] overflow-hidden overflow-y-auto"
          open
        >
          <summary className="text-base sm:text-lg font-semibold capitalize cursor-pointer">
            فهرست مطالب
          </summary>
          <ul className="mt-4 font-in text-sm sm:text-base">
            {blog.toc.map((heading: any) => {
              return (
                <li key={`#${heading.slug}`} className="py-1">
                  <a
                    data-level={heading.level}
                    href={`#${heading.slug}`}
                    className="data-[level=two]:pl-0 w-full data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40  data-[level=three]:pl-4 sm:data-[level=three]:pl-6  flex items-center justify-start"
                  >
                    {heading.level === "three" ? (
                      <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                        &nbsp;
                      </span>
                    ) : null}
                    <span className="hover:underline">{heading.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      </div>

      <div className="w-100% md:ww-60% flex flex-col justify-center items-center gap-5 pt-5">
        <Image
          className=" col-span-8 mb-5"
          alt={blog.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={blog.image}
        />
        <div className="w-3/4 flex flex-col gap-5 md:flex-row md:gap-0  justify-between items-end md:items-center shadow-2xl dark:shadow-md dark:shadow-white rounded-xl p-5">
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="flex flex-col text-right gap-1 justify-center items-center">
              <h2 className="text-gray-dark dark:text-white text-sm">بازدید</h2>
              2
            </div>
            <div className="bg-main rounded-lg text-white p-5 text-xl">
              <FaEye />
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="flex flex-col text-right gap-1">
              <h2 className="text-gray-dark dark:text-white text-sm">
                {" "}
                نویسنده
              </h2>
              <h2 className="text-black dark:text-white text-lg">
                {" "}
                تیم محتوای حاجی بادومی
              </h2>
            </div>
            <div className="bg-main rounded-lg text-white p-5 text-xl">
              <FaPeopleCarry />
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="flex flex-col text-right gap-1">
              <h2 className="text-gray-dark dark:text-white text-sm">
                {" "}
                تاریخ انتشار
              </h2>
              <h2 className="text-black dark:text-white text-lg">
                {" "}
                30 فروردین 1402
              </h2>
            </div>
            <div className="bg-main rounded-lg text-white p-5 text-xl">
              <FaCalendar />
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="flex flex-col text-right gap-1">
              <h2 className="text-gray-dark dark:text-white text-sm">
                {" "}
                زمان مطالعه
              </h2>
              <h2 className="text-black dark:text-white text-lg"> 8 دقیقه</h2>
            </div>
            <div className="bg-main rounded-lg text-white p-5 text-xl">
              <FaClock />
            </div>
          </div>
        </div>

        <h1 className="font-bold text-4xl mt-20">{blog.title}</h1>

        <div className="w-3/4 rtl-grid ">
          <RenderMdx blog={blog} />
        </div>
      </div>
    </div>
  );
}
