---
title: API接口
icon: plug-circle-check
isOriginal: true
date: 2023-09-16
---

此处列出在界面配置时可以直接使用的API接口。

## 用户

### `/codeApi/usersAllList`

#### 使用场景

主要应用于在用户的下拉选择或者列表页面 创建者、更新者 等的回显。

#### 返回值

```json
{
  "data": [
    {
      "value": "用户id", // Number
      "name": "用户昵称", // String
      "email": "用户邮箱", // String
      "phone": "用户手机号", // String
      "label": "用户昵称" // String，返回的为 用户昵称 || 用户邮箱 || 用户手机号
    }
  ],
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

下拉选择：

```json
{
  "type": "select",
  "label": "用户",
  "name": "user",
  "id": "u:936ce4834a2c",
  "multiple": false,
  "source": {
    "url": "/codeApi/usersAllList",
    "method": "post",
    "requestAdaptor": "",
    "adaptor": "",
    "messages": {
    }
  }
}
```

表格内回显：

```json
{
  "type": "mapping",
  "label": "user",
  "name": "user",
  "id": "u:7a01806b99a8",
  "source": {
    "url": "/codeApi/usersAllList",
    "method": "post",
    "requestAdaptor": "",
    "adaptor": "",
    "messages": {
    }
  }
}
```

如果在一个页面内有多处使用，可以在最外层加一层 [service](https://aisuda.bce.baidu.com/amis/zh-CN/components/service) 组件可减少多次请求：

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
      ],
      "filter": {
        "title": "查询条件",
        "mode": "inline",
        "body": [
          {
            "type": "select",
            "label": "用户",
            "name": "user",
            "id": "u:936ce4834a2c",
            "multiple": false,
            "source": "${usersList.items}",
          }
        ]
      }
    }
  ]
}
```

### `/codeApi/usersMap`

#### 使用场景

`/codeApi/usersMap` 返回的也是用户信息，不过是以对象返回的，主要用户列表页面 创建者、更新者 等的回显。

#### 返回值

```json
{
  "data": {
    "usersMap": {
      "用户id": "用户名称", // String，返回的为 用户昵称 || 用户邮箱 || 用户手机号
    }
  },
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

表格内回显：

```json
{
  "type": "mapping",
  "label": "user",
  "name": "user",
  "source": {
    "url": "/codeApi/usersMap",
    "method": "post",
    "requestAdaptor": "",
    "adaptor": "",
    "messages": {
    },
    "responseData": {
      "&": "${usersMap}"
    }
  },
  "id": "u:f536b5286f95"
}
```

或者在最外层加一层 [service](https://aisuda.bce.baidu.com/amis/zh-CN/components/service) 组件可减少多次请求：

```json
{
  "type": "service",
  "body": [
    {
      "type": "crud",
      "syncLocation": false,
      "api": {
        "method": "get",
        "url": "/codeApi/mock?key=usersAllListPageMock",
        "requestAdaptor": "",
        "adaptor": "",
        "messages": {
        }
      },
      "columns": [
        {
          "label": "ID",
          "type": "tpl",
          "name": "user",
          "tpl": "${(page - 1) * perPage + index + 1}",
          "id": "u:c539bc73fb74",
          "themeCss": {
            "baseControlClassName": {
              "boxShadow:default": " 0px 0px 0px 0px transparent"
            }
          }
        },
        {
          "label": "user",
          "type": "mapping",
          "name": "user",
          "source": "${usersMap}",
          "id": "u:2a3b8fd0b5ee"
        }
      ],
      "bulkActions": [
      ],
      "itemActions": [
      ],
      "filterSettingSource": [
        "user"
      ],
      "id": "u:aebb61141658"
    }
  ],
  "id": "u:da92b1fb5e1c",
  "dsType": "api",
  "api": {
    "url": "/codeApi/usersMap",
    "method": "post",
    "requestAdaptor": "",
    "adaptor": "",
    "messages": {
    }
  }
}
```
