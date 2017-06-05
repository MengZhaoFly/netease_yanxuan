import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Index from '@/page/index/index'
import Recommend from '@/page/index/recommend'
import Limit from '@/page/index/limit'
import Home from '@/page/index/home'
import Cook from '@/page/index/cook'
import Parts from '@/page/index/parts'
import Cloth from '@/page/index/cloth'
import Wash from '@/page/index/wash'
import Baby from '@/page/index/baby'
import Messy from '@/page/index/messy'
import Drink from '@/page/index/drink'
import Hobby from '@/page/index/hobby'
// 专题
import SpecialIndex from '@/page/special/index'
// 分类
import Type from '@/page/type/index'
import TypeRecommend from '@/page/type/recommend'
import TypeHome from '@/page/type/home'
import TypeCook from '@/page/type/cook'
import TypeParts from '@/page/type/part'
import TypeCloth from '@/page/type/cloth'
import TypeWash from '@/page/type/wash'
import TypeBaby from '@/page/type/baby'
import TypeMessy from '@/page/type/messy'
import TypeDrink from '@/page/type/drink'
import TypeHobby from '@/page/type/hobby'
// 购物车
import ShopCartIndex from '@/page/shopcart/index'
// 个人中心
import SelfIndex from '@/page/selfcenter/index'
import MyList from '@/page/mylist/MyList'
import MyListAll from '@/page/mylist/MyListAll'
import MylistNotpay from '@/page/mylist/MylistNotpay'
import MylistNotsend from '@/page/mylist/MylistNotsend'
import MylistSend from '@/page/mylist/MylistSend'
// 商品详情
import Details from '@/page/showgoods/index'
import seeDetails from '@/page/showgoods/goodsDetails'
import GoodsSelect from '@/page/showgoods/goodsSelect'
// 搜索
import Search from '@/page/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: { scrollToTop: true },
      children: [
        {
          path: '/',
          name: 'indexIndex',
          component: Recommend
        },
        {
          path: '/recommend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/limit',
          name: 'Limit',
          component: Limit
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: 'cook',
          name: 'Cook',
          component: Cook
        },
        {
          path: '/parts',
          name: 'Parts',
          component: Parts
        },
        {
          path: '/cloth',
          name: 'Cloth',
          component: Cloth
        },
        {
          path: '/wash',
          name: 'Wash',
          component: Wash
        },
        {
          path: '/baby',
          name: 'Baby',
          component: Baby
        },
        {
          path: '/messy',
          name: 'Messy',
          component: Messy
        },
        {
          path: '/drink',
          name: 'Drink',
          component: Drink
        },
        {
          path: '/hobby',
          name: 'Hobby',
          component: Hobby
        }
      ]
    },
    {
      path: '/special',
      name: 'Special',
      component: SpecialIndex,
      meta: { scrollToTop: true }
    },
    {
      path: '/type',
      name: 'Type',
      component: Type,
      children: [
        {
          path: '/',
          name: 'TypeRecommend',
          component: TypeRecommend
        },
        {
          path: '/type/home',
          name: 'TypeHome',
          component: TypeHome
        },
        {
          path: '/type/cook',
          name: 'TypeCook',
          component: TypeCook
        },
        {
          path: '/type/parts',
          name: 'TypeParts',
          component: TypeParts
        },
        {
          path: '/type/cloth',
          name: 'TypeCloth',
          component: TypeCloth
        },
        {
          path: '/type/wash',
          name: 'TypeWash',
          component: TypeWash
        },
        {
          path: '/type/baby',
          name: 'TypeBaby',
          component: TypeBaby
        },
        {
          path: '/type/messy',
          name: 'TypeMessy',
          component: TypeMessy
        },
        {
          path: '/type/drink',
          name: 'TypeDrink',
          component: TypeDrink
        },
        {
          path: '/type/hobby',
          name: 'TypeHobby',
          component: TypeHobby
        }
      ]
    },
    {
      path: '/shopcart',
      name: 'ShopCartIndex',
      component: ShopCartIndex
    },
    {
      path: '/self',
      name: 'SelfIndex',
      component: SelfIndex
    },
    {
      path: '/self/mylist',
      name: 'Mylist',
      component: MyList,
      children: [
        {
          path: '/',
          name: 'MyListAll',
          component: MyListAll
        },
        {
          path: '/mylist/notpay',
          name: 'MylistNotpay',
          component: MylistNotpay
        },
        {
          path: '/mylist/notsend',
          name: 'MylistNotsend',
          component: MylistNotsend
        },
        {
          path: '/mylist/allsend',
          name: 'MylistSend',
          component: MylistSend
        }
      ]
    },
    {
      path: '/detail/:type/id/:id',
      name: 'Details',
      component: Details,
      meta: { scrollToTop: true },
      children: [
        {
          path: '/detail/:type/id/:id',
          name: 'seeDetails',
          component: seeDetails
        },
        {
          path: '/detail/:type/id/:id/select',
          name: 'GoodsSelect',
          component: GoodsSelect
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
