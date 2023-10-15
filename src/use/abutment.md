---
title: 适配对接
icon: plug-circle-check
order: 10
isOriginal: true
date: 2023-07-01
---

## 用户信息

和本框架对接的时候，有以下几种方式可以获取当前用户信息：

### 页面中的用户信息

所有页面都可以直接在 [数据链](https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/datascope-and-datachain#%E6%95%B0%E6%8D%AE%E9%93%BE) 上查找到当前用户信息 `userInfoStore` :

``` js
{
  id: "用户id", // Number
  email: "邮箱", // String
  phone: "手机号", // String
  name: "用户昵称 || 邮箱 || 手机号", // String
  header: "头像", // String
  accessId: "权限id", // Number
  isAdmin: "是否是管理员" // Boolean, true: 是, false: 否
}
```

可以在页面中 `${userInfoStore.x}` (x 代表上述中的 key 值) 使用。

### 接口获取用户信息

不论是前端页面还是后端接口都可以通过 `post` 访问 `https://xxx.xxx.xx/codeApi/getUserInfoApi` （域名为后端接口部署的域名）接口获得当前用户消息：

``` js
{
  id: "用户id", // Number
  email: "邮箱", // String
  phone: "手机号", // String
  name: "用户昵称 || 邮箱 || 手机号", // String
  header: "头像", // String
  accessId: "权限id", // Number
  enable: "当前账户是否可用", // Number，0: 禁用, 1: 启用
  isAdmin: "是否是管理员" // Boolean, true: 是, false: 否
}
```

### 接口获取某个用户的信息

 `post` `https://xxx.xxx.xx/codeApi/getUserInfoApi` （域名为后端接口部署的域名）接口可以指定获取某个用户消息：

参数 `body` ：`{ userId: 用户ID，可选输入，未输入时默认为当前用户 }`，返回结果如下：

``` js
{
  id: "用户id", // Number
  email: "邮箱", // String
  phone: "手机号", // String
  name: "用户昵称 || 邮箱 || 手机号", // String
  header: "头像", // String
  accessId: "权限id", // Number
  enable: "当前账户是否可用", // Number，0: 禁用, 1: 启用
  isAdmin: "是否是管理员" // Boolean, true: 是, false: 否
}
```

## 页面信息

所有页面都可以直接在 [数据链](https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/datascope-and-datachain#%E6%95%B0%E6%8D%AE%E9%93%BE) 上查找到当前页面的信息 `pageInfo` :

``` js
{
  id: "页面id", // Number
  key: "页面标识key", // String
}
```

可以在页面中 `${pageInfo.x}` (x 代表上述中的 key(`id/key`) 值) 使用。

## 权限控制

### 页面中的权限信息

所有页面都可以直接在 [数据链](https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/datascope-and-datachain#%E6%95%B0%E6%8D%AE%E9%93%BE) 上查找到当前用户信息对当前页面的权限信息 `pageAccess` :

``` js
{
  view: "访问权限", // Boolean, true: 拥有权限, false: 未拥有权限
  editor: "编辑权限", // Boolean, true: 拥有权限, false: 未拥有权限
  delete: "删除权限" // Boolean, true: 拥有权限, false: 未拥有权限
}
```

可以在页面中 `${pageAccess.x}` (x 代表上述中的 key 值) 使用。

### 接口获取页面信息及权限信息

可以在前端、后端调接口 `post` `https://xxx.xxx.xx/codeApi/getPageInfoApi`（域名为后端接口部署的域名） 获取到页面的基本信息和权限信息：

参数为 `body` ：`{ key: 页面标识，必须输入，可以在接口中从页面参数传递 ${pageInfo.key} , userId: 用户ID，可选输入，未输入时则请求接口的 headers 必须包含当前用户的 Authorization`，返回的结果为：

``` js
{
  id: "页面id", // Number
  label: "页面名称", // String
  to: "页面链接", // String
  key: "页面标识", // String
  folder: "页面类型", // Number, 0: 单页面, 1: 目录
  accessIds: "页面访问权限，字符串形式 '1,2,3'", // String
  editorAccessIds: "页面编辑权限，字符串形式 '1,2,3'", // String
  deleteAccessIds: "页面删除权限，字符串形式 '1,2,3'", // String
  enable: "页面是否启用", // Number，0: 禁用, 1: 启用
  version: "页面版本", // String
  pageAccess: { // 针对某个用户的权限（默认为当前用户）
    view: "访问权限", // Boolean, true: 拥有权限, false: 未拥有权限
    editor: "编辑权限", // Boolean, true: 拥有权限, false: 未拥有权限
    delete: "删除权限" // Boolean, true: 拥有权限, false: 未拥有权限
  }
}
```

对接的其他接口可查看 [API接口](./../api/README.md)。

## 系统公共变量

在系统配置中配置的并且启用的 公共变量 所有页面都可以直接在 [数据链](https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/datascope-and-datachain#%E6%95%B0%E6%8D%AE%E9%93%BE) 上查找到 `configMap` ，可以在页面中 `${configMap.x}` (x 代表 key 值) 使用。

更详细的使用查看 [系统配置](./configMap.md)。
