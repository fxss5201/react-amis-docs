---
title: 使用攻略
icon: bolt
order: 5
isOriginal: true
date: 2023-10-28
---

这里我们以大纲的方式（总体把握）讲述如何高效、便捷使用 泛积木-低代码。

## 权限

首先说下权限，在 **系统设置** / **权限设置** 菜单内，我们可以新增调整项目内的权限，默认拥有管理员和成员两个权限。

管理员拥有查看编辑删除所有功能的权限。

其余权限则需要配置，每个菜单页可以配置 页面访问权限、页面编辑权限、页面删除权限 ，每个菜单目录也可以配置 页面访问权限、页面编辑权限、页面删除权限 。

1. 页面访问权限：哪些权限人员可以访问该页面；
2. 页面编辑权限：哪些权限人员可以编辑该页面（可以编辑页面和操作栏内的编辑按钮权限）；
3. 页面删除权限：哪些权限人员可以删除该页面（可以删除页面和操作栏内的删除按钮权限）。

只有目录和菜单页都有权限时菜单才会正常展示，**如果目录没访问权限则整个目录中的菜单页都不会显示**。

在权限控制上面 泛积木-低代码 遵照 只要有访问页面权限的都可以 新增数据，操作栏内的 编辑 按钮权限和 页面编辑权限 挂钩，操作栏内的 编辑 按钮权限和 页面编辑权限 挂钩。如果 新增按钮权限 和 删除按钮权限 想改为和 页面编辑权限挂钩，可以调整为 `"visibleOn": "${pageAccess.editor}",`。

我们在每个页面内都会注入页面访问、编辑、删除到数据作用域中，我们可以通过 `${pageAccess.view}`/`${pageAccess.editor}`/`${pageAccess.delete}`配置页面内的操作按钮的权限，对于后端接口内的权限控制，我们提供接口 `post` `https://xxx.xxx.xx/codeApi/getPageInfoApi` 获取页面基本信息及权限信息，具体的可以查看 [权限控制](./../use/abutment.md#权限控制)。

还有一种比较特殊的权限，就是在页面配置内的页面对外，默认页面都是对内的，对外的页面则不会校验是否拥有访问权限，所有用户都拥有访问权限。

通过上面的一番操作，我们将权限调整为动态配置，并且像一张大网一样包含覆盖在整个项目内。

## 用户管理

在用户管理内，我们可以控制用户的启用和禁用、以及分配给用户对应的权限，这样上面的权限就可以再映射到用户，最终形成 哪些用户 拥有 哪些页面 的 哪些操作权限 的动态多维权限控制。

**注意：禁用的用户无法登录。**

## 环境区分

泛积木-低代码一共有三种格式的链接：

### `/admin/:pageKey` 或 `/outside/:pageKey`

`/admin/:pageKey` 是项目内部的功能页面的正式环境，`/outside/:pageKey` 是项目对外页面的正式环境。

### `/admin/page/:pageKey`

`/admin/page/:pageKey` 是项目的测试环境。

### `/editor/page/:pageKey`

`/editor/page/:pageKey` 是项目的开发环境。

项目自带的的权限数据、用户数据、数据字典、mock数据、系统配置等会作为全局数据，用于开发、测试、正式环境，数据字典变更的时候要考虑是否影响正式环境，建议数据字典变更的时候通过新增数据字典来实现。

除了项目自带的功能，其他开发的功能数据如何做不同环境不同数据的区分呢？

首先我们在项目`config.js`配置[axiosBaseURL](./../config/web.md#axiosbaseurl)，针对不同的环境，我们使用不同的 链接前缀，对应不同环境数据源的链接标识。

在页面内的数据作用域内根据不同环境我们会注入不同的标识，开发环境 `pageInfo.isDev`，测试环境 `pageInfo.isTest`，测试环境 `pageInfo.isProd`。

然后在页面 json 的配置内我们可以：

```json
"api": {
  "method": "get",
  "url": "${pageInfo.isProd ? '正式环境接口地址' : (pageInfo.isTest ? '测试环境接口地址' : '开发环境接口地址')}"
},
```

通过不同环境标识请求不同环境的接口地址，来实现环境区分。

**注意：页面内配置接口的时候，只有通过url方式支持，其他简写方式不支持。**

我们可以通过下面的页面更形象的理解：

![环境数据](./images/strategy/env.png)

## 开发模式

泛积木-低代码对于页面提供页面版本的功能，类似于代码分支的功能，举例来说：来新需求暂定 2.0.0 版本，这个时候在需要改动的页面进入页面编辑页也就是开发环境，针对当前正式环境版本（页面配置中选中的版本）创建 2.0.0 版本，直接保存 2.0.0 版本，这个时候就类似于基于 master 分支创建了开发分支。

### 版本设置

在 **代码管理** / **版本设置** 页面将本地版本设置为 2.0.0 版本，类似于将分支切换到开发分支，这个时候开发环境和测试环境都会优先渲染本地版本也就是 2.0.0 版本，在开发环境更新 2.0.0 版本的页面配置，开发完成之后，**测试人员直接将本地版本设置为 2.0.0 版本可以进行测试 2.0.0 版本的需求功能**。

本地版本保存在浏览器 `localStorage` 内，设置之后，页面右上角会展示当前设置的本地版本，未设置时所有页面显示的都是页面配置中对应的版本。

### 页面版本

在 **代码管理** / **页面版本** 页面可以查看所有页面的所有版本，我们可以选择某个菜单页的多个版本进行版本对比，选中的第一个作为对比版本，第二个作为可调整版本，对于多个版本并行开发的时候，采用这种方式进行功能合并，或者是在 **代码管理** / **代码比对** 页面进行功能合并，功能合并完成可以点击 页面查看对比 查看最新的功能。在 页面版本 页面我们还可以查看对应版本的代码及页面（建议后端接口也采用版本的方式，这样可以保证多版本的功能保持正常运行，可以正常查看页面功能），以及删除老早之前已经合并过或者已经荒废的版本。

**在[amis CRUD 增](https://aisuda.bce.baidu.com/amis/zh-CN/components/crud#%E5%A2%9E)这里描述的是依靠其它位置的弹窗表单实现，实测在单独页面这样确实可以，但如果想在版本对比页面中也正常使用的话，需要将新增弹框按钮的代码配置放置在 CRUD 的 `headerToolbar` 配置内。**

### 页面发版

在 **代码管理** / **页面发版** 页面搜索要发布的版本，比如上面的 2.0.0 版本，选择要发版的页面，点击发版，发版时：页面启用的只会更新版本，禁用的会启用并更新版本，发版页面会自动将其所有的祖先目录启用。在 **代码管理** / **发版历史** 可以查看到已发版的历史，发版记录的详情内可以查看当时的发版信息的具体内容。

泛积木-低代码通过页面版本的方式提供了类似于代码分支的功能，并提供版本对比、版本发版、发版历史等多种实用功能。

## debug模式

在开发环境的预览模式下和测试环境，项目会自动打开debug模式（页面右侧中间的按钮），点击之后可以选择某个组件查看组件内部的数据。

## CRUD生成器

对于一些简单的增删改查需求，我们可以直接通过 **系统设置** / **CRUD生成器** 来进行开发，在页面内点击新增或者复制某个相似的配置来进行新增，在新增弹窗内我们配置页面基本信息、数据表信息（用于创建数据库表）、页面搜索项，确认好了之后点击确定即可生成 对应带权限控制的页面配置 以及 数据库表，现成的增删改查功能直接使用，具体的可以查看 [CRUD生成器](./../use/crud.md)。

对于一些状态项的管理我们可以通过 **系统设置** / **数据字典** 来进行管理。

## mock数据

在 **系统设置** / **mock数据** 中我们可以创建 mock数据接口，用于紧急的页面开发。

## 总结

泛积木-低代码通过以上的一些创新思路提供更加高效、便捷的开发，助力您更好、更快的实现功能上线。

上面是对 泛积木-低代码 总纲介绍使用，详情可以查看 [使用指引](./../use/) 来更全面的了解。