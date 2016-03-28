import ProductInfo from './ProductInfo.jsx';


export default class Index extends React.Component{
	constructor(props) {
	    super(props);
  	}
	render(){
		return (
			<div className="indexPage">
				<ProductInfo />
			</div>
		)
	}	
}