---
title: 其他自定义过滤器
isOriginal: true
date: 2023-09-16
---

[展示示例](https://jimu.fxss.work/#/outside/registerFilter) 。

## f-length 过滤器

### 说明

1. 参数为 String，返回字符串长度；
2. 参数为 Array，返回数组长度；
3. 参数为 Object，返回对象属性个数；
4. 否则返回 0。

### 例子

```json
...
"data": {
  "filterName": "aa",
  "filterArray": [
    1,
    2,
    3
  ],
  "filterObject": {
    "name": "aaa",
    "age": 18
  }
},
...
"tpl": "字符串 ${filterName}: ${filterName|f-length};", // 字符串 aa: 2
"tpl": "数组 ${filterArray|json}: ${filterArray|f-length}", // 数组 [ 1, 2, 3 ]: 3
"tpl": "对象 ${filterObject|json}: ${filterObject|f-length}", // 对象 { "name": "aaa", "age": 18 }: 2
...
```