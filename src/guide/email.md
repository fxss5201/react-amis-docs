---
title: 邮箱配置
icon: envelope
order: 4
isOriginal: true
date: 2023-07-01
---

泛积木-低代码的验证码、注册消息通知、用户审批通过等消息通知均采用邮箱发送，采用的 [SMTP](https://wx.mail.qq.com/list/readtemplate?name=app_intro.html#/agreement/authorizationCode) 服务，下面列举在QQ邮箱中如何启用配置。

## QQ邮箱启用SMTP服务

SMTP服务功能免费。

1. 登录QQ邮箱；
2. 点击设置按钮；
3. 切换到账户设置；
4. 下滑页面到 POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务，启用 SMTP服务（按照页面提示，最后会得到 SMTP授权码，对应下单页面的发送邮件的授权码）；
5. 再回到账户设置页面，下滑页面到 POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务，收取选项**全部**的邮件勾选上**SMTP发信后保存到服务器**，之后在QQ邮箱中的已发送中可以查看到所有发送邮件。

## 下单发送邮件配置填写

1. 发送邮件服务器，如果是QQ邮箱，则填写 smtp.qq.com；
2. 邮件服务器端口号，如果是QQ邮箱则为 465或587；
3. 账户邮箱：启用SMTP服务对应的邮箱;
4. 密码：即上面生成的授权码（平台仅会将授权码配置于为您生成的代码中）。
