import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "book",
    link: "/guide/",
  },
  {
    text: "配置",
    icon: "gears",
    link: "/config/",
  },
  {
    text: "API接口",
    icon: "retweet",
    link: "/api/",
  },
  {
    text: "常见问题",
    icon: "clipboard-question",
    link: "/question/",
  },
  {
    text: "演示示例",
    icon: "laptop-code",
    link: "/demo/",
  },
  {
    text: "授权",
    icon: "key",
    link: "https://jimu.fxss.work",
  },
]);
