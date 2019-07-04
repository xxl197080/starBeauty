import React from "react";
import { connect } from "react-redux";
import { SearchWrap } from "../search/style";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import * as actions from "../search/store/actionCreates"

class Detail extends React.Component {
  render() {
    return (
      <SearchWrap>
        <header className="header">
          <div className="header-l">
            <Link className="goback" to="/search">
              <Icon type="left" style={{ fontSize: "20px" }} />
            </Link>
          </div>
          <div className="header-inp">
            <Icon type="search" className="search-icon" />
            <input
              type="text"
              className="search-inp"
              value={this.props.inputVal}
              onChange={this.props.chgInputVal}
            />
          </div>
          <div
            className="header-r"
            onClick={this.props.onClickSearch.bind(
              null,
              this.props.inputVal
            )}
          >
            搜索
          </div>
        </header>
        <div className="detail-nav">
          <ul>
            <li>综合排序</li>
            <li>销量优先</li>
          </ul>
          <div className="btn">〓</div>
        </div>
        <div className="product-list">
          <ul>
            {this.props.goodsList.map(item => {
              return (
                <li className="goods-list" key={item.goods_commonid}>
                  <div className="goods-img">
                    <img src={item.goods_image_url} alt="" />
                  </div>
                  <div className="goods-text">
                    <h4 className="goods-name">
                      {item.goods_name}
                    </h4>
                    <p className="goods-detail">
                      {item.goods_jingle}
                    </p>
                    <p className="goods-pirce">
                      {item.goods_promotion_price}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </SearchWrap>
    );
  }
}

export default connect((state) => ({
  goodsList: state.search.goodsList,
  inputVal: state.search.inputVal
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
)(Detail);
