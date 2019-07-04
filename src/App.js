import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AuthRoute from './utils/auth'
const Index = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/index'),
  // 加载中的提示组件
  loading: () => <div>加载中</div>
});
const Detail = Loadable({
  loader: () => import('./views/detail'),
  loading: () => <div>加载中</div>
});
const Sets = Loadable({
  loader: () => import('./views/mine/set'),
  loading: () => <i>1</i>
})
const Login = Loadable ({
  loader: () => import('./views/mine/login'),
  loading: () => <i>2</i>
})
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <AuthRoute path='/set' component={Sets}/>
          <Route path="/login" component={Login}/>
          <Route path="/detail" component={Detail} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}
