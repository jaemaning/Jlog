// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
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

// src/components/atom/MDXcomponent/MDXComponent.tsx
import React from "react";

// src/components/atom/MDXcomponent/MDXComponent.css.ts
import { style, fontFace } from "@vanilla-extract/css";
var Hack = fontFace({
  src: 'url("/fonts/Hack-Regular.ttf")'
});
var preStyle = style({
  overflowX: "auto",
  padding: "1rem 0",
  border: "1px solid #8b8b8b",
  marginTop: "0"
});
var codeTitleStyle = style({
  fontSize: "0.9rem",
  fontWeight: 500,
  padding: "0.4rem 1rem",
  border: "1px solid #8b8b8b",
  borderTopLeftRadius: "0.4rem",
  borderTopRightRadius: "0.4rem",
  borderBottomStyle: "none"
});
var codeTitleNextPreStyle = style({
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0
});
var codeStyle = style({
  fontFamily: Hack,
  fontSize: "0.9rem",
  lineHeight: 1.5,
  padding: "0.2rem 1rem",
  borderRadius: "0.2rem"
});

// src/components/atom/MDXcomponent/MDXComponent.tsx
var MDXComponents = {
  pre: (props) => /* @__PURE__ */ React.createElement("pre", { className: preStyle, ...props }),
  code: (props) => /* @__PURE__ */ React.createElement("code", { className: codeStyle, ...props }),
  figcaption: (props) => /* @__PURE__ */ React.createElement("figcaption", { className: codeTitleStyle, ...props })
};
var MDXComponent_default = MDXComponents;

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
      rehype_img_size_default
    ],
    components: MDXComponent_default
  }
});
var contentlayer_config_default = contentSource;
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DUXOV7EI.mjs.map
