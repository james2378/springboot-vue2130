import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import dictionary from '@/views/modules/dictionary/list'
        import gongyingshang from '@/views/modules/gongyingshang/list'
        import goods from '@/views/modules/goods/list'
        import goodsChuruInout from '@/views/modules/goodsChuruInout/list'
        import goodsChuruInoutList from '@/views/modules/goodsChuruInoutList/list'
        import goodsShouyin from '@/views/modules/goodsShouyin/list'
        import goodsShouyinList from '@/views/modules/goodsShouyinList/list'
        import yuangong from '@/views/modules/yuangong/list'
        import dictionaryGongyingshang from '@/views/modules/dictionaryGongyingshang/list'
        import dictionaryGongyingshangSuozaidiqu from '@/views/modules/dictionaryGongyingshangSuozaidiqu/list'
        import dictionaryGongyingshangXinyongdengji from '@/views/modules/dictionaryGongyingshangXinyongdengji/list'
        import dictionaryGoods from '@/views/modules/dictionaryGoods/list'
        import dictionaryGoodsChuruInout from '@/views/modules/dictionaryGoodsChuruInout/list'
        import dictionaryGoodsShouyin from '@/views/modules/dictionaryGoodsShouyin/list'
        import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryGongyingshang',
        name: '供应商类型名称',
        component: dictionaryGongyingshang
    }
    ,{
        path: '/dictionaryGongyingshangSuozaidiqu',
        name: '所在地区类型名称',
        component: dictionaryGongyingshangSuozaidiqu
    }
    ,{
        path: '/dictionaryGongyingshangXinyongdengji',
        name: '供应商信用等级类型名称',
        component: dictionaryGongyingshangXinyongdengji
    }
    ,{
        path: '/dictionaryGoods',
        name: '商品类型名称',
        component: dictionaryGoods
    }
    ,{
        path: '/dictionaryGoodsChuruInout',
        name: '采购类型名称',
        component: dictionaryGoodsChuruInout
    }
    ,{
        path: '/dictionaryGoodsShouyin',
        name: '收银类型',
        component: dictionaryGoodsShouyin
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架名称',
        component: dictionaryShangxia
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gongyingshang',
        name: '供应商信息',
        component: gongyingshang
      }
    ,{
        path: '/goods',
        name: '商品',
        component: goods
      }
    ,{
        path: '/goodsChuruInout',
        name: '采购',
        component: goodsChuruInout
      }
    ,{
        path: '/goodsChuruInoutList',
        name: '采购详情',
        component: goodsChuruInoutList
      }
    ,{
        path: '/goodsShouyin',
        name: '收银',
        component: goodsShouyin
      }
    ,{
        path: '/goodsShouyinList',
        name: '收银详情',
        component: goodsShouyinList
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
