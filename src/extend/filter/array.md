---
title: 数组自定义过滤器
isOriginal: true
date: 2023-09-16
---

[展示示例](https://jimu.fxss.work/#/outside/arrayRegisterFilter) 。

**注意：过滤器参数中不能包含空格，如果过滤器参数使用数据域中的数组数据，需要使用 `toJson` 转成数组。**

## f-chunk

### 说明

将数组（array）拆分成多个 `size` 长度的区块，并将这些区块组成一个新数组。 如果 `array` 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

### 参数

1. `array` (Array): 需要处理的数组
2. `[size=1]` (number): 每个数组区块的长度

### 返回

(Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。

### 例子

```json
...
"data": {
  "array": ["a", "b", "c", "d"]
},
...
"tpl": "${array|json}: ${array|f-chunk|json}", // [ "a", "b", "c", "d" ]: [ [ "a" ], [ "b" ], [ "c" ], [ "d" ] ]
"tpl": "${array|json}: ${array|f-chunk:2|json}", // [ "a", "b", "c", "d" ]: [ [ "a", "b" ], [ "c", "d" ] ]
"tpl": "${array|json}: ${array|f-chunk:3|json}", // [ "a", "b", "c", "d" ]: [ [ "a", "b", "c" ], [ "d" ] ]
...
```

## f-compact

### 说明

创建一个新数组，包含原数组中所有的非假值元素。例如 `false`, `null`, `0`, `""`, `undefined`, 和 `NaN` 都是被认为是“假值”。

### 参数

1. `array` (Array): 待处理的数组

### 返回

(Array): 返回过滤掉假值的新数组。

### 例子

```json
...
"data": {
  "array": [0, 1, false, 2, '', 3]
},
...
"tpl": "${array|json}: ${array|f-compact|json}", // [ 0, 1, false, 2, "", 3 ]: [ 1, 2, 3 ]
...
```

## f-concat

### 说明

创建一个新数组，将`array`与任何数组 或 值连接在一起。

### 参数

1. `array` (Array): 被连接的数组
2. `[values]` (...*): 连接的值。

### 返回

(Array): 返回连接后的新数组。

### 例子

```json
...
"data": {
  "array": [1],
  "array1": [2, 3]
},
...
"tpl": "${array|json}: ${array|f-concat:2:[3]:[[4]]|json}", // [ 1 ]: [ 1, 2, [ 3 ], [ [ 4 ] ] ]
"tpl": "${array|json}: ${array|f-concat:${array1|toJson}|json}", // [ 1 ]: [ 1, 2, 3 ]
...
```

## f-difference

### 说明

创建一个具有唯一`array`值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（`array` 参数）排除了给定数组中的值。）该方法使用[SameValueZero](https://262.ecma-international.org/6.0/#sec-samevaluezero)做相等比较。结果值的顺序是由第一个数组中的顺序确定。

### 参数

1. `array` (Array): 要检查的数组。
2. `[values]` (...Array): 排除的值。

### 返回

(Array): 返回一个过滤值后的新数组。

### 例子

```json
...
"data": {
  "array": [1, 2, 3, 4, 5],
  "array1": [2, 3],
  "array2": [4]
},
...
"tpl": "${array|json}: ${array|f-difference:[2,4]|json}", // [ 1, 2, 3, 4, 5 ]: [ 1, 3, 5 ]
"tpl": "${array|json}: ${array|f-difference:${array1|toJson}:${array2|toJson}|json}", // [ 1, 2, 3, 4, 5 ]: [ 1, 5 ]
...
```

## f-differenceBy

### 说明

这个过滤器类似`f-difference`` ，除了它接受一个 `iteratee`` （注：迭代器）， 调用 `array` 和 `values` 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。`iteratee` 会调用一个参数：`(value)`。（注：首先使用迭代器分别迭代 `array` 和 `values` 中的每个元素，返回的值作为比较值）。

### 参数

1. `array` (Array): 要检查的数组。
2. `[values]` (...Array): 排除的值。
3. [iteratee=_.identity] (Function): iteratee 调用每个元素。

### 返回

(Array): 返回一个过滤值后的新数组。

### 例子

```json
...
"data": {
  "array": [
    3.1,
    2.2,
    1.3
  ],
  "array1": [
    4.4,
    2.5
  ],
  "array2": [
    {
      "x": 2
    },
    {
      "x": 1
    }
  ],
  "array3": [
    {
      "x": 1
    }
  ]
},
...
"tpl": "${array|json}: ${array|f-differenceBy:${array1|toJson}:'Math.floor'|json}", // [ 3.1, 2.2, 1.3 ]: [ 3.1, 1.3 ]
"tpl": "${array|json}: ${array|f-differenceBy:${array1|toJson}:'(val)=>Math.ceil(val)'|json}", // [ 3.1, 2.2, 1.3 ]: [ 3.1, 1.3 ]
"tpl": "${array2|json}: ${array2|f-differenceBy:${array3|toJson}:'(val)=>val.x'|json}", // [ { "x": 2 }, { "x": 1 } ]: [ { "x": 2 } ]
...
```

## f-drop

### 说明

创建一个切片数组，去除`array`前面的`n`个元素。（n默认值为1。）

### 参数

1. `array` (Array): 要查询的数组。
2. `[n=1]` (number): 要去除的元素个数。

### 返回

(Array): 返回array剩余切片。

### 例子

```json
...
"data": {
  "array": [
    1,
    2,
    3
  ]
},
...
"tpl": "${[1,2,3]|json}: ${[1,2,3]|f-drop|json}", // [ 1, 2, 3 ]: [ 2, 3 ]
"tpl": "${array|json}: ${array|f-drop:2|json}", // [ 1, 2, 3 ]: [ 3 ]
...
```

## f-dropRight

### 说明

创建一个切片数组，去除`array`尾部的`n`个元素。（n默认值为1。）

### 参数

1. `array` (Array): 要查询的数组。
2. `[n=1]` (number): 要去除的元素个数。

### 返回

(Array): 返回array剩余切片。

### 例子

```json
...
"data": {
  "array": [
    1,
    2,
    3
  ]
},
...
"tpl": "${[1,2,3]|json}: ${[1,2,3]|f-dropRight|json}", // [ 1, 2, 3 ]: [ 1, 2 ]
"tpl": "${array|json}: ${array|f-dropRight:2|json}", // [ 1, 2, 3 ]: [ 1 ]
...
```

## f-dropRightWhile

### 说明

创建一个切片数组，去除`array`中从 `predicate` 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。

### 参数

1. `array` (Array): 要查询的数组。
2. `[predicate=_.identity]` (Function): 这个函数会在每一次迭代调用。

### 返回

(Array): 返回array剩余切片。

### 例子

```json
...
"data": {
  "array": [
    { "user": "barney",  "active": true },
    { "user": "fred",    "active": false },
    { "user": "pebbles", "active": false }
  ]
},
...
"tpl": "${array|json}: ${array|f-dropRightWhile:'(val)=>!val.active'|json}", // [ { "user": "barney", "active": true }, { "user": "fred", "active": false }, { "user": "pebbles", "active": false } ]: [ { "user": "barney", "active": true } ]
...
```

## f-dropWhile

### 说明

创建一个切片数组，去除`array`中从起点开始到 `predicate` 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。

### 参数

1. `array` (Array): 要查询的数组。
2. `[predicate=_.identity]` (Function): 这个函数会在每一次迭代调用。

### 返回

(Array): 返回array剩余切片。

### 例子

```json
...
"data": {
  "array": [
    { "user": "barney",  "active": true },
    { "user": "fred",    "active": false },
    { "user": "pebbles", "active": false }
  ]
},
...
"tpl": "${array|json}: ${array|f-dropRightWhile:'(val)=>val.active'|json}", // [ { "user": "barney", "active": true }, { "user": "fred", "active": false }, { "user": "pebbles", "active": false } ]: [ { "user": "fred", "active": false }, { "user": "pebbles", "active": false } ]
...
```

## f-fill

### 说明

使用 `value` 值来填充（替换） `array`，从`start`位置开始, 到`end`位置结束（但不包含`end`位置）。

**注意：这个方法会改变 `array`（注：不是创建新数组）。**

### 参数

1. `array` (Array): 要填充改变的数组。
2. `value` (*): 填充给 array 的值。
3. `[start=0]` (number): 开始位置（默认0）。
4. `[end=array.length]` (number):结束位置（默认array.length）。

### 返回

(Array): 返回array。

### 例子

```json
...
"data": {
  "array": [1, 2, 3]
},
...
"tpl": "${array|json}: ${array|f-fill:'a'|json}", // [ 1, 2, 3 ]: [ "a", "a", "a" ]
"tpl": "${array|json}", // [ "a", "a", "a" ]
"tpl": "${[4, 6, 8, 10]|json}: ${[4, 6, 8, 10]|f-fill:'*':1:3|json}", // [ 4, 6, 8, 10 ]: [ 4, "*", "*", 10 ]
...
```
