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

## 权限

### `/codeApi/accessList`

#### 使用场景

`/codeApi/accessList` 返回的是权限下拉列表对应的信息表：

#### 返回值

```json
{
  "data": [
    {
      "id": "权限id", // Number
      "label": "权限名称", // String
      "value": "权限值", // Number: 0 表示管理员，其他值是添加权限的时候输入的
    }
  ],
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

```json
{
  "type": "select",
  "label": "权限",
  "name": "accessId",
  "id": "u:61beab1a3a21",
  "multiple": false,
  "source": {
    "url": "/codeApi/accessList",
    "method": "post",
    "messages": {
    }
  },
  "valueField": "id"
}
```

### `/codeApi/accessListOption`

#### 使用场景

`/codeApi/accessListOption` 返回的是权限下拉列表对应的信息表，一般用于编辑的时候：

#### 返回值

```json
{
  "data": [
    {
      "disabled": true, // 只有是管理员的时候，才会有 disabled ，并且为 true，默认管理员有所有权限，且权限不能删除管理员
      "id": "权限id", // Number
      "label": "权限名称", // String
      "value": "权限值", // Number: 0 表示管理员，其他值是添加权限的时候输入的
    }
  ],
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

```json
{
  "type": "select",
  "label": "页面访问权限",
  "name": "accessIds",
  "placeholder": "请选择",
  "valueField": "id",
  "required": true,
  "multiple": true,
  "source": {
    "method": "post",
    "url": "/codeApi/accessListOption"
  },
  "id": "u:83ff21bd1695",
  "checkAll": false
}
```

### `/codeApi/accessListOptionAndValue`

#### 使用场景

`/codeApi/accessListOptionAndValue` 返回的是权限下拉列表对应的信息表并自动选中管理员，一般用于新增的时候：

#### 返回值

```json
{
  "data": {
    "options": [
      {
        "disabled": true, // 只有是管理员的时候，才会有 disabled ，并且为 true，默认管理员有所有权限，且权限不能删除管理员
        "id": "权限id", // Number
        "label": "权限名称", // String
        "value": "权限值", // Number: 0 表示管理员，其他值是添加权限的时候输入的
      }
    ],
    "value": "管理员对应的id"
  },
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

```json
{
  "type": "select",
  "label": "页面访问权限",
  "name": "accessIds",
  "placeholder": "请选择",
  "valueField": "id",
  "required": true,
  "multiple": true,
  "source": {
    "method": "post",
    "url": "/codeApi/accessListOptionAndValue"
  },
  "id": "u:83ff21bd1695",
  "checkAll": false
}
```

### `/codeApi/accessListMap`

#### 使用场景

`/codeApi/accessListMap` 返回的也是权限信息，不过是以对象返回的，主要用户列表页面 权限 等的回显。

#### 返回值

```json
{
  "data": {
    "权限id": "权限名称", // String
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
  "label": "accessId",
  "name": "accessId",
  "source": {
    "url": "/codeApi/accessListMap",
    "method": "post",
    "requestAdaptor": "",
    "adaptor": "",
    "messages": {
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
          "themeCss": {
            "baseControlClassName": {
              "boxShadow:default": " 0px 0px 0px 0px transparent"
            }
          },
          "id": "u:b9f2a07acb3c"
        },
        {
          "label": "accessId",
          "type": "mapping",
          "name": "accessId",
          "source": "${accessListMap}",
          "id": "u:3c5762ed2911"
        }
      ],
      "bulkActions": [
      ],
      "itemActions": [
      ],
      "filterSettingSource": [
        "accessId"
      ],
      "id": "u:6a291597068f"
    }
  ],
  "dsType": "api",
  "api": {
    "url": "/codeApi/accessListMap",
    "method": "post",
    "requestAdaptor": "",
    "adaptor": "",
    "messages": {
    },
    "cache": 2000,
    "responseData": {
      "accessListMap": "$$"
    }
  },
  "id": "u:2adb05c4fc2e"
}
```

## 菜单

### `/codeApi/getMenu`

#### 使用场景

`/codeApi/getMenu` 返回的是已上线并且（有权限或者页面对外）的所有菜单的树形结构：

#### 返回值

```json
{
  "data": {
    "menu": [
      {
        ...menuItem, // 这里只是类
        "children": [
          {
            ...menuItem
          }
        ]
      }
    ]
  },
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

```json
{
  "type": "nested-select",
  "name": "pageId",
  "label": "页面",
  "multiple": false,
  "searchable": true,
  "source": {
    "url": "/codeApi/getMenu",
    "method": "post",
    "messages": {
    },
    "responseData": {
      "options": "${menu}"
    }
  },
  "valueField": "key",
  "onlyLeaf": false,
  "id": "u:b7839e8b5adb",
  "size": "md",
  "clearable": true
}
```

### `/codeApi/getAllMenu`

#### 使用场景

`/codeApi/getAllMenu` 返回的是 有权限或者页面对外 的所有菜单的树形结构（这里去掉了上线的要求）：

#### 返回值

```json
{
  "data": {
    "menu": [
      {
        ...menuItem, // 这里只是类
        "children": [
          {
            ...menuItem
          }
        ]
      }
    ]
  },
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

```json
{
  "type": "nested-select",
  "label": "选择页面",
  "name": "pageKey",
  "id": "u:160faead7796",
  "multiple": false,
  "searchable": true,
  "source": {
    "url": "/codeApi/getAllMenu",
    "method": "post",
    "messages": {
    },
    "responseData": {
      "options": "${menu}"
    }
  },
  "valueField": "key",
  "onlyLeaf": true,
  "mode": "horizontal",
  "labelWidth": 56,
  "clearable": true
}
```

## 菜单目录

### `/codeApi/getMenuFolder`

#### 使用场景

`/codeApi/getMenuFolder` 返回的是 菜单目录且已上线并且（有权限或者页面对外）的所有菜单目录的树形结构：

#### 返回值

```json
{
  "data": {
    "menu": [
      {
        ...menuItem, // 这里只是类
        "children": [
          {
            ...menuItem
          }
        ]
      }
    ]
  },
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

```json
{
  "type": "nested-select",
  "name": "pageId",
  "label": "目录",
  "multiple": false,
  "searchable": true,
  "source": {
    "url": "/codeApi/getMenuFolder",
    "method": "post",
    "messages": {
    },
    "responseData": {
      "options": "${menu}"
    }
  },
  "valueField": "key",
  "onlyLeaf": false,
  "id": "u:b7839e8b5adb",
  "size": "md",
  "clearable": true
}
```

### `/codeApi/getAllMenuFolder`

#### 使用场景

`/codeApi/getAllMenuFolder` 返回的是 菜单目录且（有权限或者页面对外） 的所有菜单目录的树形结构（这里去掉了上线的要求）：

#### 返回值

```json
{
  "data": {
    "menu": [
      {
        ...menuItem, // 这里只是类
        "children": [
          {
            ...menuItem
          }
        ]
      }
    ]
  },
  "msg": "", // 如有错误信息
  "status": 0 // status 为 0 标识接口正常
}
```

#### 使用方式

```json
{
  "type": "nested-select",
  "label": "选择页面",
  "name": "pageKey",
  "id": "u:160faead7796",
  "multiple": false,
  "searchable": true,
  "source": {
    "url": "/codeApi/getAllMenuFolder",
    "method": "post",
    "messages": {
    },
    "responseData": {
      "options": "${menu}"
    }
  },
  "valueField": "key",
  "onlyLeaf": true,
  "mode": "horizontal",
  "labelWidth": 56,
  "clearable": true
}
```
