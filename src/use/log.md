---
title: 查看日志
icon: newspaper
order: 8
isOriginal: true
date: 2023-07-01
---

网站在运行时会产生4种日志：

1. 接口日志（`api.log`）：前后端接口通信时，会以日志形式记录接口参数；
2. sql日志（`sql.log`）：涉及到的sql执行，会以日志形式记录sql执行语句；
3. 邮件日志（`email.log`）：会将发送的邮件以日志形式进行记录；
4. 全部日志（`application.log`）：包含以上3中日志，并且会包含接口报错信息；

可以在服务器上查看 `log` 文件夹下的日志内容，平台也提供网页的形式进行查看：

日志列表 支持按照类型和日期进行查询：

![日志列表](https://img.fxss.work/react-amis-docs-img/logList.png)
![日志详情](https://img.fxss.work/react-amis-docs-img/logDetail.png)
