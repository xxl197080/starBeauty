import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spin, Icon } from 'antd';

// 加载中组件样式
const antIcon = <Icon type="loading"
style={{ fontSize: 50, position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)' }}
spin />;
const Home = Loadable({
  loader: () => import('./home'),
  loading: () => <Spin indicator={antIcon} />
});
const Film = Loadable({
  loader: () => import('./film'),
  loading: () => <Spin indicator={antIcon} />
});
const Find = Loadable({
  loader: () => import('./find'),
  loading: () => <Spin indicator={antIcon} />
});
const Mine = Loadable({
  loader: () => import('./mine'),
  loading: () => <Spin indicator={antIcon} />
});
const Navbar = Loadable({
  loader: () => import('./navbar'),
  loading: () => <Spin indicator={antIcon} />
});
const Market = Loadable({
  loader: () => import('./market'),
  loading: () => <Spin indicator={antIcon} />
});

function Movie() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/film" component={Film} />
        <Route path="/find" component={Find} />
        <Route path="/mine" component={Mine} />
        <Route path="/home" component={Home} />
        <Route path="/market" component={Market} />
        <Redirect to="/home" />
      </Switch>
    <Navbar />
    </React.Fragment>
  );
}


export default connect()(Movie);
