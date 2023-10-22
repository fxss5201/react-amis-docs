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
tagline: 可以广泛使用的积木框架，可以广泛适用的低代码平台。邮箱：723107234@qq.com 电话：18217339587（微信同号）
actions:
  - text: 使用指南
    icon: book
    link: ./guide/
    type: primary

  - text: 演示
    icon: desktop
    link: https://jimu.fxss.work/

highlights:
  - header: 一次部署，多种环境，快速上线
    image: /assets/image/box.svg
    bgImage: https://img.fxss.work/bg2-light.svg
    bgImageDark: https://img.fxss.work/bg2-dark.svg
    highlights:
      - title: 前端页面只需部署一次，后续开发及上线都在网站内，极速上线。
      - title: 一套代码支持 开发、测试、正式 3重环境。
      - title: 支持 开发、测试 环境切换版本。
      - title: 支持版本查看、发布版本、版本历史、代码对比。

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
        details: 管理系统的权限配置，且支持将权限做到按钮级别
        link: ./use/author.md

      - title: 环境区分
        icon: circle-half-stroke
        details: 用于区分 开发、测试、正式 环境，调用不同环境的接口地址
        link: ./use/environment.md

      - title: 页面开发
        icon: file
        details: 页面基本配置及页面详情内容开发
        link: ./use/page.md

      - title: 可视化页面编辑器
        icon: copy
        details: 通过拖拽配置、所见即所得
        link: ./use/page.html#可视化页面编辑器

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

      - title: 文件管理
        icon: folder-open
        details: 上传图片、上传文件、创建文件夹目录、遍历文件夹中的文件和目录、删除文件夹目录和文件等
        link: ./use/fileManagement.md

      - title: 适配对接
        icon: plug-circle-check
        details: 页面访问用户信息以及接口访问获取用户信息
        link: ./use/abutment.md
        
      - title: 系统设置
        icon: gears
        details: 动态设置系统公共变量，在所有页面的数据域内可获取公共变量
        link: ./use/configMap.md
          
      - title: mock数据
        icon: lemon
        details: 支持增删改查mock数据，编辑mock数据，可以在系统所有页面内查询对应的数据值
        link: ./use/mock.md
          
      - title: 数据字典
        icon: book
        details: 支持增删改查字典数据，编辑字典数据，可以在系统所有页面内查询对应的字典值
        link: ./use/dictionary.md

      - title: CRUD增删改查生成器
        icon: table
        details: 通过配置生成增删改查（会直接生成数据表+页面，并支持配置页面内的搜索内容）
        link: ./use/crud.md

      - title: 代码比对
        icon: code-compare
        details: 页面多版本并行开发时，通过代码比对进行代码更新
        link: ./use/codeCompare.md

      - title: 版本设置
        icon: code-branch
        details: 设置本地版本，用于开发环境和测试环境的版本控制
        link: ./use/versionSet.md

      - title: 页面版本
        icon: timeline
        details: 用于查看页面的所有版本（类似于查看所有代码分支）
        link: ./use/pageVersion.md

      - title: 页面发版
        icon: tag
        details: 用于控制页面版本发布
        link: ./use/pageRelease.md

      - title: 发版历史
        icon: tags
        details: 用于查看发布历史
        link: ./use/releaseHistory.md

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

联系方式：
邮箱：723107234@qq.com
电话：18217339587（微信同号）

本文档使用的是 [Vuepress Theme Hope](https://vuepress-theme-hope.github.io/v2/zh/)。
