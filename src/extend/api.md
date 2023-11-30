---
title: API接口
icon: plug-circle-check
isOriginal: true
date: 2023-09-16
---

此处列出在界面配置时可以直接使用的API接口。

## 用户

### 全部用户接口 `/codeApi/usersAllList`

#### 使用场景

主要应用于在列表页面 创建者、更新者 等的回显，如 [增删改查](https://jimu.fxss.work/#/admin/page/tableDemoPage) 。

#### 返回值

```json
{
  "data": [
    {
      "value": "用户id", // Number
      "name": "用户昵称", // String
      "email": "用户邮箱", // String
      "phone": "用户手机号", // String
      "label": "用户昵称" // String
    }
  ],
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

在最外层加一层 [service](https://aisuda.bce.baidu.com/amis/zh-CN/components/service) 组件可减少在表格中多次请求

```json
{
  "type": "service",
  "api": {
    "method": "post",
    "url": "/codeApi/usersAllList",
    "messages": {
    },
    "responseData": {
      "usersList": "$$"
    }
  },
  "body": [
    {
      "type": "crud",
      ......
      "columns": [
        {
          "type": "mapping",
          "label": "创建者",
          "name": "creatorId",
          "source": "${usersList.items}",
          "id": "u:1aa30eda2507"
        }
      ]
    }
  ]
}
```
