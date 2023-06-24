---
title: 适配对接
icon: plug-circle-check
order: 8
isOriginal: true
date: 2023-06-24
---

和本框架对接的时候，有以下几种方式可以获取当前用户信息：

## 页面中的用户信息

所有页面都可以直接在 [数据链](https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/datascope-and-datachain#%E6%95%B0%E6%8D%AE%E9%93%BE) 上查找到用户信息 `userInfoStore` :

``` js
{
  id: "用户id",
  email: "邮箱",
  phone: "手机号",
  name: "用户昵称 || 邮箱 || 手机号",
  header: "头像",
  accessId: "权限id",
  isAdmin: "是否是管理员"
}
```

可以在页面中 `${userInfoStore.x}` (x 代表上述中的 key 值) 使用。

## 接口返回用户信息

不论是前端页面还是后端接口都可以通过访问 `https://xxx.xxx.xx/codeApi/getUserInfoApi` （域名为后端接口部署的域名）接口获得用户消息：

``` js
{
  id: "用户id",
  email: "邮箱",
  phone: "手机号",
  name: "用户昵称 || 邮箱 || 手机号",
  header: "头像",
  accessId: "权限id",
  enable: "当前账户是否可用",
  isAdmin: "是否是管理员"
}
```
