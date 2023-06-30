---
home: true
icon: home
title: 项目主页
heroImage: /logo.svg
bgImage: https://img.fxss.work/bg1-light.svg
bgImageDark: https://img.fxss.work/bg1-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: 泛积木-低代码
tagline: 可以广泛使用的积木框架，可以广泛适用的低代码平台。
actions:
  - text: 使用指南
    icon: book
    link: ./guide/
    type: primary

  - text: 演示
    icon: desktop
    link: https://jimu.fxss.work/

highlights:
  - header: 一次部署
    image: /assets/image/box.svg
    bgImage: https://img.fxss.work/bg2-light.svg
    bgImageDark: https://img.fxss.work/bg2-dark.svg
    highlights:
      - title: 前端页面只需部署一次，后续开发及上线都在网站内，极速上线。

  - header: 功能项
    image: /assets/image/features.svg
    bgImage: https://img.fxss.work/bg3-light.svg
    bgImageDark: https://img.fxss.work/bg3-dark.svg
    features:
      - title: 注册、登录、忘记密码
        icon: fingerprint
        details: 网站自带注册、登录、忘记密码的功能
        link: ./use/login.md

      - title: 用户管理
        icon: users-gear
        details: 管理用户权限及启用状态
        link: ./use/users.md

      - title: 权限使用
        icon: unlock
        details: 管理系统的权限配置
        link: ./use/author.md

      - title: 页面开发
        icon: file
        details: 页面基本配置及页面详情内容开发
        link: ./use/page.md

      - title: 可视化页面编辑器
        icon: copy
        details: 通过拖拽配置、所见即所得
        link: ./use/page.html#可视化页面编辑器

      - title: 代码比对
        icon: code-compare
        details: 页面多版本并行开发时，通过代码比对进行代码更新
        link: ./use/page.html#页面版本

      - title: 网站配置
        icon: tv
        details: 可以自由的配置页面内容
        link: ./config/web.md
        
      - title: debug模式
        icon: bug
        details: debug模式助力查找修复bug
        link: ./use/debug.md
        
      - title: 浏览量
        icon: chalkboard
        details: 根据请求页面内容的接口进行统计，更精准查看页面浏览量
        link: ./use/view.md

      - title: 查看日志
        icon: newspaper
        details: 网站运行时会记录多种日志，方便快速定位问题，同时提供在网站内页面的形式查看日志
        link: ./use/log.md
        
      - title: 适配对接
        icon: plug-circle-check
        details: 页面访问用户信息以及接口访问获取用户信息
        link: ./use/abutment.md

  - header: 演示示例
    description: 常用功能的演示示例。
    bgImage: https://img.fxss.work/bg4-light.svg
    bgImageDark: https://img.fxss.work/bg4-dark.svg
    features:

      - title: 增删改查
        icon: table
        details: 增删改查功能实现及详情代码
        link: ./demo/table.md
---

本文档使用的是 [Vuepress Theme Hope](https://vuepress-theme-hope.github.io/v2/zh/)。
