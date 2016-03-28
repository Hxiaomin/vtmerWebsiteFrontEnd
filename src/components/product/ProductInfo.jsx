import { Link } from 'react-router';
import "./ProductInfo.less";

export default class Info extends React.Component{
	constructor(props) {
	    super(props);

	    this.products=[
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-1.jpg',productUrl:'1'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-2.jpg',productUrl:'2'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-3.jpg',productUrl:'3'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-4.jpg',productUrl:'4'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-5.jpg',productUrl:'5'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-1.jpg',productUrl:'6'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-4.jpg',productUrl:'7'},
	    	{title1:'魅族手机UI：梦想',title2:'手机主题',imageUrl:'/images/home/product-5.jpg',productUrl:'8'},
	    ];
  	}
  	componentWillMount(){
  		
  	}
  	componentDidMount(){
  		window.onscroll =  function(){
  			
	    	
	    }

  	}
	render(){
		var productList1=new Array();
		var productList2=new Array();
		var j=0,k=0;
		for(var i=0;i<this.products.length;i++){ 						
			if(i%2==0){ 
				productList1[j]=this.products[i];
				j++;
			}else{ 
				productList2[k]=this.products[i];
				k++;
			}
		}
		let products = productList1.map((item, i)=>{
			return(
				<div key={i} className="row product-contain">
					<div className="row-product">
					    <div className="product-image">
					      	<a className="product-mark" href={item.productUrl}>
								<div className="case-des">
									<h3 className="case-h3">{item.title1}</h3>	
									<hr/>						
									<h6>{item.title2}</h6>
								</div>
							</a>
					    </div>
					    <div className="product-image">
					      	<a className="product-mark" href={productList2[i].productUrl}>
								<div className="case-des">
									<h3 className="case-h3">{productList2[i].title1}</h3>	
									<hr/>						
									<h6>{productList2[i].title2}</h6>
								</div>
							</a>
					    </div>
					</div>
				</div>
			)
		})
		return (
			<main role="main" className="product-main">
				<div className="blank"></div>
				{products}
				<div id="product_more" className="loading-more"><span>&bull;&bull;&bull;</span>加载更多<span>&bull;&bull;&bull;</span></div>
			</main>
		)
	}	
}