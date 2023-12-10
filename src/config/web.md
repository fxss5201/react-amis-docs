---
title: 网站配置
icon: tv
order: 1
isOriginal: true
date: 2023-07-01
---

网站配置除了下订单时的基本配置，还有一些内容可以自行配置`config.js`：

```js
window.config = {
  logoName: '泛积木-低代码', // 登录、注册、忘记密码的logo，左上角展示的logo名称
  logoUrl: 'https://img.fxss.work/fanjimu-logo.jpg', // 左上角的logo

  prefixName: '', // 配置添加前缀的名称，未配置则使用 fanjimu
  secretKey: '', // 密码保存本地时的加解密key，未配置则使用 fanjimu

  // 路由白名单，配置的路由不需要用户信息
  whiteRouter: [],

  // 配置线上的接口请求基本地址
  axiosBaseURL: {
    '/codeApi': 'https://jimuserve.fxss.work',
  },

  // 是否含有对外的网页
  isHaveOutside: true,

  // 图形码类型 code: 4位字母数字 / Math: 数字运算，默认是 code
  captchaType: 'code',

  // PC端页脚的JSON配置
  // footerSchema: {
  //   type: 'wrapper',
  //   body: [
  //     {
  //       type: 'tpl',
  //       tpl: '页脚PC'
  //     }
  //   ]
  // },
  // M端页脚的JSON配置
  // mFooterSchema: {
  //   type: 'wrapper',
  //   body: [
  //     {
  //       type: 'tpl',
  //       tpl: '页脚M'
  //     }
  //   ]
  // },
}
```

## 前端`config.js`

### logoName

用于配置网站名称，以下内容也需要配合 `logoName` 修改，`index.html`：

```html
...
  <meta name="description" content="Web site created using create-react-app" />
  <title>泛积木-低代码</title>
  <style>
...
  <div id="root">
    <div class="first-loading-wrp">
      <div class="title">泛积木-低代码</div>
      <div class="loading-wrp">
        <div class="spinner">
          <div class="spinner-icon spinner-icon--default"></div>
        </div>
      </div>
    </div>
  </div>
...
```

### logoUrl

用于配置网站左上角的logo，在浏览器tab内的logo可以通过如下配置修改`index.html`：

```html
...
  <meta charset="utf-8" />
  <link rel="icon" href="https://img.fxss.work/fanjimu-logo.jpg" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
...
```

### axiosBaseURL

用于配置网站请求接口的链接前缀：

```js
  axiosBaseURL: {
    '/codeApi': 'https://jimuserve.fxss.work',
  },
```

如以上配置，则在可视化页面编辑器内配置接口的`url`的时候可以配置成`/codeApi/***` ，实际请求地址会拼接位 `https://jimuserve.fxss.work/codeApi/***` 。

### captchaType

用于配置登录时的图形码配置，`code`: 4位字母数字，`Math`: 数字运算，默认是 `code` 。
