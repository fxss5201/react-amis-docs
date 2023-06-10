import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "网站使用",
      icon: "circle-play",
      prefix: "use/",
      children: "structure",
    },
    {
      text: "配置",
      icon: "gear",
      prefix: "config/",
      children: "structure",
    },
  ],
});
