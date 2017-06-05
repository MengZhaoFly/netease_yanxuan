
var router = require('express').Router();
router.get('/', function(req, res){
  let data = {
    type: 'home',
    adpic: 'http://yanxuan.nosdn.127.net/926640f944e4dcfbaf0c49c9cfd1b6e9.jpg?quality=85&thumbnail=750x0&imageView',
    data: [{
      title: '夏凉',
      subtitle: '夏凉床品，舒适一夏',
      lists: [
        {
          id: 0,
          type: 'home',
          src: 'http://yanxuan.nosdn.127.net/4f483526cfe3b953f403ae02049df5b9.png?imageView&quality=85&thumbnail=330x330',
          desc: '100%棉填充，透气排汗，双面可用',
          name: '纯棉水洗色织格夏凉被',
          price: 169
        },
        {
          id: 1,
          type: 'home',
          src: 'http://yanxuan.nosdn.127.net/0984c9388a2c3fd2335779da904be393.png?imageView&quality=85&thumbnail=330x330',
          desc: '加大加厚，双色精彩',
          name: '色织精梳AB纱格纹空调被',
          price: 199
        },
      ]
    },
    {
      title: '被枕',
      subtitle: '守护你的睡眠时光',
      lists: [
        {
          id: 2,
          type: 'home',
          src: 'http://yanxuan.nosdn.127.net/ffd2c91c7cf9c6e0f630595f7679b95d.png?imageView&quality=85&thumbnail=330x330',
          desc: '高山苦荞填充，放松颈椎',
          name: '圆形护颈苦荞麦枕',
          price: 69
        },
        {
          id: 3,
          type: 'home',
          src: 'http://yanxuan.nosdn.127.net/2b537159f0f789034bf8c4b339c43750.png?imageView&quality=85&thumbnail=330x330',
          desc: '双层子母被，四季皆可使用',
          name: '双宫茧桑蚕丝被 子母被',
          price: 1399
        },
      ]
    }]
  }
  res.json(data)
})
router.post('/detail', function(req, res){
  
  let id = req.param('id')
  console.log(id);
  let data = [
    {
      id:0,
      price: 169,
      detailPic: [
        'http://yanxuan.nosdn.127.net/46065172b85d4bbeb649bfa4767964a6.jpg',
        'http://yanxuan.nosdn.127.net/be1c0672aa4f82de4179ff25c9728359.jpg',
        'http://yanxuan.nosdn.127.net/a0451cd98141887b78a48414d82f1a9a.jpg',
        'http://yanxuan.nosdn.127.net/9cdc625066ff4124e5b3dc2518529706.jpg',
        'http://yanxuan.nosdn.127.net/398686c2483deb75ca4afeee62250fc9.jpg'
      ],
      name: '纯棉水洗色织格夏凉被',
      simpleDesc: '100%棉填充，透气排汗，双面可用',
      choose: [
        '藏蓝+白150*200cm',
        '藏蓝+白180*200cm',
        '雾灰+白150*200cm',
        '雾灰+白180*200cm',
        '粉色+白150*200cm'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'http://yanxuan.nosdn.127.net/f2db93845610c57b9d2c6e6eba030752',
          name: '生****迹',
          content: '质量绝对保证，与图片一致，第一次在严选购物，非常满意，值得推荐入手',
          imgs: ['https://yanxuan.nosdn.127.net/7abed37a975486fc1d8130289df77438.jpg'],
          hechoose: '藏蓝+白150*200cm'
        },
        all: []
      },
      attr: [
        {
          left: '面料',
          right: '100%棉'
        },
        {
          left: '填充物',
          right: '100%棉'
        },
        {
          left: '执行标准',
          right: 'GB/T22796-2009'
        },
        {
          left: '规格',
          right: '150*200cm/180*200cm'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/1d99e2716d46f90dacf22b34382c7196.jpg',
      'http://yanxuan.nosdn.127.net/a4b8cf13ec978cbad240d5c2842351f4.jpg',
      'http://yanxuan.nosdn.127.net/685ae6f775df525b7da799bd67eb8bd7.jpg'
      ]
    },
    {
      id:1,
      price: 199,
      detailPic: [
        'http://yanxuan.nosdn.127.net/46065172b85d4bbeb649bfa4767964a6.jpg',
        'http://yanxuan.nosdn.127.net/be1c0672aa4f82de4179ff25c9728359.jpg',
        'http://yanxuan.nosdn.127.net/a0451cd98141887b78a48414d82f1a9a.jpg',
        'http://yanxuan.nosdn.127.net/9cdc625066ff4124e5b3dc2518529706.jpg',
        'http://yanxuan.nosdn.127.net/398686c2483deb75ca4afeee62250fc9.jpg'
      ],
      name: '纯棉水洗色织格夏凉被',
      simpleDesc: '100%棉填充，透气排汗，双面可用',
      choose: [
        '藏蓝+白150*200cm',
        '藏蓝+白180*200cm',
        '雾灰+白150*200cm',
        '雾灰+白180*200cm',
        '粉色+白150*200cm'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'http://yanxuan.nosdn.127.net/f2db93845610c57b9d2c6e6eba030752',
          name: '生****迹',
          content: '质量绝对保证，与图片一致，第一次在严选购物，非常满意，值得推荐入手',
          imgs: ['https://yanxuan.nosdn.127.net/7abed37a975486fc1d8130289df77438.jpg'],
          hechoose: '藏蓝+白150*200cm'
        },
        all: []
      },
      attr: [
        {
          left: '面料',
          right: '100%棉'
        },
        {
          left: '填充物',
          right: '100%棉'
        },
        {
          left: '执行标准',
          right: 'GB/T22796-2009'
        },
        {
          left: '规格',
          right: '150*200cm/180*200cm'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/1d99e2716d46f90dacf22b34382c7196.jpg',
      'http://yanxuan.nosdn.127.net/a4b8cf13ec978cbad240d5c2842351f4.jpg',
      'http://yanxuan.nosdn.127.net/685ae6f775df525b7da799bd67eb8bd7.jpg'
      ]
    },
     {
      id:2,
      price: 99,
      detailPic: [
        'http://yanxuan.nosdn.127.net/46065172b85d4bbeb649bfa4767964a6.jpg',
        'http://yanxuan.nosdn.127.net/be1c0672aa4f82de4179ff25c9728359.jpg',
        'http://yanxuan.nosdn.127.net/a0451cd98141887b78a48414d82f1a9a.jpg',
        'http://yanxuan.nosdn.127.net/9cdc625066ff4124e5b3dc2518529706.jpg',
        'http://yanxuan.nosdn.127.net/398686c2483deb75ca4afeee62250fc9.jpg'
      ],
      name: '纯棉水洗色织格夏凉被',
      simpleDesc: '100%棉填充，透气排汗，双面可用',
      choose: [
        '藏蓝+白150*200cm',
        '藏蓝+白180*200cm',
        '雾灰+白150*200cm',
        '雾灰+白180*200cm',
        '粉色+白150*200cm'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'http://yanxuan.nosdn.127.net/f2db93845610c57b9d2c6e6eba030752',
          name: '生****迹',
          content: '质量绝对保证，与图片一致，第一次在严选购物，非常满意，值得推荐入手',
          imgs: ['https://yanxuan.nosdn.127.net/7abed37a975486fc1d8130289df77438.jpg'],
          hechoose: '藏蓝+白150*200cm'
        },
        all: []
      },
      attr: [
        {
          left: '面料',
          right: '100%棉'
        },
        {
          left: '填充物',
          right: '100%棉'
        },
        {
          left: '执行标准',
          right: 'GB/T22796-2009'
        },
        {
          left: '规格',
          right: '150*200cm/180*200cm'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/1d99e2716d46f90dacf22b34382c7196.jpg',
      'http://yanxuan.nosdn.127.net/a4b8cf13ec978cbad240d5c2842351f4.jpg',
      'http://yanxuan.nosdn.127.net/685ae6f775df525b7da799bd67eb8bd7.jpg'
      ]
    },
    {
      id:3,
      price: 1399,
      detailPic: [
        'http://yanxuan.nosdn.127.net/46065172b85d4bbeb649bfa4767964a6.jpg',
        'http://yanxuan.nosdn.127.net/be1c0672aa4f82de4179ff25c9728359.jpg',
        'http://yanxuan.nosdn.127.net/a0451cd98141887b78a48414d82f1a9a.jpg',
        'http://yanxuan.nosdn.127.net/9cdc625066ff4124e5b3dc2518529706.jpg',
        'http://yanxuan.nosdn.127.net/398686c2483deb75ca4afeee62250fc9.jpg'
      ],
      name: '纯棉水洗色织格夏凉被',
      simpleDesc: '100%棉填充，透气排汗，双面可用',
      choose: [
        '藏蓝+白150*200cm',
        '藏蓝+白180*200cm',
        '雾灰+白150*200cm',
        '雾灰+白180*200cm',
        '粉色+白150*200cm'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'http://yanxuan.nosdn.127.net/f2db93845610c57b9d2c6e6eba030752',
          name: '生****迹',
          content: '质量绝对保证，与图片一致，第一次在严选购物，非常满意，值得推荐入手',
          imgs: ['https://yanxuan.nosdn.127.net/7abed37a975486fc1d8130289df77438.jpg'],
          hechoose: '藏蓝+白150*200cm'
        },
        all: []
      },
      attr: [
        {
          left: '面料',
          right: '100%棉'
        },
        {
          left: '填充物',
          right: '100%棉'
        },
        {
          left: '执行标准',
          right: 'GB/T22796-2009'
        },
        {
          left: '规格',
          right: '150*200cm/180*200cm'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/1d99e2716d46f90dacf22b34382c7196.jpg',
      'http://yanxuan.nosdn.127.net/a4b8cf13ec978cbad240d5c2842351f4.jpg',
      'http://yanxuan.nosdn.127.net/685ae6f775df525b7da799bd67eb8bd7.jpg'
      ]
    }
  ]
  res.json(data[id])
})

module.exports = router;
