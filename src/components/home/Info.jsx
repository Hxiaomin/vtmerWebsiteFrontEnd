import { Link } from 'react-router';
import "./Info.less";

export default class Info extends React.Component{
	constructor(props) {
	    super(props);

	    this.declarations = [
	    	{title1: '优雅的交互设计',title2: '我们以严谨的态度，追求极致的体验，让产品更加简洁而优雅，让用户的操作自然顺畅拉近用户距离', url: 'images/home/list01.jpg',alt:'1'},
	    	{title1: '优雅的交互设计',title2: '我们以严谨的态度，追求极致的体验，让产品更加简洁而优雅，让用户的操作自然顺畅拉近用户距离', url: 'images/home/list02.jpg',alt:'2'},
	    	{title1: '优雅的交互设计',title2: '我们以严谨的态度，追求极致的体验，让产品更加简洁而优雅，让用户的操作自然顺畅拉近用户距离', url: 'images/home/list03.jpg',alt:'3'},
	    ];
	    this.homeBlog=[ 
	    	{title:'用户体验之网页设计规范',time:'2014/02/10 10:20',image:'images/home/blog01.jpg',content:'回想你上次在餐馆用餐的情形。那里提供了什么菜肴？是什么促使你选择那家餐馆？',url:''},
	    	{title:'用户体验之网页设计规范',time:'2014/02/10 10:20',image:'images/home/blog02.jpg',content:'回想你上次在餐馆用餐的情形。那里提供了什么菜肴？是什么促使你选择那家餐馆？第一印象如何？有没有等位？菜单是如何安排的？上菜够快吗……那里提供了什么菜肴？是什么促使你选择那家餐馆？',url:''},
	    	{title:'用户体验之网页设计规范',time:'2014/02/10 10:20',image:'images/home/blog03.jpg',content:'回想你上次在餐馆用餐的情形。',url:''},
	    ];
	    this.homeProducts=[
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-1.jpg'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-2.jpg'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-3.jpg'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-4.jpg'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-5.jpg'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-1.jpg'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-4.jpg'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-5.jpg'},
	    ];
  	}
  	componentWillMount(){
  		
  	}
  	picturePlayer(){ 
  		var picList = $('.list');
		var mark = $('.click_mark');
		var oBtnLeft = document.getElementById('btn_left');
		var oBtnRight = document.getElementById('btn_right');
		var iThis = 1;		//当前图片索引值
		var next = 0;		//当前图片的下一张，用于循环计数
		var zIndex = 5;		//层级
		var timer = null; //定时器

		function resetAttr() {	//没每个list都保存其width, height, left, top, opacity属性，动画完成时重新载入属性值
			for(var i = 0; i<picList.length; i++) {
				picList[i].width = picList[i].offsetWidth;
				picList[i].height = picList[i].offsetHeight;
				picList[i].left = picList[i].offsetLeft;
				picList[i].top = picList[i].offsetTop;
				picList[i].opacity = $(picList[i].getElementsByTagName('div')[0]).css('opacity');
			}
			oBtnLeft.onclick = function() {run("right")};
			oBtnRight.onclick = function() {run("left")};
			mark[0].onclick = function() {run("right")};
			mark[1].onclick = function() {run("left")};
		}

		resetAttr();
		function run(direction) {	//传入方向参数：left/right
			mark[0].onclick = mark[1].onclick = oBtnLeft.onclick = oBtnRight.onclick = null;	//	当动画正在进行时取消button的click事件
			iThis = (direction == "left")?((iThis == 2)?0:iThis+1):((iThis == 0)?2:iThis-1);
			picList[iThis].style.zIndex = zIndex;
			mark[0].style.zIndex = mark[1].style.zIndex = zIndex;
			for(var i = 0; i<picList.length; i++) {
				next = (direction == "left")?((i == 0)?2:i-1):((i == 2)?0:i+1);
				$(picList[i].getElementsByTagName('div')[0]).animate({opacity:picList[next].opacity}, 400)
				$(picList[i]).animate({ top: picList[next].top,
										left: picList[next].left,
										width: picList[next].width,
										height: picList[next].height}, 400, resetAttr);
			}
			zIndex++;
		}
		timer = setInterval(function(){run("left")}, 2000);
		document.getElementById('player').onmouseover = function() {
			clearInterval(timer);
		}
		document.getElementById('player').onmouseout = function() {
			timer = setInterval(function(){run("left")}, 2000);
		}
  	}
  	componentDidMount(){
  		window.onscroll =  function(){
  			
	    	
	    }
	    this.picturePlayer();
	    
  	}
	render(){
		let declarations = this.declarations.map((item, i)=>{
			return(
				<div className="list">
					<img src={item.url} alt={item.alt}/>
					<div>
						<h3>{item.title1}</h3>
						<p>{item.title2}</p>
					</div>
				</div>
			)
		})
		let homeBlog = this.homeBlog.map((item, i)=>{
			return(
				<div className="blog">
					<div className="blog_title">
						<h5 title={item.title}>{item.title}</h5>
						<span className="time">{item.time}</span>
					</div>
					<div className="blog_img">
						<img src={item.image}/>
						<div className="light"></div>
					</div>
					<div className="blog_txt">
					{item.content}
					</div>
					<button className="blog_detail">详情</button>
				</div>
			)
		})
		let homeProducts = this.homeProducts.map((item, i)=>{
			var image='url('+item.imageUrl+')';
			var divStyle = {
			  backgroundImage: image,
			};
			return(
				<li>
					<div style={divStyle}>
						<div className="mark"><span>{item.title1}</span><span>{item.title2}</span></div>
					</div>
				</li>
			)
		})
		return (
			<main role="main">
				<section id="about_us" className="modular">
					<div className="home-title"><span>关于我们</span></div>
					<div className="home-introduction">
						<p>执着 / 追求 / 完美 / 创造</p>
						<p>维生数工作室(Vtmer Studio)，一个学生科研团队，成立于2009年，现隶属于校团委学生新媒体中心，专注于广工大校园媒体和网络信息化建设</p>
					</div>
					<div id="player">
						{declarations}
						<div className="player_btn_tools">
							<button id="btn_left">&lt;</button>
							<button id="btn_right">&gt;</button>
						</div>
						<div>
							<div className="click_mark"></div>
							<div className="click_mark"></div>
						</div>
					</div>
				</section>
				<section id="blog_selection" className="modular">
					<div className="home-title"><span>博客精选</span></div>
					<div className="home-introduction">
						<p>交流产生契机，讨论收获惊喜</p>
						<p>前事不忘后事之师，前辈的经验，同辈的经历，大触的教程，心灵的鸡汤，希望大家都能再次有所收获，有所得益</p>
					</div>
					<div id="blog_content">
						<div id="btn_tools">
							<div className="blog_btn">
								<span className="blog_btn_cir">&lsaquo;</span>
								<span>上一页</span>
							</div>
							<div className="blog_btn">
								<span>下一页</span>
								<span  className="blog_btn_cir">&rsaquo;</span>
							</div>
						</div>
						<div id="blog_list">
							{homeBlog}
						</div>
					</div>
				</section>
				<section id="product" className="modular">
					<div className="home-title"><span>优秀产品</span></div>
					<div className="home-introduction">
						<p>执着/追求/完美/创造</p>
						<p>维生数工作室(Vtmer Studio)，一个学生科研团队，成立于2009年，现隶属于校团委学生新媒体中心，专注于广工大校园媒体和网络信息化建设</p>
					</div>
					<div id="product_show">
						<ul>
							{homeProducts}
						</ul>
					</div>
					<button id="homeProduct_more"><span>&bull;&bull;&bull;</span>精彩更多<span>&bull;&bull;&bull;</span></button>
				</section>
				<section id="contact" className="modular">
					<div className="home-title"><span>联系方式</span></div>
					<div className="home-introduction">
						<p>执着/追求/完美/创造</p>
						<p>维生数工作室(Vtmer Studio)，一个学生科研团队，成立于2009年，现隶属于校团委学生新媒体中心，专注于广工大校园媒体和网络信息化建设</p>
					</div>
					<div id="contact_main">
						<div className="contact_group">
							<div id="group01"></div>
							<div className="contact_message">
								<h3>联系方式</h3>
								<p>邮箱：1326016397@qq.com</p>
								<p>电话：18825135122</p>
								<p>微信：XXXXXXX</p>
							</div>
						</div>
						<div className="contact_group">
							<div id="group02"></div>
							<div className="contact_message">
								<h3>我们的坐标</h3>
								<p>中国 · 广东</p>
								<p>广州市番禺区大学城</p>
								<p>广东工业大学综合楼304</p>
							</div>
						</div>
						<div className="contact_group">
							<div id="group03"></div>
							<div className="contact_message">
								<h3>业务洽谈</h3>
								<p>致电：1928371273</p>
							</div>
						</div>
					</div>
				</section>
				<div className="blank"></div>
			</main>
			
		)
	}	
}