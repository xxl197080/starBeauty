import React from 'react';
import { connect } from 'react-redux';
import { MarketWrap } from './style'
import {Icon} from 'antd'
import * as actions from './store/actionCreates'


class Market extends React.Component {
  render () {
    return (
      <MarketWrap>
        <div className="serach">
          <Icon type="search" className="icon" />
          <input placeholder="输入商品名,品牌名" className="input-serach" />
        </div>
        <div className="banner" style={{backgroundImage:`url(${this.props.bannerImg})`}} ></div>
      </MarketWrap>
    );
  }
  componentDidMount () {
    this.props.getInit()
  }
}


export default connect((state) => {
  return{
    bannerImg: state.market.bannerImg
  }
}, (dispatch) => {
  return {
    getInit () {
      dispatch(actions.asyncGetInit())
    }
  }
})(Market);
