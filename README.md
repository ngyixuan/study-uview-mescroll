# uview 框架
### 1. npm安装后，main.js引入uview
``` 
import uView from "uview-ui";
Vue.use(uView);
```

# mescroll上拉刷新下拉加载js框架
### 安装
#### 1. HxBUilder插件市场导入
> 插件市场搜索 [【wxs+renderjs实现】高性能的下拉刷新上拉加载组件](https://ext.dcloud.net.cn/plugin?id=343)。导入成功后会有一个uni_modules包。
#### 2. main.js 注册全局组件
 ```
 import MescrollBody from "./uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue"
 import MescrollUni from "./uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.vue"
 Vue.component('mescroll-body', MescrollBody)
 Vue.component('mescroll-uni', MescrollUni)
 ```
#### 3. 每个pages里面分别导入mixins
```
  import MescrollMixin from "../../uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js"
  export default{
     mixins: [MescrollMixin],
     ...
  }
```
#### 4. 使用mescroll-body 组件
```
<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback" :up="upOption" :down="downOption" @emptyclick="emptyClick">
    <!--自己的逻辑-->
    <good-list :list="goodList"></good-list>
</mescroll-body>
```



