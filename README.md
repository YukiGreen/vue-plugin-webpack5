# vue-plugin-webpack5

插件的开发及打包发布：

```shell
# 安装依赖
yarn
# 打包插件
yarn build
# 打插件包
npm pack
# 升级版本号
npm versio patch
```

插件的使用：

```js
import btn from 'vue-plugin-webpack5';

Vue.use(btn);
```

在vue页面放上该标签即可：

```vue
<btn text="按钮上的文字" />
```

