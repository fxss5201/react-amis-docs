---
title: debug模式
icon: bug
order: 6
isOriginal: true
date: 2023-07-01
---

## debug模式功能

debug模式是指唤起[调试工具](https://aisuda.bce.baidu.com/amis/zh-CN/docs/extend/debug)，可以查看组件内部运行日志，方便分析问题。

1. 运行日志，主要是 api 及数据转换的日志；
2. 查看组件数据链，Debug 工具展开后，点击任意组件就能看到这个组件的数据链。

建议：**移动端使用[调试工具](https://aisuda.bce.baidu.com/amis/zh-CN/docs/extend/debug)的时候横屏使用。**

![debug模式示例](https://img.fxss.work/debug-demo.png)

以及在移动端唤起[vConsole](https://github.com/Tencent/vConsole/blob/dev/README_CN.md)，可以在移动端查看开发者调试面板，可以查看 **Log / System / Network / Element / Storage** 等信息。

![vConsle示例](https://img.fxss.work/vConsle-demo.png)

## 如何进入debug模式

在链接的[hash](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash)（由于[react-router](https://reactrouter.com/en/main)采用的是[createHashRouter](https://reactrouter.com/en/main/routers/create-hash-router#createhashrouter)）中包含`amisDebug=1`字样时，即进入debug模式。
