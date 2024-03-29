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
    {
      text: "大屏配置",
      icon: "chart-line",
      prefix: "largeScreen/",
      children: "structure",
    },
    {
      text: "扩展",
      icon: "retweet",
      prefix: "extend/",
      children: "structure",
    },
    {
      text: "常见问题",
      icon: "clipboard-question",
      prefix: "question/",
      children: "structure",
    },
    {
      text: "演示示例",
      icon: "laptop-code",
      prefix: "demo/",
      children: "structure",
    },
  ],
});
