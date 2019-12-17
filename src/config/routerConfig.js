import Home from '../pages/home'
import Order from '../pages/bill/order'
import GoodList from '../pages/goods/list'
import GoodAdd from '../pages/goods/add'
const menus = [{
    name: '首页',
    key: '/home',
    icon: 'bank',
    comp: Home
},{
    name: '订单',
    key: '/bill',
    icon: 'profile',
    comp: Order,
    subs: [{
        name: '订货单',
        key: '/bill/order',
        icon:'',
        comp: Order
    }]
},{
    name: '商品',
    key: '/goods',
    icon: 'shopping',
    comp: '',
    subs: [{
        name: '商品管理',
        key: '/goods/list',
        icon:'',
        comp: GoodList,
    },{
        name: '商品管理新增',
        key: '/goods/add',
        icon:'',
        comp: GoodAdd,
        hidden: true,
    },{
        name: '类别管理',
        key: '/goods/category',
        icon:'',
        comp: '',
    }]
},{
    name: '物流',
    key: '/logistics',
    icon: 'car',
    comp: '',
    subs: [{
        name: '运费方案',
        key: '/logistics/freight_plan',
        icon:'',
        comp: '',
    },{
        name: '送货时间',
        key: '/logistics/delivery_time',
        icon:'',
        comp: '',
    }]
},{
    name: '消息',
    key: '/notice',
    icon: 'alert',
    comp: '',
}]

export default menus