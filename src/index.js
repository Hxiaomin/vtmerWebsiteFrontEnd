import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import Home from '../src/components/home/Home.jsx';
import IndexPage from '../src/components/home/IndexPage.jsx';
import BlogPage from '../src/components/blog/BlogPage.jsx';
import ProductPage from '../src/components/product/ProductPage.jsx';
import PassageDetail from '../src/components/blog/PassageDetail.jsx';
import About from '../src/components/about/About.jsx';




//路由
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
        <IndexRoute component={IndexPage} />
        <Route path="home" component={IndexPage} />
        <Route path="blog" component={BlogPage} />
        <Route path="product" component={ProductPage} />
        <Route path="passageDetail/:id" component={PassageDetail} />
        <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'));