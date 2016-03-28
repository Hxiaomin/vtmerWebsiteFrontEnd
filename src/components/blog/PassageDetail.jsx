import { Link } from 'react-router';
import "./PassageDetail.less";


export default class PassageDetail extends React.Component{
	constructor(props) {
	    super(props);

	    this.state = {
	    	thumbUp:false,
	    	title:"赞"
	    }

	    this.thumbUpClick = this.thumbUpClick.bind(this);

  	}
  	//画出文章上方的图案
  	initupline(){ 
  		var mycanvas = this.refs.mycanvas;
  		var passage = this.refs.code;
		var context = mycanvas.getContext("2d");
		  
		context.strokeStyle='#777E86';
		context.lineWidth=1;
		context.lineCap='square';
		context.beginPath();
		context.moveTo(449,0);
		context.lineTo(449,50);
		context.lineTo(0,200);
		context.stroke();
		context.closePath();
  	}
  	//画出文章下方的图案
  	initdownline(){ 
  		var mycanvas1 = this.refs.mycanvas1;
		var passage = this.refs.code;
		var context = mycanvas1.getContext("2d");
		  
		context.strokeStyle='#777E86';
		context.lineWidth=1;
		context.lineCap='square';
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(449,200);
		context.lineTo(449,260);
		context.stroke();
		context.closePath();
  	}
  	//画出点赞的那个圆圈
  	initcircle(){ 
  		var canvas=this.refs.mycanvas2;
		var context=canvas.getContext("2d");

		context.strokeStyle='#777E86';
		context.lineWidth=1;
		context.lineCap='square';
		context.beginPath();
		context.arc(35,35,35,0,Math.PI*2,true); //Math.PI*2是JS计算方法，是圆
		context.stroke();
		context.closePath();
  	}
  	//点赞以及取消点赞
  	thumbUpClick(){ 
  		if(!this.state.thumbUp){ 
  			this.setState({
	        	thumbUp:true,
	        	title:"取消赞"
		    })
  		}else{ 
  			this.setState({
	        	thumbUp:false,
	        	title:"赞"
		    })
  		}
  		
  	}
  	componentWillMount(){
  		this.passage={
  		title:'徐天华：不追求风格，追求客观的表达',url:'http://www.zcool.com.cn/article/ZMTY3Njc2.html',
  		time:'2015/07/20   21:50',
		browser:'12856',times:'25',thumbUp:'10',detail:'设计师专访（转自站酷）',
		content:'<div><p><h4>站酷网：你的绘画能力是如何培养的？你认为绘画对设计师来说是重要的能力么？</h4><span>徐天华：绘画能力的获得是一个水到渠成的事情，只要多画就可以了。对于设计师来说比绘画能力更重要的是“什么都可以画”，就是所谓的无障碍表达。绘画只是设计者的一种工具，它的最终目的还是为了服务于要表达的内容。</span></p><p><h4>站酷网：你的绘画能力是如何培养的？你认为绘画对设计师来说是重要的能力么？</h4><span>徐天华：绘画能力的获得是一个水到渠成的事情，只要多画就可以了。对于设计师来说比绘画能力更重要的是“什么都可以画”，就是所谓的无障碍表达。绘画只是设计者的一种工具，它的最终目的还是为了服务于要表达的内容。</span></p><p><h4>站酷网：你的绘画能力是如何培养的？你认为绘画对设计师来说是重要的能力么？</h4><span>徐天华：绘画能力的获得是一个水到渠成的事情，只要多画就可以了。对于设计师来说比绘画能力更重要的是“什么都可以画”，就是所谓的无障碍表达。绘画只是设计者的一种工具，它的最终目的还是为了服务于要表达的内容。</span></p><p><h4>站酷网：你的绘画能力是如何培养的？你认为绘画对设计师来说是重要的能力么？</h4><span>徐天华：绘画能力的获得是一个水到渠成的事情，只要多画就可以了。对于设计师来说比绘画能力更重要的是“什么都可以画”，就是所谓的无障碍表达。绘画只是设计者的一种工具，它的最终目的还是为了服务于要表达的内容。</span></p><p><h4>站酷网：你的绘画能力是如何培养的？你认为绘画对设计师来说是重要的能力么？</h4><span>徐天华：绘画能力的获得是一个水到渠成的事情，只要多画就可以了。对于设计师来说比绘画能力更重要的是“什么都可以画”，就是所谓的无障碍表达。绘画只是设计者的一种工具，它的最终目的还是为了服务于要表达的内容。</span></p><p><h4>站酷网：你创作时会对作品有预先的构想吗？你更喜欢随兴而画还是有计划地创作？</h4><span>徐天华：做设计的时候肯定是要有大概的构想的，并且要做好各种准备工作。但我觉得我自己平时的东西不算是创作，最多算随笔吧。随笔的话我是比较随性的，想到哪画到哪，很少专门去推敲一个草图。因为对我来说画随笔是一个放松快乐的事情。</span></p><p><h4>站酷网：你的绘画能力是如何培养的？你认为绘画对设计师来说是重要的能力么？</h4><span>徐天华：绘画能力的获得是一个水到渠成的事情，只要多画就可以了。对于设计师来说比绘画能力更重要的是“什么都可以画”，就是所谓的无障碍表达。绘画只是设计者的一种工具，它的最终目的还是为了服务于要表达的内容。</span></p><p><h4>站酷网：你的创作中，感性和理性所占的比例是多少？你认为二者的关系是怎么样的？</h4><span>徐天华：我已经没办法区分我创作中哪些是感性哪些是理性了。我认为创作者达到一定的水准之后应该是带着激情的理性，所有的小细节都是理性思考的结果。应该把理性思考变成一种本能的习惯，用感性的冲动来驱动创作进行。</span></p><p><h4>站酷网：你怎么看越来越多的优秀艺术家/设计师都在开办培训的现象？</h4><span>徐天华：如果能坚持给学员以正确的价值观引导，那这些培训是好事情。很多真正在一线工作过的人，才可以更系统也更准确地教会学员们这个行业真正有用的知识。这些培训其实是在填补高校设计教育的空白。</span></p><p><h4>站酷网：你认为美是有固定规律的么？如果没有，怎么保证自己的创作是“好”的？</h4><span>徐天华：合适的就是好的，不同的受众和语境，美的判断标准肯定不同啊。我很少关注美，我更多的是关注内容。比起视觉层面具体怎么表现，选择合适的内容对我来讲最重要，是一个引领方向的东西。我做的电影项目，每次风格方向都差别很大。能把自己对设计的原则放进去，并且成功实现，在视觉上拔高整个电影的水准，对我来说这就是“好”的。</span></p><p><h4>站酷网：设计师都有自己的坚持，你是怎么检查自己“坚持”的“正确性”的？</h4><span>徐天华：因为我对电影策划，剧作，导演这些更感兴趣。我的正确性就是是不是能为电影服务，能为表达电影服务。目前来看，客观的手法是最能完成这个目标的，所以很少使用主观色和光，也不追求个人风格和绘画语言。能让电影项目的策划准确完美得呈现出来，我觉得这就是最大的正确。</span></p></div>',
  		}
  		this.popularArticles=[ 
  			{title: '如何让用户觉得自己是vip',url:'http://127.0.0.1:8888/images/box1.png'},
  			{title: '2014年发表的教程和文章阅读导读',url:'http://127.0.0.1:8888/images/box2.png'},
  			{title: '摄影视觉应用于网络设计',url:'http://127.0.0.1:8888/images/box3.png'},
  			{title: '游戏视觉设计与用户体验',url:'http://127.0.0.1:8888/images/box4.png'},
  			{title: '用故事打动人心的设计作品',url:'http://127.0.0.1:8888/images/box5.png'},
  		]
  	}
  	componentDidMount(){ 
  		this.initupline();
  		this.initdownline();
  		this.initcircle();
  	}
	render(){
		let thumbUp = this.state.thumbUp ? 'thumb-click' : 'thumb-content'	
		let popularArticles = this.popularArticles.map((item,i)=>{ 
			return(
				<li key={i} className="more">
					<a href="javascript:;"><img src={item.url} /></a>
					<h5 className="title"><b>{item.title}</b></h5>
				</li>
			)				      			
		})
		return (
			<main role="main">
				<div role="banner">
					<div className="frame-banner">
						<div className="banner">
							<img src="http://127.0.0.1:8888/images/box1.png" />
						</div>
					</div>
					<div className="banner-bg">
						<img src="http://127.0.0.1:8888/images/imgbg.png"/>
					</div>
					<div className="line">
						<img src="http://127.0.0.1:8888/images/lines.png" />
					</div>
				</div>
				<article>
					<header className="article-header">
						<div className="triangle1"></div>
						<div className="introduce-txt">
							<h2>{this.passage.title}</h2> 
							<h6>{this.passage.detail}&nbsp;{this.passage.time}</h6>
							<h6>
								来源：
								<a href={this.passage.url} title="点击进入">{this.passage.url}</a>
							</h6>
							<h6>浏览数：{this.passage.brower}人&nbsp;评论数：{this.passage.times}次 &nbsp;点赞数：{this.passage.thumbUp}个</h6>
						</div>
						<div className="triangle2"></div>
					</header>
					<div className="content">
						<canvas ref="mycanvas"  width="600" height="200"></canvas>
						<div dangerouslySetInnerHTML={{__html:this.passage.content}} className="code" ref="code"></div>
						<div className="thumb-up" title={this.state.title}>							
							<canvas ref="mycanvas2"  width="70" height="70" className="canvas2"></canvas>
							<div className={thumbUp} onClick={this.thumbUpClick}>
								<span className="glyphicon glyphicon-thumbs-up"></span>		
								<span>{this.passage.thumbUp}</span>
							</div>
						</div>		
						<canvas ref="mycanvas1"  width="600" height="260" className="canvas1"></canvas>
					</div>
					<footer className="article-footer">
						<div className="triangle1"></div>
						<ul className="introduce-more">
							{popularArticles}
						</ul>
					</footer>
					<div className="blank"></div>
				</article>
			</main>
		)
	}	
}