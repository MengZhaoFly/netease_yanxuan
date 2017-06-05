var router = require('express').Router();
router.get('/', function(req, res){
  let data = {
    type: 'cook',
    adpic: 'http://yanxuan.nosdn.127.net/fab2b4ac13ae74aa29c045828b4ca11c.jpg?quality=85&thumbnail=750x0&imageView',
    data: [{
      title: '锅具',
      subtitle: '一口好锅，炖煮生活一日三餐',
      lists: [
        {
          id: 0,
          type: 'cook',
          src: 'http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png?imageView&quality=85&thumbnail=330x330',
          desc: '特质铸铁，锁热节能',
          name: '100年传世珐琅锅',
          price: 268
        },
        {
          id: 1,
          type: 'cook',
          src: 'http://yanxuan.nosdn.127.net/55ab2216ea3963d1d12586dba4f872bf.png?imageView&quality=85&thumbnail=330x330',
          desc: '均匀导热，释放美味',
          name: '黑凤梨 100年传世珐琅锅 马卡龙系列',
          price: 359
        },
      ]
    },
    {
      title: '功能厨具',
      subtitle: '下厨省力小帮手',
      lists: [
        {
          id: 2,
          type: 'cook',
          src: 'http://yanxuan.nosdn.127.net/b05fc86ab1f713fee07d6b448070c9fc.png?imageView&quality=85&thumbnail=330x330',
          desc: '隔热不变形，适用涂层锅',
          name: '黑凤梨 不粘台面硅胶厨具5件套',
          price: 129
        },
        {
          id: 3,
          type: 'cook',
          src: 'http://yanxuan.nosdn.127.net/9aeee8f781ad08c299c96d9d6cf85cfa.png?imageView&quality=85&thumbnail=330x330',
          desc: '不粘易洗，轻松折叠易收纳',
          name: '二合一硅胶漏篮',
          price: 280
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
      price: 268,
      detailPic: [
        'http://yanxuan.nosdn.127.net/4559299068a6fff007d668c3c36a3d68.jpg',
        'http://yanxuan.nosdn.127.net/d7bee71204a1a5ba1d67b0a902c4d3bc.jpg',
        'http://yanxuan.nosdn.127.net/c6fa2613c115154eb71a42b3fad58764.jpg',
        'http://yanxuan.nosdn.127.net/5ad31bf5cfe4861ab402f2dd3d0cfbca.jpg',
        'http://yanxuan.nosdn.127.net/ca83aec0ab067a1d75749a3db6cc7e6c.jpg'
      ],
      name: '100年传世珐琅锅',
      simpleDesc: '特质铸铁，锁热节能',
      choose: [
        '胭脂红/有盖/直火电磁炉通用',
        '豆咖棕/有盖/直火电磁炉通用',
        '琉璃蓝/有盖/直火电磁炉通用',
        '森林绿/有盖/直火电磁炉通用'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'https://yanxuan.nosdn.127.net/194533651b59b24314e0b44c4d74bf29',
          name: '生****迹',
          content: '258买到这个质量的汤锅真是天上掉馅饼，还送个超萌的迷你小锅，煮东西开锅很快，节能又美味，爱不释手',
          imgs: ['https://yanxuan.nosdn.127.net/e4f0b219bcb199d7434ea38dd3b2c97a.jpg'],
          hechoose: '森林绿/有盖/直火电磁炉通用'
        },
        all: []
      },
      attr: [
        {
          left: '材质',
          right: '铸铁、马加力克珐琅'
        },
        {
          left: '尺寸',
          right: '直径：22cm 高度：10.6cm'
        },
        {
          left: '重量',
          right: '3.85kg'
        },
        {
          left: '容量',
          right: '2.5L，约等于 5瓶 500ml矿泉水的容量；适合2-3人使用'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/4012c8c85fdc4602ad32de97ca193792.jpg',
      'http://yanxuan.nosdn.127.net/8ff8b0c051f7a70d2eff687748f34484.jpg',
      'http://yanxuan.nosdn.127.net/1ef7cd6e66aa3cbe558eb88f14263d2b.jpg'
      ]
    },
    {
      id:1,
      price: 359,
      detailPic: [
        'http://yanxuan.nosdn.127.net/4559299068a6fff007d668c3c36a3d68.jpg',
        'http://yanxuan.nosdn.127.net/d7bee71204a1a5ba1d67b0a902c4d3bc.jpg',
        'http://yanxuan.nosdn.127.net/c6fa2613c115154eb71a42b3fad58764.jpg',
        'http://yanxuan.nosdn.127.net/5ad31bf5cfe4861ab402f2dd3d0cfbca.jpg',
        'http://yanxuan.nosdn.127.net/ca83aec0ab067a1d75749a3db6cc7e6c.jpg'
      ],
      name: '100年传世珐琅锅',
      simpleDesc: '特质铸铁，锁热节能',
      choose: [
        '胭脂红/有盖/直火电磁炉通用',
        '豆咖棕/有盖/直火电磁炉通用',
        '琉璃蓝/有盖/直火电磁炉通用',
        '森林绿/有盖/直火电磁炉通用'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'https://yanxuan.nosdn.127.net/194533651b59b24314e0b44c4d74bf29',
          name: '生****迹',
          content: '258买到这个质量的汤锅真是天上掉馅饼，还送个超萌的迷你小锅，煮东西开锅很快，节能又美味，爱不释手',
          imgs: ['https://yanxuan.nosdn.127.net/e4f0b219bcb199d7434ea38dd3b2c97a.jpg'],
          hechoose: '森林绿/有盖/直火电磁炉通用'
        },
        all: []
      },
      attr: [
        {
          left: '材质',
          right: '铸铁、马加力克珐琅'
        },
        {
          left: '尺寸',
          right: '直径：22cm 高度：10.6cm'
        },
        {
          left: '重量',
          right: '3.85kg'
        },
        {
          left: '容量',
          right: '2.5L，约等于 5瓶 500ml矿泉水的容量；适合2-3人使用'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/4012c8c85fdc4602ad32de97ca193792.jpg',
      'http://yanxuan.nosdn.127.net/8ff8b0c051f7a70d2eff687748f34484.jpg',
      'http://yanxuan.nosdn.127.net/1ef7cd6e66aa3cbe558eb88f14263d2b.jpg'
      ]
    },
     {
      id:2,
      price: 129,
      detailPic: [
        'http://yanxuan.nosdn.127.net/4559299068a6fff007d668c3c36a3d68.jpg',
        'http://yanxuan.nosdn.127.net/d7bee71204a1a5ba1d67b0a902c4d3bc.jpg',
        'http://yanxuan.nosdn.127.net/c6fa2613c115154eb71a42b3fad58764.jpg',
        'http://yanxuan.nosdn.127.net/5ad31bf5cfe4861ab402f2dd3d0cfbca.jpg',
        'http://yanxuan.nosdn.127.net/ca83aec0ab067a1d75749a3db6cc7e6c.jpg'
      ],
      name: '100年传世珐琅锅',
      simpleDesc: '特质铸铁，锁热节能',
      choose: [
        '胭脂红/有盖/直火电磁炉通用',
        '豆咖棕/有盖/直火电磁炉通用',
        '琉璃蓝/有盖/直火电磁炉通用',
        '森林绿/有盖/直火电磁炉通用'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'https://yanxuan.nosdn.127.net/194533651b59b24314e0b44c4d74bf29',
          name: '生****迹',
          content: '258买到这个质量的汤锅真是天上掉馅饼，还送个超萌的迷你小锅，煮东西开锅很快，节能又美味，爱不释手',
          imgs: ['https://yanxuan.nosdn.127.net/e4f0b219bcb199d7434ea38dd3b2c97a.jpg'],
          hechoose: '森林绿/有盖/直火电磁炉通用'
        },
        all: []
      },
      attr: [
        {
          left: '材质',
          right: '铸铁、马加力克珐琅'
        },
        {
          left: '尺寸',
          right: '直径：22cm 高度：10.6cm'
        },
        {
          left: '重量',
          right: '3.85kg'
        },
        {
          left: '容量',
          right: '2.5L，约等于 5瓶 500ml矿泉水的容量；适合2-3人使用'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/4012c8c85fdc4602ad32de97ca193792.jpg',
      'http://yanxuan.nosdn.127.net/8ff8b0c051f7a70d2eff687748f34484.jpg',
      'http://yanxuan.nosdn.127.net/1ef7cd6e66aa3cbe558eb88f14263d2b.jpg'
      ]
    },
     {
      id:3,
      price: 280,
      detailPic: [
        'http://yanxuan.nosdn.127.net/4559299068a6fff007d668c3c36a3d68.jpg',
        'http://yanxuan.nosdn.127.net/d7bee71204a1a5ba1d67b0a902c4d3bc.jpg',
        'http://yanxuan.nosdn.127.net/c6fa2613c115154eb71a42b3fad58764.jpg',
        'http://yanxuan.nosdn.127.net/5ad31bf5cfe4861ab402f2dd3d0cfbca.jpg',
        'http://yanxuan.nosdn.127.net/ca83aec0ab067a1d75749a3db6cc7e6c.jpg'
      ],
      name: '100年传世珐琅锅',
      simpleDesc: '特质铸铁，锁热节能',
      choose: [
        '胭脂红/有盖/直火电磁炉通用',
        '豆咖棕/有盖/直火电磁炉通用',
        '琉璃蓝/有盖/直火电磁炉通用',
        '森林绿/有盖/直火电磁炉通用'
      ],
      comment: {
        first: {
          id:0,
          avatar: 'https://yanxuan.nosdn.127.net/194533651b59b24314e0b44c4d74bf29',
          name: '生****迹',
          content: '258买到这个质量的汤锅真是天上掉馅饼，还送个超萌的迷你小锅，煮东西开锅很快，节能又美味，爱不释手',
          imgs: ['https://yanxuan.nosdn.127.net/e4f0b219bcb199d7434ea38dd3b2c97a.jpg'],
          hechoose: '森林绿/有盖/直火电磁炉通用'
        },
        all: []
      },
      attr: [
        {
          left: '材质',
          right: '铸铁、马加力克珐琅'
        },
        {
          left: '尺寸',
          right: '直径：22cm 高度：10.6cm'
        },
        {
          left: '重量',
          right: '3.85kg'
        },
        {
          left: '容量',
          right: '2.5L，约等于 5瓶 500ml矿泉水的容量；适合2-3人使用'
        }
      ],
      detailHtml: [
      'http://yanxuan.nosdn.127.net/4012c8c85fdc4602ad32de97ca193792.jpg',
      'http://yanxuan.nosdn.127.net/8ff8b0c051f7a70d2eff687748f34484.jpg',
      'http://yanxuan.nosdn.127.net/1ef7cd6e66aa3cbe558eb88f14263d2b.jpg'
      ]
    }
  ]
  res.json(data[id])
})

module.exports = router;