import { Fragment, createElement } from "react";
import { unified } from "unified";
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight'
import rehypeReact from 'rehype-react';
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math';
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'

import * as prod from 'react/jsx-runtime'

export const useMarkdownProcessor = (content?: string) => {

     const r =  unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeReact, {
          createElement,
          Fragment,
          jsx: prod.jsx, 
          jsxs: prod.jsxs,
          elementAttributeNameCase: 'html'
        } as any)

        .processSync(content);

        return r.result
  };