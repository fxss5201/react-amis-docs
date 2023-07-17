---
title: 页面开发
icon: file
order: 5
isOriginal: true
date: 2023-07-01
---

## 页面配置

页面开发是在网页内进行的，在编辑菜单处新增目录/页面，配置页面的基本信息：

![配置页面基本信息](https://img.fxss.work/page-base.png)。

1. 页面类型：目录/页面;
2. 页面名称：会用于菜单展示及默认的页面标题；
3. 页面标识：全系统唯一，并且用于请求页面内容的标识；
4. 页面图标：图标使用的是 [fontawesome](https://fontawesome.com/search?o=r&m=free)；
5. 菜单隐藏：是否在菜单隐藏，默认是否，即需要再菜单展示，**使用场景为某些详情页面不需要在菜单展示**；
6. 页面启用：默认不启用，在网站的菜单中看不到，只有在菜单编辑处才可以看到，**使用场景为开发中不对外展示，开发完成后对外展示**；
7. 页面对外：页面对外即不需要登录也可以查看的内容，页面对外的优先级高于页面访问权限配置，即只要开启页面对外，则所有人都可以查看；
8. 页面版本：编辑页面配置的时候会展示；
9. 页面访问权限：用于设置可以访问页面的权限，配置的为 系统设置 -> 权限配置 内的权限；
10. 页面编辑权限：用于配置哪些权限的用户可以编辑页面内容；
11. 页面删除权限：用于配置哪些权限的用户可以删除页面。

## 可视化页面编辑器

确认之后，会将目录/页面添加入菜单，在菜单右侧的 <HopeIcon icon="ellipsis-h" /> 按钮上点击页面编辑，可以进入可视化页面编辑器：

![可视化页面编辑器](https://img.fxss.work/page-detail.png)。

在可视化页面编辑器页面内可以选择页面对应的版本进行编辑（为何增加页面版本会在之后介绍），可以进行预览、保存，**页面编辑配置完成之后记得保存，切换版本前记得保存**。

可以在可视化页面编辑器左侧添加组件、查看大纲、查看代码，可以在可视化页面编辑器右侧编辑选中组件的属性、外观、事件等。

## 页面版本

页面版本的使用场景为一个页面上的功能遇到并行开发的时候进行使用，进入可视化页面编辑器页面之后，直接保存新的版本。注意**进入页面的时候会默认展示页面配置内的版本，需要自行切换到对应版本开发**。

页面多个版本开发之后，会遇到代码合并的问题，可以在代码对比页面进行代码对比更新：

![代码对比更新](https://img.fxss.work/page-code-compare.png)。

在代码对比页面，左侧选择需要对比的版本，右侧选择最终版本，可以看到更改内容，将内容对比更新配置带右侧，右侧代码可以进行更新代码。