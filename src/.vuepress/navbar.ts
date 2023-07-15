import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "book",
    link: "/guide/",
  },
  {
    text: "使用指引",
    icon: "hand-point-right",
    link: "/use/",
  },
  {
    text: "配置",
    icon: "gears",
    link: "/config/",
  },
  {
    text: "演示示例",
    icon: "laptop-code",
    link: "/demo/",
  },
  {
    text: "常见问题",
    icon: "clipboard-question",
    link: "/question/",
  },
  {
    text: "授权",
    icon: "key",
    link: "https://jimu.fxss.work",
  },
]);
