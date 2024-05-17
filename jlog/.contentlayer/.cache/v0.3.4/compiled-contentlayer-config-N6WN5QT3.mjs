// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

// rehype-img-size.ts
import { visit } from "unist-util-visit";
import sizeOf from "image-size";
import fs from "fs";
import path from "path";
var rehypeImgSize = () => {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "img" && node.properties.src) {
        const imgPath = path.join(process.cwd(), "public", node.properties.src);
        if (fs.existsSync(imgPath)) {
          const dimensions = sizeOf(imgPath);
          if (dimensions.width && dimensions.height && dimensions.width * 0.8 >= dimensions.height) {
            node.properties.width = "100%";
          } else {
            node.properties.height = dimensions.height;
          }
        }
      }
    });
  };
};
var rehype_img_size_default = rehypeImgSize;

// contentlayer.config.ts
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  // mdx 파일경로 패턴
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    thumbnail: {
      type: "string",
      required: false
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true
    }
  }
}));
var contentSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
          // 코드작성시 적용할 테마
        }
      ],
      highlight,
      rehype_img_size_default
    ]
  }
});
var contentlayer_config_default = contentSource;
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-N6WN5QT3.mjs.map
