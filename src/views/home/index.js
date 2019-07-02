import React from 'react';
import { connect } from 'react-redux';
import { Topbar, HomeWrap, Logo, Search } from './style'
import { Icon } from 'antd'


class Home extends React.Component {
  render () {
    return (
      <HomeWrap>
        <Topbar>
          <Logo />
          <Search><Icon type="search" /></Search>
        </Topbar>
      </HomeWrap>
    )
  }
}



export default connect()(Home);
