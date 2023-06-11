import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { cut } from "nodejs-jieba";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/react-amis-docs/",

  lang: "zh-CN",
  title: "泛积木-低代码",
  description: "泛积木-低代码：可以广泛使用的积木框架",

  head: [
    [
      'script', {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?31a3c177589348e7ac3e6bbf638624d7";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],

  theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
      autoSuggestions: false,
      indexOptions: {
        // 使用 nodejs-jieba 进行分词
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
