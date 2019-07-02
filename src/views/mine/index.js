import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import { Header, NewIcon, ScrollBody, Member } from './style.js';
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1272994_2fh4y759x9v.js',
});
class Mine extends Component {
  render () {
    return (
      <div>
        <Header>
        <NewIcon type="setting" />
        <NewIcon type="ellipsis" />
        </Header>
        <ScrollBody>
        <div className="member">
          <div className="member-info">
            <div className="user-avatar">
            <img src="http://img3.ixingmei.com/upload/shop/common/default_user_portrait.png" alt="默认头像"/>
            </div>
            <div className="user-name">
            <span>18870297808</span>
            </div>
              <NavLink to="/">
              <div className="user-level">
                <IconFont type="icon-vip5" style={{fontSize:'1rem'}}/>
                1会员
              </div>
              </NavLink>
            </div>
        </div>
        <Member>s
          <dl className="md5">
            <dt><h2><IconFont type="icon-dingdan"/> 电影订单</h2><IconFont type="icon-right"/></dt>
            <dt><h2><IconFont type="icon-dingdan"/> 其他订单</h2><IconFont type="icon-right"/></dt>
            <dd>
              <NavLink to="/"><IconFont type="icon-qianbao1"/><p>待付款</p></NavLink>
              <NavLink to="/"><IconFont type="icon-dais"/><p>待收货</p></NavLink>
              <NavLink to="/"><IconFont type="icon-che"/><p>待自提</p></NavLink>
              <NavLink to="/"><IconFont type="icon-ping"/><p>待评价</p></NavLink>
              <NavLink to="/"><IconFont type="icon-tui"/><p>退货/退款</p></NavLink>
            </dd>
          </dl>
          <dl className="md5">
            <dt><h2><IconFont type="icon-qianbao"/> 我的财产</h2><IconFont type="icon-right"/></dt>
            <dd>
              <NavLink to="/"><IconFont type="icon-qian"/><p>预存款</p></NavLink>
              <NavLink to="/"><IconFont type="icon-chong"/><p>充值卡</p></NavLink>
              <NavLink to="/"><IconFont type="icon-quan"/><p>优惠券</p></NavLink>
              <NavLink to="/"><IconFont type="icon-bao"/><p>红包</p></NavLink>
              <NavLink to="/"><IconFont type="icon-swipe"/><p>随影卡</p></NavLink>
            </dd>
          </dl>
          <dl className="md5">
            <dt><h2><IconFont type="icon-di"/> 收货地址管理</h2><IconFont type="icon-right"/></dt>
            <dt><h2><IconFont type="icon-she"/> 用户设置</h2><IconFont type="icon-right"/></dt>
          </dl>
        </Member>
        </ScrollBody>
      </div>
    );
  }
}

Mine.propTypes = {
};

export default connect()(Mine);
