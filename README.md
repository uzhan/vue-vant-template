# vue-vant-template

> vue vant h5应用集成模版，集成框架：vant-ui、axios、eslint、commit lint、stylelint、vConsole

## vant ui
已封装按需引入

## Axios
封装axios请求以及自定义错误处理，目录：src/utils/request.js

## vConsole
vConsole只应用于开发环境，正式环境不会使用到。对应代码：src/main.js

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Tip
1.对于moment H5应用中建议使用dayjs替代。
2.对于sass，由于node-sass的不稳定性，建议使用less替代

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
