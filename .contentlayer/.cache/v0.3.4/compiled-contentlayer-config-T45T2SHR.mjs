// contentlayer.config.ts
import { defineDocumentType } from "contentlayer/source-files";
import { makeSource } from "contentlayer/source-remote-files";
import fs from "fs";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import admin from "firebase-admin";

// firebase.json
var firebase_default = {
  type: "service_account",
  project_id: "home-assistance-20055",
  private_key_id: "9c15a9213d1c12686da6114837b83a94533fce90",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkVQcJrYwLAIbz\nws6fmvN/QaD8K2B6SHa87xmySVYYYaQkGMCgXGK4gwC3xbPqTy66EP4+pXF5yv8h\nbu2hxhmRZzwg+gcpeydj1aMF0U28GCv8tyhHW0NaHVr2+BlfS6MfKhPC/CwYSqGE\n3YpqrbuCke0RoC+mrPDD/+jNpfQe7ZmWs0IVN8T9DqW3INE7khoBRCdLIxqo7dmE\nA+ZM6vVidS/Z1PoRaVj3uVrPFDGnKbVQa6i8qnLAbnPi05AQUEv+FnBLqDPYquWE\nwig6yQjSugNLv7+1JEuP1dATbcU0zKWZHLAkECDqytAlw6DTWSeOcIHWrRHWw1de\nZNW4CbY/AgMBAAECggEAIw2eFDLoQfqJTtrZj1MSqKz7pX6tNDhb155bCVw6WLYP\nOMHs6Of8COas0waBg7QDQB5a1UseIwApntyWJOFoV8tBGLmsqG0EMHgEL7v/TGWN\nkHkTRvFRMxo66p5ubxTnxUCI+Zkn4MCepoRJP8sySb5N5uoX8AJI0041vxQsuCHX\n2SXDjgoIkqEcTLiHflHQNG/048j2UaBxcZLxPX4KgkjBesDKPTgkwsz3Q/2OJP7T\nslySNxyf4U06F3jYsHTpwm1pL23Zy+M2wkAqNipZEm+IaUP9yNIquCg5AFdTKCPQ\nUpRJGCPMzCzHiyYN/jy90k6gC2b5o+CRlDgjdq+CiQKBgQDcyggiGdV0Zju638l6\nxd2sjBHj+CQL83w90iauoU3STgdS9p7p0qPVRH1eduiAUlZurseDPugLqleyQY/I\neUMHYaDOutwf9wbqYyCXlUgMQYl4b24Y77kQT6s/iZodXdFH7qagXUyU1xdZu1mb\nPGe1+MqyHd6/dUtqD0XheX8HaQKBgQC+ihKpBwLJEs42WyFild/Rk7O6ANcBjLGQ\nOxdV7toui/DnCFNkICVfKuu9L3APX9mXF9yqqm+MPA7WkRGG8PbnimjNFpjVx311\nOL4wLeBMiGN2lUur5vDbc64ziXtl/2qf1LvR7V5cyQoYWs0I+zMvQXTyeCvoPngq\ndV8ukquDZwKBgAOXXa6AURKFny8Y+MQAd+yYkqnsnVl8ambvBiYNBaEIF+JnlIol\nHPkZFhj1Qi7kJ/fA7AncehXGfYquulH+dvKlyeHS9EWo1Pn3Bs6wZO2eG0hUN6w8\nKfxz70snR9R2dDMBVMCDA/3fycdx3rFBuEYjd9iR18+xbrqY6QAT49cRAoGAEnYy\nZKpHPNBTprShwXmgHCBhk64tJvtI4R64nhzsiwIIL3qBCfyLYnM4MDZ+dx7kaF1p\nhifJcx8GmQepWRfT9I9WpDiCSoRvxYHf+68WQpQcfwrsMBXKVJka0eeKS1G6NQ5Z\nvHdxYzAfiEiUAUDFrth6yluWdYRIBGUm+c5ATBUCgYEA0alh2rTPHeioKq2cMjqE\nwaXXVuVJ1YVWLiHIz01OUcoGhzCk6OYA0jZwa2NnnKpqUro+pRam8pL8g/1/A5io\ntw6RlZOKQckdOeKFn/hXgOIcVeMEob9xRPkWP0wtTQRk4Gkq1z5PTjjklScUBxyC\naPUKOzLrPs+emoANEJKXyHc=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-pvwk4@home-assistance-20055.iam.gserviceaccount.com",
  client_id: "113506202539208239585",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pvwk4%40home-assistance-20055.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

// contentlayer.config.ts
var firebaseConfig = {
  // @ts-ignore
  credential: admin.credential.cert(firebase_default),
  storageBucket: "home-assistance-20055.appspot.com"
};
function downloadAllBlogs(fs2, bucket2) {
  return new Promise((resolve, reject) => {
    bucket2.getFiles().then(async (data) => {
      const files = data[0];
      const localDirectory = "./blogs";
      console.log(files.length, " blogs found in cloud storage!");
      const promises = files.map((file) => {
        return new Promise((resolve2, reject2) => {
          const destination = `${localDirectory}/${file.name}`;
          file.createReadStream().pipe(fs2.createWriteStream(destination)).on("finish", () => {
            resolve2(true);
            console.log(`Downloaded ${file.name} to ${destination}`);
          }).on("error", (error) => {
            reject2(error);
            console.error(`Error downloading ${file.name}:`, error);
          });
        });
      });
      await Promise.all(promises);
      resolve(true);
    }).catch((error) => {
      console.error("Error listing files:", error);
      reject(error);
    });
  });
}
if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig);
}
var storage = admin.storage();
var bucket = storage.bucket();
var Blog = defineDocumentType(() => ({
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
      required: true
    }
  },
  computedFields: {
    toc: {
      type: "json",
      resolve: async (blog) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(blog.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : void 0
            };
          }
        );
        return headings;
      }
    }
  }
}));
var syncContentFromGit = async (contentDir) => {
  const syncRun = async () => {
    await downloadAllBlogs(fs, bucket);
  };
  let wasCancelled = false;
  let syncInterval;
  const syncLoop = async () => {
    console.log("Syncing content files from firebase cloud store");
    await syncRun();
    if (wasCancelled)
      return;
    syncInterval = setTimeout(syncLoop, 1e3 * 60 * 60);
  };
  await syncLoop();
  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};
var contentlayer_config_default = makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: "blogs",
  documentTypes: [Blog],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }]
    ]
  }
});
export {
  Blog,
  bucket,
  contentlayer_config_default as default,
  downloadAllBlogs,
  storage
};
//# sourceMappingURL=compiled-contentlayer-config-T45T2SHR.mjs.map
