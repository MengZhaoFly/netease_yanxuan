var router = require('express').Router();
router.get('/', function(req, res){
	let data = [
	{
		user: '严选推荐',
		avatar: 'http://yanxuan.nosdn.127.net/527781d1c0af190c461b9b059e8e5cf9.png?imageView&thumbnail=64y64',
		contentPic: 'https://yanxuan.nosdn.127.net/14963948186540321.jpg',
		seen: '10.4k',
		title: '经常断货的它们终于又上架了',
		subtitle: '拼手速买爆品的时刻到了！',
		price: 7.9
	},
	{
		user: '家具组：刘宝',
		avatar: 'https://yanxuan.nosdn.127.net/14963120471750183.png?imageView&thumbnail=64y64',
		contentPic: 'https://yanxuan.nosdn.127.net/14963120968520185.jpg',
		seen: '8.2k',
		title: '摆上这束花，让美好永不凋零',
		subtitle: '许多人想要用鲜花点缀生活，却因工作繁忙，花朵枯萎也来不及收拾替换。许多人，买种子...',
		price: null
	},
	{
		user: '丁磊',
		avatar: 'https://yanxuan.nosdn.127.net/14960311088611034.png?imageView&thumbnail=64y64',
		contentPic: 'https://yanxuan.nosdn.127.net/14960310309231032.jpg',
		seen: '10.6k',
		title: '这款毛巾的好，你们都知道',
		subtitle: '阿瓦提毛巾买12条送5提纸巾',
		price: 12
	},
	{
		user: '婴童组：娟子',
		avatar: 'https://yanxuan.nosdn.127.net/14958766530280928.png?imageView&thumbnail=64y64',
		contentPic: 'https://yanxuan.nosdn.127.net/14958766679960929.jpg',
		seen: '9.9k',
		title: '许他一个难忘的美好童年',
		subtitle: '严选母婴上线一周年了，这一年我们从0起步，到在线商品接近200件。我们想象中，想...',
		price: 79
	},{
		user: '居家组：朵朵',
		avatar: 'https://yanxuan.nosdn.127.net/14926748590030593.png?imageView&thumbnail=64y64',
		contentPic: 'https://yanxuan.nosdn.127.net/14926737925770587.jpg',
		seen: '29.1k',
		title: '治愈生活的满怀柔软',
		subtitle: '太鼓抱枕的上架历程，是从失踪开始的。由于表面的绒感，最初它被安排在秋冬季上架。某...',
		price: null
	}

	]
	res.json(data)
})
module.exports = router