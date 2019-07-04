import React from 'react';
import { connect } from 'react-redux';
import { SearchWrap } from './style'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import * as actions from './store/actionCreates'

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
            <input type="text" className="search-inp" value={this.props.inputVal} onChange={this.props.chgInputVal} />
          </div>
          <Link
          className="header-r"
          onClick={this.props.onClickSearch.bind(null, this.props.inputVal)}
          to="/detail"
          >搜索</Link>
        </header>
        <div className="main">
          <div className="main-img">
            <i></i>
          </div>
          <p className="p">搜索你需要的关键词</p>
        </div>
      </SearchWrap>
    );
  }

}


export default connect(
  state => ({
    inputVal: state.search.inputVal,
    goodsList: state.search.goodsList
  }),
  (dispatch) => ({
    chgInputVal (event) {
      let value = event.target.value
      dispatch(actions.onChgInputVal(value));
    },
    onClickSearch (inputVal) {
      dispatch(actions.asyncGetGoodsList(inputVal));
    }
  })
)(Search);
