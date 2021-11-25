# vue-vant-template

> vue vant h5应用集成模版，集成框架：vant-ui、axios、eslint、commit lint、stylelint、vConsole、gzip ... 等等

国内仓库：[https://gitee.com/uzhan/vue-vant-template](https://gitee.com/uzhan/vue-vant-template)

# 功能点

### vant ui
脚手架已集成`vant-ui`按需引入，对应文件`src/vant.js`

### axios
封装`axios`请求以及自定义错误处理，目录：`src/utils/request.js`

### copy
脚手架已集成`clipboard`，实现一键复制。

### vConsole
`vConsole`只应用于开发环境，正式环境不会使用到。对应代码：`src/main.js`

### 移动端适配
脚手架集成`pxtorem` 基准值为`37.5`。代码中可直接写px单位即可，无须单独转换

### 日期工具类
本框架对常用的日期工具类进行了封装，方便开发时使用，不需要重复造轮子

### gzip打包压缩代码
通过配置压缩工具，可以在`build`的时候，自动将静态资源压缩为`gz`文件，当部署的服务器启用`gzip`功能后，将会自动加载压缩的文件，提高加载速度

### 提交规范

虽然定义了`eslint`和`stylelint`，但是假如在提交代码时不去校验，那么也无法有效的限制，所以定义了提交规范，在提交时会自动校验代码格式，并自动格式化。

同时，对于提交，也添加了`commitlint`，提交时需要按照固定的格式进行提交，如 `git commit -m 'feature: 增加了一个新的功能'`，具体可参考`commitlint.config.js`文件内的注释

### 代码规范

本框架内部集成了`eslint`与`stylelint`，全方位的去管控代码规范，为了方便使用，建议使用开发工具如 `vscode` 时需要安装`eslint`与`stylelint`插件

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### issue
该项目也会不断的完善，如遇到问题可在issue提交～

### Tip
- 1.对于moment H5应用中建议使用dayjs替代。
- 2.对于sass，由于node-sass的不稳定性，建议使用less替代

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### License

[MIT](https://github.com/uzhan/vue-vant-template/blob/main/LICENSE) license.

Copyright (c) 2021-present BaiHuaYang
