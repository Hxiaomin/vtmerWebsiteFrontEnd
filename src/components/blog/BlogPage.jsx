import BlogBanner from './BlogBanner.jsx';
import BlogInfo from './BlogInfo.jsx';


export default class Index extends React.Component{
	constructor(props) {
	    super(props);
  	}
	render(){
		return (
			<div className="indexPage">
				<BlogBanner />
				<BlogInfo />
			</div>
		)
	}	
}