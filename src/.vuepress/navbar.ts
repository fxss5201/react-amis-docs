import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "book",
    link: "/guide/",
    // prefix: "/guide/"
    // children: [
    //   {
    //     text: "Bar",
    //     icon: "lightbulb",
    //     prefix: "bar/",
    //     children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
    //   },
    //   {
    //     text: "Foo",
    //     icon: "lightbulb",
    //     prefix: "foo/",
    //     children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
    //   },
    // ],
  },
  {
    text: "授权",
    icon: "key",
    link: "https://jimu.fxss.work",
  },
]);
