import { visit } from 'unist-util-visit';
import sizeOf from 'image-size';
import fs from 'fs';
import path from 'path';

const rehypeImgSize = () => {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties.src) {
        const imgPath = path.join(process.cwd(), 'public', node.properties.src);
        if (fs.existsSync(imgPath)) {
          const dimensions = sizeOf(imgPath);
          if (dimensions.width && dimensions.height && dimensions.width*0.8 >= dimensions.height) {
            node.properties.width = '100%';
          } else {
            // node.properties.width = '80%';
            node.properties.height = dimensions.height;
          }
        }
      }
    });
  };
};

export default rehypeImgSize;