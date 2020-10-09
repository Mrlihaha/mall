  // 首页轮播
	let swipers = [{
		"img":"https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",
		"tourl":"https://ku.m.taobao.com/bus?refpid=ecpm&ali_trackid=19_35fe9fc109aead5c0b6126ba43fe2a80"
	},{
		"img":"https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",
		"tourl":"https://ku.m.taobao.com/bus?refpid=ecpm&ali_trackid=19_b0a97456cf14aa51d37a6fdfd30bc51a"
	},{
		"img":"//gw.alicdn.com/imgextra/i4/9/O1CN01sMBIwV1BwAC1RwE5A_!!9-0-lubanu.jpg",
		"tourl":"https://pages.tmall.com/wow/a/act/ju/tmc/28457/3449/wupr?spm=a215s.7406091.home.7&utparam=%7B%22x_indid%22%3A%22141251%22%2C%22x_scm%22%3A%221007.12948.181616.100200300000000%22%2C%22x_userid%22%3A%220%22%2C%22x_itemid%22%3A%22604943762301%22%2C%22x_pvid%22%3A%222162b88e-aa28-4ff9-83ee-8e5139979310%22%2C%22x_activityid%22%3A%22380566%22%2C%22tpp_buckets%22%3A%222948%233410%2315371%2332_2948%230%23181616%2338%22%7D&wh_pid=industry-216658&disableNav=YES&status_bar_transparent=true&scm=20140664.1007_12948_181616_100200300000000_849_7_380566_141251.141251.271981&itemIds=604943762301&activityId=380566&item_id=604943762301&activity_id=380566"
	},{
		"img":"//gw.alicdn.com/imgextra/i1/59/O1CN01Y1cOGC1CJ3zZmhLZu_!!59-0-lubanu.jpg",
		"tourl":"https://huodong.taobao.com/wow/a/act/tao/dailyact/2816/wupr?spm=a2141.1.banner.8&utparam=%7B%22x_indid%22%3A%22139648%22%2C%22x_scm%22%3A%221007.12948.181616.100200300000000%22%2C%22x_userid%22%3A%220%22%2C%22x_itemid%22%3A%22612590382313%22%2C%22x_pvid%22%3A%222162b88e-aa28-4ff9-83ee-8e5139979310%22%2C%22x_activityid%22%3A%22379051%22%2C%22tpp_buckets%22%3A%222948%233410%2315371%2332_2948%230%23181616%2338%22%7D&wh_pid=dailyAct-217620&scm=20140664.1007_12948_181616_100200300000000_849_8_379051_139648.139648.270139&itemIds=612590382313&activityId=379051&item_id=612590382313&activity_id=379051"
	}];
	// 首页导航
	let navs = [{
					"style":"iconfont icon-ziyuan",
					"text":"商品超市",
					"path":"/pages/product/product"
				},
				{
					"style":"iconfont icon-guanyuwomen",
					"text":"联系我们",
					"path":"/pages/contact/contact"
				},
				{
					"style":"iconfont icon-tupian",
					"text":"社区风光",
					"path":"/pages/community/community"
				},{
					"style":"iconfont icon-shipin",
					"text":"商品视频",
					"path":"4"
				}]
			// 商品	
		let hots = [{
			"image":"//gw.alicdn.com/bao/uploaded/i4/880453729/TB22GichY8kpuFjy0FcXXaUhpXa_!!880453729.jpg_500x500q90.jpg_.webp",
			"price":{
				"one":"￥259",
				"two":"￥299"
			},
			"huohao":"15-dx0132x",
			"kucun":"200",
			"text":"帽子女夏天遮阳帽草帽女夏小清新韩版百搭时尚潮流文艺礼帽太阳帽",
			"imgs":["//img.alicdn.com/imgextra/i4/880453729/TB22GichY8kpuFjy0FcXXaUhpXa_!!880453729.jpg_640x640q80_.webp","//img.alicdn.com/imgextra/i6/TB1mAK2QXXXXXXHXXXXYXGcGpXX_M2.SS2_640x640q80_.webp","//img.alicdn.com/imgextra/i2/880453729/TB29q8QjOpnpuFjSZFIXXXh2VXa_!!880453729.jpg_640x640q80_.webp","//img.alicdn.com/imgextra/i1/880453729/TB2E1ctdxRDOuFjSZFzXXcIipXa_!!880453729.jpg_640x640q80_.webp","//img.alicdn.com/imgextra/i4/880453729/TB2OKkDencCL1FjSZFPXXXZgpXa_!!880453729.jpg_640x640q80_.webp"],
				imgDetails:["//img.alicdn.com/imgextra/i4/880453729/TB2VxxkdVooBKNjSZFPXXXa2XXa_!!880453729.jpg_640x0q80_.webp","//img.alicdn.com/imgextra/i3/880453729/TB2.M3mnk9WBuNjSspeXXaz5VXa_!!880453729.jpg_640x0q80_.webp","//img.alicdn.com/imgextra/i4/880453729/TB2mJL6ngaTBuNjSszfXXXgfpXa_!!880453729.jpg_640x0q80_.webp","//img.alicdn.com/imgextra/i1/880453729/TB2VeE.nb9YBuNjy0FgXXcxcXXa_!!880453729.jpg_640x0q80_.webp"]
		},
		{
			"image":"//gw.alicdn.com/bao/uploaded/i3/252753322/O1CN01bhZPYv1aPWJFfODvF_!!252753322.jpg_500x500q90.jpg_.webp",
			"price":{
				"one":"￥259",
				"two":"￥299"
			},
			"text":"新款女生夏天防晒手套勾指款里料纯棉外层 蕾丝开骑车户外运动"
		},
		{
			"image":"//gw.alicdn.com/bao/uploaded/i3/252753322/O1CN01bhZPYv1aPWJFfODvF_!!252753322.jpg_500x500q90.jpg_.webp",
			"price":{
				"one":"￥259",
				"two":"￥299"
			},
			"text":"新款女生夏天防晒手套勾指款里料纯棉外层 蕾丝开骑车户外运动"
		},
		{
			"image":"//gw.alicdn.com/bao/uploaded/i3/252753322/O1CN01bhZPYv1aPWJFfODvF_!!252753322.jpg_500x500q90.jpg_.webp",
			"price":{
				"one":"￥259",
				"two":"￥299"
			},
			"text":"新款女生夏天防晒手套勾指款里料纯棉外层 蕾丝开骑车户外运动"
		},
		{
			"image":"//gw.alicdn.com/bao/uploaded/i3/252753322/O1CN01bhZPYv1aPWJFfODvF_!!252753322.jpg_500x500q90.jpg_.webp",
			"price":{
				"one":"￥259",
				"two":"￥299"
			},
			"text":"新款女生夏天防晒手套勾指款里料纯棉外层 蕾丝开骑车户外运动"
		},
		{
			"image":"//gw.alicdn.com/bao/uploaded/i3/252753322/O1CN01bhZPYv1aPWJFfODvF_!!252753322.jpg_500x500q90.jpg_.webp",
			"price":{
				"one":"￥259",
				"two":"￥299"
			},
			"text":"新款女生夏天防晒手套勾指款里料纯棉外层 蕾丝开骑车户外运动"
		}]
		
		// 社区数据
		const communityLeft = ["家居生活","摄影设计","明星美女","空间设计","户型装饰","广告摄影","摄影学习","摄影器材","明星写真","清纯甜美","美丽动人"]
		
		const communityRight = [[
			{
				"img":"//gw.alicdn.com/bao/uploaded/i1/2348254971/TB1zV6WSFXXXXbpXpXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",
			  "text":"日本进口厨房盘子架 餐具收纳架 塑料置物架 餐盘碟子小碗存放架"
			},
			{
				"img":"//gw.alicdn.com/bao/uploaded/i1/2348254971/TB1zV6WSFXXXXbpXpXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",
			  "text":"日本进口厨房盘子架 餐具收纳架 塑料置物架 餐盘碟子小碗存放架"
			}],
		[
			{
				"img":"//gw.alicdn.com/bao/uploaded/i1/2810086057/TB2mXqrXgUc61BjSZFvXXXKfVXa_!!2810086057.jpg_500x500q90.jpg_.webp",
			  "text":"韩国出游沙滩大檐草帽韩版夏天海边可折叠遮阳帽子女士防晒太阳帽"
			},
			{
				"img":"//gw.alicdn.com/bao/uploaded/i1/2810086057/TB2mXqrXgUc61BjSZFvXXXKfVXa_!!2810086057.jpg_500x500q90.jpg_.webp",
			  "text":"韩国出游沙滩大檐草帽韩版夏天海边可折叠遮阳帽子女士防晒太阳帽"
			}
		],
		[
			{
				"img":"//gw.alicdn.com/bao/uploaded/i1/2908675478/O1CN01VJBR2X1qKy8MRvLmC_!!0-item_pic.jpg_500x500q90.jpg_.webp",
			  "text":"新款围巾女秋冬季韩版百搭学生英伦经典千鸟格少女士复古围脖男潮"
			},
			{
				"img":"//gw.alicdn.com/bao/uploaded/i1/2908675478/O1CN01VJBR2X1qKy8MRvLmC_!!0-item_pic.jpg_500x500q90.jpg_.webp",
			  "text":"新款围巾女秋冬季韩版百搭学生英伦经典千鸟格少女士复古围脖男潮"
			}
		]]
		// 资讯页面数据
		const news = [{
			"img":"//gw.alicdn.com/bao/uploaded/i4/45271917/O1CN01zln2id1Q21smEjxKZ_!!0-item_pic.jpg_500x500q90.jpg_.webp",
			"text":"韩式田园唯美蕾丝 内侧花边美式北欧客厅卧室成品窗帘窗纱定制",
			"time":"2019-10-2",
			"num":"2020"
		},
		{
			"img":"//gw.alicdn.com/bao/uploaded/i2/13212330/TB2Wep0aV15V1Bjy1XaXXaPqVXa_!!13212330.jpg_500x500q90.jpg_.webp",
			"text":"机器猫哆啦A梦叮当猫KT卡通创意时尚纸抽盒纸巾盒收纳盒 纸巾抽",
			"time":"2020-11-2",
			"num":"1589"
		},
		{
			"img":"//gw.alicdn.com/bao/uploaded/i4/371849442/TB2QhSZlilnpuFjSZFgXXbi7FXa_!!371849442.jpg_500x500q90.jpg_.webp",
			"text":"陶瓷下午茶零食碟子分格碟水果碟糖果碟蘸料醋碟干果点心碟小菜盘",
			"time":"2020-10-02",
			"num":"1574"
		},
		{
			"img":"//gw.alicdn.com/bao/uploaded/i1/75364548/TB2NIDrXcSfF1JjSspbXXcSkVXa_!!75364548.jpg_500x500q90.jpg_.webp",
			"text":"6-8-10寸平底不粘锅千层饼煎锅班戟六八十蛋糕皮专用小煎蛋手抓饼",
			"time":"2020-9-10",
			"num":"1545"
		},
		{
			"img":"//gw.alicdn.com/bao/uploaded/i2/858389760/TB2.bU5alfH8KJjy1XbXXbLdXXa_!!858389760.jpg_500x500q90.jpg_.webp",
			"text":"包邮日本野田白珐琅搪瓷烘焙黄油巧克力加热锅小奶锅",
			"time":"2020-9-10",
			"num":"1542"
		}]
		
		
		const appData = {
			swipers,
			navs,
			hots,
			communityLeft,
			communityRight,
			news
			
		}
				export default appData