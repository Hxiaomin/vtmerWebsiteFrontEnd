import { Link } from 'react-router';
//import Login from '../user/login.jsx';
import "./Nav.less";

export default class Nav extends React.Component{
	constructor(props) {
	    super(props);
	    

	    this.navMenu = [
	    	{name: '首页', url: '/home'},
	    	{name: '博客', url: '/blog'},
	    	{name: '产品', url: '/product'},
	    	{name: '关于', url: '/about'},
	    ]
  	}

 	componentDidMount(){
  		var el=document.getElementById('move');
  		var v=document.getElementById('v');
  		var elTop = el.offsetTop;
  		

  		window.onscroll =  function(){
  			alert("aa");
  			var osTop = document.documentElement.scrollTop || document.body.scrollTop; 
	  		

	  		//导航条固定
			if (osTop > elTop) {
                        el.style.top = "0";
                        el.style.position = "fixed";
                        el.style.backgroundColor="#18232F";
                        v.style.backgroundColor="#18232F";
                    } else {
                        el.style.top = elTop + 'px';
                        el.style.position = "absolute";
                        el.style.backgroundColor="#1C2836";
                        v.style.backgroundColor="#1C2836";
                    }
	    	
	    }

	}
  	
	render(){
		//菜单
		let navMenu = this.navMenu.map((item, i)=>{
			return(
				<li key={i}>
					<Link to={item.url} activeClassName='active'>{item.name}</Link>
				</li>
			)
		})
		
		return (
			<header role="banner">
				<nav className="navbar" role="navigation" id="move">
					<div className="container-fluid">
					    <div className="navbar-header">		      
					      <a className="logo" href="javascript:;"></a>
					    </div>

					    <div className="vlogo img-circle" id="v">
					    	
					    </div>
					    <div className="navbar-menu clearfix">
					      <ul className="nav navbar-nav nav-pills navbar-right">
					        {navMenu}
					      </ul>
					    </div>
					</div>
				</nav>
			</header>	
		)
	}	
}