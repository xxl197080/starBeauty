import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AuthRoute from './utils/auth'
import { Spin, Icon } from 'antd';

// 加载中组件样式
const antIcon = <Icon type="loading"
style={{ fontSize: 50, position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)' }}
spin />;

const Index = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/index'),
  // 加载中的提示组件
  loading: () => <Spin indicator={antIcon} />
});
const Detail = Loadable({
  loader: () => import('./views/detail'),
  loading: () => <Spin indicator={antIcon} />
});
const Search = Loadable({
  loader: () => import('./views/search'),
  loading: () => <Spin indicator={antIcon} />
});
const Sets = Loadable({
  loader: () => import("./views/mine/set"),
  loading: () => <Spin indicator={antIcon} />
});
const Login = Loadable({
  loader: () => import("./views/mine/login"),
  loading: () => <Spin indicator={antIcon} />
});
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AuthRoute path='/set' component={Sets}/>
          <Route path="/login" component={Login}/>
          <Route path="/detail" component={Detail} />
          <Route path="/search" component={Search} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}
