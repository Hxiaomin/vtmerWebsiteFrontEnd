import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import "./Home.less";

export default class Home extends React.Component{
	constructor(props) {
	    super(props);
  	}

	render(){
		return (
			<div className="home animated tada">
				<Nav/>
				{this.props.children}
				<Footer />
			</div>
		)
	}	
}

