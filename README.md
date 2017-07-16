# 项目预览
![](http://or1y0ta3t.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20170605150025.jpg)<br>
线上访问:http://zhaoboy.bid/yanxuan/#/<br>
或者二维码扫描:
![](http://or1y0ta3t.bkt.clouddn.com/newercode.png)
# 项目描述
> vue全家桶模仿网易严选浏览，购物流程，好的生活，没那么贵。
### 技术栈
前后端分离,CORS解决跨域
#### 前台
> * vue 前端页面展示
> * vue-router spa
> * vuex 组件状态共享
> * axios 异步请求
> * es6 js新一代规范
> * localStorage 个人信息的存储，购物车的存储
> * Eslint 代码规范
> * webpack build to dist
> * iview 部分引入

#### 后台
> * Node(Express) mock后台数据
> * leancloud 托管express

### 实现的功能
#### 首页
* 图片轮播
* swiper滑块
* cell行组件
* 商品grid块组件
* tabbar切换
* 推荐，居家， 餐厨商品缩略信息的请求和展示
#### 商品详情
* 商品大图滑动
* 参数，评论，名称，详情的请求展示
* 购买
* 加入购物车
#### 专题
* 头部swiper滑块
* each-suggest 推荐组件
#### 分类
* 复用，改造首页tabbar组件
* 请求每一分类数据
* 过渡效果
#### 购物车
* 登陆状态的判断
* 全选，非全选的切换
* 购物车加入的过渡
* 滑动删除
* confirm框
* 下单形成订单
#### 个人中心
* grid
* 我的订单
* 订单的展示

</pre>
## 总结
* 造出了滑动删除的轮子。
* 对状态管理有了进一步的了解,在项目过程中每一个组件都应用了footer这个组件，切换的时候每次当前选中的选项都是第一项成选中状态，究其原因的他们的状态没有共享。
* 对组件的抽离，书写可复用的组件。
* pages管理页面组件
* vuex状态分模块管理
* util工具的分离
* axios的封装
## 广告
2018届毕业生求职中<br>
技术栈：Vue + js + html + css + nodejs+ mongoDB + 微信小程序<br>
掌握html5，css3，js（es5，es6）熟练应用bootstrap，weui，semantic-ui，jquery等框架进行开发；熟练掌握sass，stylus等CSS预处理器编写vue+vuex+vue-router，对MVVM开发模式有一定的理解，后续还会学习react，PWA，weex等技术；了解node.js，mongodb相关知识，熟练应用express框架开发；了解基本的数据结构与算法；<br>
[这里是我的简历](http://zhaoboy.bid/yanxuan/resume.html)<br>
电话：<a href="tel:17607080585">17607080585</a>         邮箱：<a href=”mailto:1424254461@qq.com”>邮箱1424254461@qq.com</a>

## 目录
```
|
|—— build 
|—— config
|—— express/
| |—— app.js : 服务入口
| |—— routes/ : 后端路由.
| |—— ......
|
|——src : dev resources.
| |—— assets/
| |    |____style/ 样式表
| |    |    |____reset.css
| |    |    |____others.css
| |—— components/
| |    |____ public/ 公共组件
| |    |     |____ cell.vue 行
| |    |     |____ header.vue 头
| |    |     |____ goTop.vue
| |    |     |____ Footer.vue
| |    |     |____ others.vue 其它
| |—— fetch/
| |    |____ api.js axios请求
| |—— pages/
| |    |____ index/ 公共组件
| |    |     |____ others.vue vue组件
| |    |____ mylist/ 我的订单
| |    |     |____ others.vue vue组件
| |    |____ selfcenter/ 个人中心
| |    |     |____ others.vue vue组件
| |    |____ shopcart/ 购物车
| |    |     |____ others.vue vue组件
| |    |____ type/ 分类
| |    |     |____ others.vue vue组件
| |    |____ other folder......
| |    |     |____ others.vue vue组件
| |—— router/
| |    |____ index.js 路由映射
| |—— util/
| |    |____ common.js util/localstorage
| |—— store/ 
| |    |____ module/ 
| |    |     |____ user.js 个人状态管理
| |    |     |____ order.js 订单状态管理
| |    |     |____ footer.js.js 脚步菜单
| |    |     |____ shopCart.js 购物车状态
| |    |____ store.js mainjs
| |    |____ types.js typesz管理
| |—— App.vue :neteast-yanxuan SPA
| |__ main.js : the entry of douban-movieSPA
|
|__ static : static files

```

# netease-yanxuan

> netease yanxuan with vue2.0

## Build Setup
可修改配置axios.defaults.baseURL<br>
clone express文件夹<br>
npm i & npm run dev 启动后端<br>
前端部分:<br>
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
