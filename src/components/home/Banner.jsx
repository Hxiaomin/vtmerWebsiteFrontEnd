import "./Banner.less";

export default class Banner extends React.Component{
	constructor(props) {
	    super(props);

	    this.banners = [
	    	{title1: '跨平台移动应用的延续性',title2: '前端D E M O', url: 'images/1.png'},
	    	{title1: '跨平台移动应用的延续性',title2: '设计D E M O', url: 'images/2.jpg'},
	    	{title1: '跨平台移动应用的延续性',title2: '后台D E M O', url: 'images/3.jpg'},
	    	{title1: '跨平台移动应用的延续性',title2: '产品D E M O', url: 'images/4.jpg'},
	    	{title1: '跨平台移动应用的延续性',title2: '宣传D E M O', url: 'images/5.jpg'},
	    ]
  	}
  	componentDidMount(){
  	}
	render(){
		return (
			<div className="homepage-banner">
				<p>我们就是Vtmers!我们在维生数工作室！</p>
				<div className="tilt-line"></div>
				<p className="vtmers"><b>我们充满</b><b>热情和创造力</b></p>
				<button>了解我们<span>&#8595;</span></button>
			</div>
		)
	}	
}


