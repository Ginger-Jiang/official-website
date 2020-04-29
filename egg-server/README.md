# server

egg 服务端

## 使用

```shell
npm i
npm run dev
open http://localhost:7001/
```

## 目录结构

    |-- app
    | |-- controller            控制器
    | |-- middleware            中间件
    | |-- public                公共资源
    | | |-- css                 公共CSS
    | | |-- images              公共图片
    | | |-- js                  公共js
    | |-- router                子路由
    | |-- service               服务
    | |-- view                  静态页面模板目录
    | |-- router.js             路由入口
    |-- config                  全局配置
    | |-- config.default.js     默认配置(全环境加载)
    | |-- plugin.js             插件配置
    |-- README.md

## 依赖

    - eeg-view-nunjucks: 模板渲染
    - egg-mysql: mysql 数据库
    - egg-view-assets: 静态资源(内置)
    - egg-scripts: 项目启动配置
