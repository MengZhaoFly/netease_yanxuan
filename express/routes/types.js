
var router = require('express').Router();
router.get('/', function(req, res){
  let data = {
    recommend:{
      ad:'http://yanxuan.nosdn.127.net/9a5dcf019f21754ffec58a11f0684b69.jpg',
      name:'推荐',
      contents:[
        {name:'丁磊推荐',url:'http://yanxuan.nosdn.127.net/fbee769af73c0f63f6120eb27ff3ce96.png?imageView&quality=85&thumbnail=144x144'},
        {name:'送给他',url:'http://yanxuan.nosdn.127.net/4d765e20e019374e6f452edd58b226d6.png?imageView&quality=85&thumbnail=144x144'},
        {name:'送朋友',url:'http://yanxuan.nosdn.127.net/cf4a950f63be398f7de4574baf1e7343.png?imageView&quality=85&thumbnail=144x144'},
        {name:'黑凤梨系列',url:'http://yanxuan.nosdn.127.net/a4a14669ce1fa497aece9a20c669196e.png?imageView&quality=85&thumbnail=144x144'},
        {name:'送爸妈',url:'http://yanxuan.nosdn.127.net/0108081c97f92958578d3755a18959ca.png?imageView&quality=85&thumbnail=144x144'}
      ]
    },
    home:{
      ad:'http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png',
      name:'居家',
      contents: [
      {name:'夏凉', url:'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144'},
      {name:'被枕', url:'http://yanxuan.nosdn.127.net/b43ef7cececebe6292d2f7f590522e05.png?imageView&quality=85&thumbnail=144x144'},
      {name:'家具', url:'http://yanxuan.nosdn.127.net/d5d41841136182bf49c1f99f5c452dd6.png?imageView&quality=85&thumbnail=144x144'},
      {name:'宠物', url:'http://yanxuan.nosdn.127.net/dae4d6e89ab8a0cd3e8da026e4660137.png?imageView&quality=85&thumbnail=144x144'},
      {name:'布艺软装', url:'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png?imageView&quality=85&thumbnail=144x144'}
      ]
    },
    cook:{
      ad:'http://yanxuan.nosdn.127.net/3708dbcb35ad5abf9e001500f73db615.png',
      name:'餐厨',
      contents: [
      {name:'锅具', url:'http://yanxuan.nosdn.127.net/d2db0d1d0622c621a8aa5a7c06b0fc6d.png?imageView&quality=85&thumbnail=144x144'},
      {name:'功能厨具', url:'http://yanxuan.nosdn.127.net/ec53828a3814171079178a59fb2593da.png?imageView&quality=85&thumbnail=144x144'},
      {name:'餐具', url:'http://yanxuan.nosdn.127.net/6cda9a58b4dbff1c3b755fcb15a23061.png?imageView&quality=85&thumbnail=144x144'},
      {name:'刀剪砧板', url:'http://yanxuan.nosdn.127.net/04cd632e1589adcc4345e40e8ad75d2b.png?imageView&quality=85&thumbnail=144x144'},
      {name:'厨房小电', url:'http://yanxuan.nosdn.127.net/be3ba4056e274e311d1c23bd2931018d.png?imageView&quality=85&thumbnail=144x144'}
      ]
    },
    parts:{
      ad:'http://yanxuan.nosdn.127.net/02f9a44d05c05c0dd439a5eb674570a2.png',
      name:'配件',
      contents: [
      {name:'行李箱', url:'http://yanxuan.nosdn.127.net/2a3fde179c740b102d747ca2543d18ad.png?imageView&quality=85&thumbnail=144x144'},
      {name:'功能箱包', url:'http://yanxuan.nosdn.127.net/49229c2404b93abc177363bafb14a31b.png?imageView&quality=85&thumbnail=144x144'},
      {name:'双肩包', url:'http://yanxuan.nosdn.127.net/90b98fb1912b1ce2665a6084c5a735fc.png?imageView&quality=85&thumbnail=144x144'},
      {name:'拖鞋', url:'http://yanxuan.nosdn.127.net/f0305a1d6f64f8b8bc487206138c9a02.png?imageView&quality=85&thumbnail=144x144'},
      {name:'鞋', url:'http://yanxuan.nosdn.127.net/22fc93cc1cff31f2e5462433fd0e69c8.png?imageView&quality=85&thumbnail=144x144'}
      ]
    },
    cloth:{
      ad:'http://yanxuan.nosdn.127.net/622c8d79292154017b0cbda97588a0d7.png',
      name:'服装',
      contents: [
      {name:'卫衣', url:'http://yanxuan.nosdn.127.net/0282a81bbcae6c39918808fe7c4e1b93.png?imageView&quality=85&thumbnail=144x144'},
      {name:'衬衫', url:'http://yanxuan.nosdn.127.net/7927f8422c341f7353041a30d01045a2.png?imageView&quality=85&thumbnail=144x144'},
      {name:'T恤', url:'http://yanxuan.nosdn.127.net/505c9a5a794b79e85fef4654722b3447.png?imageView&quality=85&thumbnail=144x144'},
      {name:'家居服', url:'http://yanxuan.nosdn.127.net/5da102ea4c64081ce3a05a91c855fbc9.png?imageView&quality=85&thumbnail=144x144'},
      {name:'毛衣', url:'http://yanxuan.nosdn.127.net/b610b058cfd73a9211dc890b7b0cbc66.png?imageView&quality=85&thumbnail=144x144'}
      ]
    }

  }
  res.json(data)
})
module.exports = router;