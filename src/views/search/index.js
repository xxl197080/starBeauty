import React from 'react';
import { connect } from 'react-redux';
import { SearchWrap } from './style'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

class Search extends React.Component {
  render () {
    return (
      <SearchWrap>
        <header className="header">
          <div className="header-l">
            <Link className="goback" to="/home">
              <Icon type="left" style={{fontSize: '20px'}} />
            </Link>
          </div>
          <div className="header-inp">
            <Icon type="search" className="search-icon" />
            <input type="text" className="search-inp" />
          </div>
          <div className="header-r">搜索</div>
        </header>
        <div className="main">
          <div className="main-img">
            <i></i>
          </div>
          <p>搜索你需要的关键词</p>
        </div>
      </SearchWrap>
    );
  }

}


export default connect()(Search);
