import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "book",
    link: "/guide/",
  },
  {
    text: "网站使用",
    icon: "circle-play",
    link: "/use/",
  },
  {
    text: "配置",
    icon: "gears",
    link: "/config/",
  },
  {
    text: "授权",
    icon: "key",
    link: "https://jimu.fxss.work",
  },
]);
