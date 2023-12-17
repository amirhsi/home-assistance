import { defineDocumentType } from "contentlayer/source-files";
import { makeSource } from "contentlayer/source-remote-files";
import fs from "fs";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import admin from "firebase-admin";
import serviceAccount from "./firebase.json";

const firebaseConfig = {
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "home-assistance-20055.appspot.com",
};

export function downloadAllBlogs(fs: any, bucket: any) {
  return new Promise((resolve, reject) => {
    bucket
      .getFiles()
      .then(async (data: any) => {
        const files = data[0];

        const localDirectory = "./blogs";

        console.log(files.length, " blogs found in cloud storage!");
        const promises = files.map((file: any) => {
          return new Promise((resolve, reject) => {
            const destination = `${localDirectory}/${file.name}`;

            file
              .createReadStream()
              .pipe(fs.createWriteStream(destination))
              .on("finish", () => {
                resolve(true);
                console.log(`Downloaded ${file.name} to ${destination}`);
              })
              .on("error", (error: any) => {
                reject(error);
                console.error(`Error downloading ${file.name}:`, error);
              });
          });
        });
        await Promise.all(promises);
        resolve(true);
      })
      .catch((error: any) => {
        console.error("Error listing files:", error);
        reject(error);
      });
  });
}

if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig);
}
export const storage = admin.storage();
export const bucket = storage.bucket();

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    readingTime: { type: "string", required: true },
    image: { type: "string", required: true },
    slug: { type: "string", required: true },
    publishedDate: { type: "date", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields: {
    toc: {
      type: "json",
      resolve: async (blog: any) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(blog.body.raw.matchAll(regXHeader)).map(
          ({ groups }: any) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );
        return headings;
      },
    },
  },
}));

const syncContentFromGit = async (contentDir: string) => {
  const syncRun = async () => {
    await downloadAllBlogs(fs, bucket);
  };

  let wasCancelled = false;
  let syncInterval: any;

  const syncLoop = async () => {
    console.log("Syncing content files from firebase cloud store");

    await syncRun();

    if (wasCancelled) return;

    syncInterval = setTimeout(syncLoop, 1000 * 60 * 60);
  };

  await syncLoop();

  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};

export default makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: "blogs",
  documentTypes: [Blog],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
  },
});
