---
title: 数据字典
icon: book
order: 13
isOriginal: true
date: 2023-10-15
---

在项目中全局使用的一些字典值的时候，我们可以使用 数据字典，在菜单 **系统设置** / **数据字典**。

## 数据字典

![数据字典](./images/dictionary/20231015154619.png)

我们可以在 **数据字典** 内新增、编辑、搜索、删除 字典值，支持 字典标识 和 字典名称 两种搜索方式。

![新增字典数据](./images/dictionary/20231015154839.png)

新增字典数据的时候，需要填入字典标识、字典名称、字典值，字典标识请设置 **英文驼峰**，字典名称主要是中文名称，**字典值对应 json 数据结构**。

数据字典一般用于[下拉框](https://aisuda.bce.baidu.com/amis/zh-CN/components/form/options)，为了方便使用，其`labelField`选项显示字段为`label`，`valueField`选项值字段为`value`，所以以如下结构是最方便使用的：

```json
[
  {
    "label": "显示内容",
    "value": "值"
  },
  {
    "label": "显示内容",
    "value": "值"
  },
  ...
]
```

当然如果要使用其他字段的话也是可以的，例如：

```json
[
  {
    "name": "显示内容",
    "id": "值"
  },
  {
    "name": "显示内容",
    "id": "值"
  },
  ...
]
```

则这个时候需要配置 `labelField` 和 `valueField` 字段，例如 [选项标签字段 labelField](https://aisuda.bce.baidu.com/amis/zh-CN/components/form/options#%E9%80%89%E9%A1%B9%E6%A0%87%E7%AD%BE%E5%AD%97%E6%AE%B5-labelfield)，

```json
{
  "label": "选项",
  "type": "select",
  "name": "select",
  "labelField": "name",
  "valueField": "id",
  "options": [
    {
      "name": "A",
      "id": "a"
    },
    {
      "name": "B",
      "id": "b"
    },
    {
      "name": "C",
      "id": "c"
    }
  ]
}
```

在界面内我们可以点击操作栏内的 **id获取** / **key获取** ，然后在控制台 Network 内查看 ，这是字典数据提供的两种获取数据的模式，两种获取方式都是 `get` 请求，可以在表格内复制对应的链接。

**建议数据字典使用的时候，以新增为主，尽可能不要删除，防止系统其他地方显示错误。**

**字典数据会被用于某些对外的页面，所以数据内不要包含机密信息。**
