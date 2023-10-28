import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { cut } from "nodejs-jieba";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "泛积木-低代码 官网：www.fxss.work",
  description: "泛积木-低代码：可以广泛使用的积木框架",

  head: [
    [
      'script', {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?9465de436a3cfb6d7b1a2fa80fe89e36";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    [
      'script', {},
      `if (document.location.host != "www.fxss.work") {
        location.href = location.href.replace(document.location.host,'www.fxss.work');
      }`
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
