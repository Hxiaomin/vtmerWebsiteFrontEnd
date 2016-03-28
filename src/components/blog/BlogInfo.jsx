import { Link } from 'react-router';
import "./BlogInfo.less";

export default class Info extends React.Component{
	constructor(props) {
	    super(props);
  	}
  	componentWillMount(){
  		this.popularArticles=[ 
  			{title: '如何让用户觉得自己是vip'},
  			{title: '2014年发表的教程和文章阅读导读'},
  			{title: '摄影视觉应用于网络设计'},
  			{title: '游戏视觉设计与用户体验'},
  			{title: '用故事打动人心的设计作品'},
  			{title: '面试分享会'},
  			{title: '实现javascrip模块化加载'},
  		]
  		this.passages = [
	    	{title: '"“情感化设计”知多少"',time: ' 2015/02/11 13:17', url: 'images/box1.png',
	    	content: '达芬奇设计高端宴会厨房的故事。这位大师带着他的创造天赋接受了这份工作。',
	    	thumbUp: '111',comment: '222',tag:'心 情',id:'1'},
	    	{title: 'Thumbnail label',time: ' 2015/02/11 13:17', url: 'images/box2.png',
	    	content: 'Michael Gelb写过一本很棒的书《How to think Leonardo da Vinci》，里面详细描述了米兰公爵委托达芬奇设计高端宴会厨房的故事。这位大师带着他的创造天赋接受了这份工作。',
	    	thumbUp: '111',comment: '222',tag:'设 计',id:'2'},
	    	{title: 'Thumbnail label',time: ' 2015/02/11 13:17', url: 'images/box3.png',
	    	content: '造天赋接受了这份工作。',
	    	thumbUp: '111',comment: '222',tag:'前 端',id:'3'},
	    	{title: 'Thumbnail label',time: ' 2015/02/11 13:17', url: 'images/box4.png',
	    	content: 'Michael Gelb写过一本很棒的书《How to think Leonardo da Vinci》，里面详细描述了米兰公爵委托达芬奇设计高端宴会厨房的故事。这位大师带着他的创造天赋接受了这份工作。',
	    	thumbUp: '111',comment: '222',tag:'后 台',id:'4'},
	    	{title: 'Thumbnail label',time: ' 2015/02/11 13:17', url: 'images/box5.png',
	    	content: 'Michael Gelb写过一本很棒的书《How to think Leonardo da Vinci》，里面详细描述了米兰公爵委托达芬奇设计高端宴会厨房的故事。这位大师带着他的创造天赋接受了这份工作。',
	    	thumbUp: '111',comment: '222',tag:'设 计',id:'5'},
	    	{title: 'Thumbnail label',time: ' 2015/02/11 13:17', url: 'images/box6.png',
	    	content: 'Michael Gelb写过一本很棒的书《How to think Leonardo da Vinci》，里面详细描述了米兰公爵委托达芬奇设计高端宴会厨房的故事。这位大师带着他的创造天赋接受了这份工作。',
	    	thumbUp: '111',comment: '222',tag:'设 计',id:'6'},
	    ]
  	}
  	componentDidMount(){
  		window.onscroll =  function(){
  			
	    	
	    }
  	}
	render(){
		let popularArticles = this.popularArticles.map((item,i)=>{ 
			return(<li key={i} className="li-list">{item.title}</li>)				      			
		})	
		let passages = this.passages.map((item, i)=>{ 
			return( 
			<Link to={'/passageDetail/' + item.id}>
				<div className="col-sm-6 col-md-4" key={i}>
			    	<div className="thumbnail  passage-all">
			    		<div className="page-header passage-header">
						  	<h3>{item.title}</h3>
						  	<small>{item.time}</small>
						</div>
				      	<img data-src="holder.js/300x200" alt="..." src={item.url} className="box-size"/>
				      	<div className="caption">
				        	<p>{item.content}</p>
				        	<p>
				        		<a href="#" className="btn btn-initial" role="button">
				        			<span className="glyphicon glyphicon-thumbs-up"></span>
				        			<span>&nbsp;{item.thumbUp}</span>
				        		</a> 
				        		<a href="#" className="btn btn-initial" role="button">
				        			<span className="glyphicon glyphicon-comment"></span>
				        			<span>&nbsp;{item.comment}</span>
				        		</a>
				        		<span className="label label-info navbar-right tag">{item.tag}</span>
				        	</p>
				      	</div>
			    	</div>
				</div>
			</Link> 
			)
		})
		let button = () =>{ 
			let button;
			switch(this.state.getPassageStatus)
			{ 
				case 'init':
					status = <tr><td colSpan="7" className="text-center">正在加载中...</td></tr>
					break;
				case 'empty':
					status = <tr><td colSpan="7" className="text-center">暂无数据</td></tr>
					break;
				case 'success':
					status = passages;
					break;
				case 'fail':
					status = <tr><td colSpan="7" className="text-center">加载失败</td></tr>
					break;
			}
			return status;
		}
		return (
			<div className="info center">
				<div className="row">
					<div className="col-sm-6 col-md-4">
				    	<div className="thumbnail passage-all">
				    		<div className="page-header passage-header">
							  	<h3>热门文章</h3>
							</div>
					      	<ul>
					      		{popularArticles}			  	
							</ul>
				    	</div>
					</div>
				  	{passages}
				</div>	
				{button}
				<div id="blog_more" className="loading-more"><span>&bull;&bull;&bull;</span>加载更多<span>&bull;&bull;&bull;</span></div>
			</div>
		)
	}	
}