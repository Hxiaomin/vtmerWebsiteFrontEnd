import "./Footer.less";

export default function Footer() {
  	return (
  		<footer role="contentinfo" className="main-footer">
  			<div className="row footer">
  				<div className="col-sm-6 col-sm-3">
  					<h2>Vtmer</h2><h3>维生素工作室</h3>
	            </div>
	            <div className="col-xs-6 col-sm-3">
	                <small className="glyphicon glyphicon-map-marker"></small><big>中国·广东<br/>广州市番禺区大学城<br/>广东工业大学综合楼304</big>
	            </div>
	            <div className="col-xs-6 col-sm-3">
	                <small className="glyphicon glyphicon-envelope"></small><big>邮箱：1326016397@qq.com<br/>电话：18825135122<br/>微信公众号：xxxxxxx</big>
	            </div>
	            <div className="col-xs-6 col-sm-3">
	                &copy;2015 Vtmer
	            </div>
  			</div>	
  		</footer>
	)
}

