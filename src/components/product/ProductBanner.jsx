import "./ProductBanner.less";

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
  		Carousel.init($(".J_Poster"));
  	}
	render(){

		let banners = this.banners.map((item, i)=>{
			let showInfo = (i==0) ? "block" : "none";
			return(
				<li key={i} className="poster-item">
					<a href="#" className="poster-a block">
    					<img src={item.url} width="100%" height="100%" className="block"/>
    					<div className={showInfo} >
    						<div className="layer">{item.title1}</div>
    						<div className="layer layer2">{item.title2}</div>
    						<div className="layer layer3"><hr/></div>
    					</div>
    				</a>
				</li>
			)
		})
		return (
			<div>
				<div className="J_Poster poster-main" data-setting='{
                                                                                    "width":550,
                                                                                    "height":330,
                                                                                    "posterWidth":200,
                                                                                    "posterHeight":380,
                                                                                    "scale":0.7,
                                                                                    "autoPlay":true,
                                                                                    "delay":5000,
                                                                                    "speed":400,
                                                                                    "vericalAlign":"top"
																					}'>
					<div className="poster-btn poster-prev-btn"></div>
					<ul className="poster-list">
		    			{banners}
		    		</ul>
		    		<div className="poster-btn poster-next-btn"></div>
		    		<div className="imgbg"><img src="/images/imgbg.png"/></div>
				</div>
			</div>
		)
	}	
}


