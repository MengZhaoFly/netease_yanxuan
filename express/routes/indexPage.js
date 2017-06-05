var router = require('express').Router();
router.post('/detail', function(req, res){
  
  let id = req.param('id')
  console.log(id);
  let data = [
    {
      id:0,
      price: 228,
      detailPic: [
        'http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png',
        'http://yanxuan.nosdn.127.net/764f36be8148b31e16a609236a9cf1e4.jpg',
        'http://yanxuan.nosdn.127.net/9100d1de4596d61d45e2b5ba276784fb.jpg',
        'http://yanxuan.nosdn.127.net/b1a88b4ea3b742fb0329a275f0913dcb.jpg',
        'http://yanxuan.nosdn.127.net/f2e724c0d4d67ec4d97db764d98b5c90.jpg'
      ],
      name: '黑凤梨 20寸PC膜拉链登机箱',
      simpleDesc: '热卖9万只，网易人手1只',
      choose: [
        '伯爵黑',
        '钢琴白',
        '肉桂粉',
        '孔灵蓝',
        '波尔多红',
        '星河银',
        '霞光紫','湾岛蓝','摩乐棕','烟熏灰'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png',
          name: 'z****1',
          content: '到手后已经带着天南地北的跑了一个多月，质量没得说。这个价位能买到这个质量的箱子。我想说网易人数一个没有夸张。',
          imgs: ['https://yanxuan.nosdn.127.net/e4f0b219bcb199d7434ea38dd3b2c97a.jpg'],
          hechoose: '伯爵黑'
        },
        all: []
      },
      attr: [
        {
          left: '主材质',
          right: 'ABS+PC'
        },
        {
          left: '容积',
          right: '51L'
        },
        {
          left: '自重',
          right: '3.15KG'
        },
        {
          left: '退换政策',
          right: '一年保修，30天保退'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/7fad18e9dc189bd758bea9c54bfa4a7c.jpg',
      'http://yanxuan.nosdn.127.net/56df928b05ce6344c2089311cbb97e93.jpg',
      'http://yanxuan.nosdn.127.net/1ce0f63f8dcf9680269382f720a5d618.jpg',
      'http://yanxuan.nosdn.127.net/8072c393d20ce3e55015dacf4781051d.jpg',
      'http://yanxuan.nosdn.127.net/e950f55300cb62b6a8863f59f0b71481.jpg',
      'http://yanxuan.nosdn.127.net/22943367671953f6b417a0cc339a8ce4.jpg'
      ]
    },
        {
      id:1,
      price: 29.9,
      detailPic: [
        'http://yanxuan.nosdn.127.net/ddeae05ced2d2f281641bbe34f2c9112.png',
        'http://yanxuan.nosdn.127.net/4d68abbe3bbbe4125ba77b34ee960108.jpg',
        'http://yanxuan.nosdn.127.net/e120cdeddaab815e0bec51c886b5096d.jpg',
        'http://yanxuan.nosdn.127.net/5840eba95c1619f8e07f894e04c74baf.jpg',
        'http://yanxuan.nosdn.127.net/ddeae05ced2d2f281641bbe34f2c9112.png'
      ],
      name: '黑凤梨 素陌清风纯色家居拖鞋',
      simpleDesc: 'MUJI制造商，天然凉感',
      choose: [
        '女款粉色M码',
        '女款蓝色M码',
        '男款浅茶L码',
        '男款灰色L码',
        '男款浅茶XL码',
        '男款灰色XL码'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'http://yanxuan.nosdn.127.net/bb04e353c843fa3c3c53bad56abd1a6b',
          name: 'D****',
          content: '软绵绵的脚感穿着太舒服了，打算把家里的拖鞋都换成这款。磨砂包装袋可以回收再利用，留着出差装鞋子用，资源一点也不浪费。',
          imgs: ['https://yanxuan.nosdn.127.net/e4f0b219bcb199d7434ea38dd3b2c97a.jpg'],
          hechoose: '女款粉色M码'
        },
        all: []
      },
      attr: [
        {
          left: '颜色',
          right: '女款：粉色，蓝色;男款：浅茶，灰色'
        },
        {
          left: '尺码',
          right: '女款M码-265mm，37-38码；'
        },
        {
          left: '材质',
          right: '面料：黏胶+锦纶'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/10de7f00f6e9af1872a1b11b7f862cd0.jpg',
      'http://yanxuan.nosdn.127.net/684f37942daa925695e4dd41bcf287f9.jpg',
      'http://yanxuan.nosdn.127.net/7bd01637f834137c58a7740455e20c85.jpg',
      'http://yanxuan.nosdn.127.net/a9bf546c7b5e4c0bb8fc6aeea60c3b51.jpg',
      'http://yanxuan.nosdn.127.net/fd5535ec011c1267681539a676ce01e8.jpg',
      'http://yanxuan.nosdn.127.net/c092851fef228857f43aa136662f639a.jpg'
      ]
    },
    {
      id:3,
      price: 29.9,
      detailPic: [
        'http://yanxuan.nosdn.127.net/bbe98022860e3f30a671434ccb3dd39c.png',
        'http://yanxuan.nosdn.127.net/a7bc40966cb81fe1733b7c05418c2225.jpg',
        'http://yanxuan.nosdn.127.net/d653882a6a50d35430fc92a74f3fbc0e.jpg',
        'http://yanxuan.nosdn.127.net/c05a4237b41c6250f4052f84c2337eaf.jpg',
        'http://yanxuan.nosdn.127.net/7ecdb22fa4777b64e08172404d2b3b32.jpg'
      ],
      name: '不锈钢汤锅24cm',
      simpleDesc: '大师优选，原汁原味',
      choose: [
        '24cm/有盖/直火电磁炉通用',
        '+1元，换购 99元 不锈钢汤勺'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'https://yanxuan.nosdn.127.net/74760153a3fd10a1a70ac2c73353e9e7.jpg',
          name: 'D****',
          content: '一款高质量的汤锅。包装好，材质好，锅里有刻度，煲汤不用愁。“好货不便宜”，说的就是这个理吧。',
          imgs: ['https://yanxuan.nosdn.127.net/a40eaa2e99bdfeabc5ffeda87e3696a0.jpg'],
          hechoose: '+1元，换购 99元 不锈钢汤勺'
        },
        all: []
      },
      attr: [
        {
          left: '品名',
          right: '不锈钢汤锅'
        },
        {
          left: '材料',
          right: '18/10 不锈钢'
        },
        {
          left: '产品规格',
          right: '直径24*高15cm'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/fdf0bda150bb5c03a2dd8a80321d378e.jpg',
      'http://yanxuan.nosdn.127.net/ed19c397d5a5d4332a1edb886087128c.jpg',
      'http://yanxuan.nosdn.127.net/a96b5fc3f2e2cd4291116fb334688703.jpg',
      'http://yanxuan.nosdn.127.net/2bc562a1e22d2ed879a5f670619d18ac.jpg',
      'http://yanxuan.nosdn.127.net/a0f5a77fd4760e4fc31af337cfb2a4b1.jpg',
      'http://yanxuan.nosdn.127.net/9cbd058fa21a5bf4bb1a032d5442271c.jpg',
      'http://yanxuan.nosdn.127.net/34536981c90ccea4483be4de0ed09446.jpg'
      ]
    },
   ]
   res.json(data[id])
})
module.exports = router