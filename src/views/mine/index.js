import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Header, NewIcon, ScrollBody, Member,Menu } from './style.js';
import { Icon } from 'antd';
import *as actions from './store/actionCreates';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1272994_68yxt2x5heg.js',
});
class Mine extends Component {

  menu=()=>{
      if(this.props.isShow){
        return (
            <ul onClick={this.props.showMenu}>
            <span className="arrow"></span>
              <NavLink to="/home" ><IconFont type="icon-fangzi"/><li >首页</li></NavLink>
              <NavLink  to="/" className="border"><IconFont type="icon-xiazai1"/><li>购物车</li></NavLink >
              <NavLink  to="/" onClick={this.tip}><IconFont type="icon-xinxi"/><li>消息</li></NavLink >
            </ul>
        )
      }
  }
  avatar=()=>{
    if(this.props.userInfo){
      return (
        <Fragment>
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
        </Fragment>
      )
    }else{
      return (
        <Fragment>
          <div className="member-info">
          <NavLink to="/login" className="default-avatar" style={{display:'block'}}/>
          <NavLink to="/login" className="to-login">点击登录</NavLink>
          </div>
          <div className="member-collect"></div>
        </Fragment>
      )
    }
  }
  rich=()=>{
    if(this.props.userInfo){
      return (
        <Fragment>
            <NavLink to="/"><IconFont type="icon-qian"/><p>预存款</p></NavLink>
            <NavLink to="/"><IconFont type="icon-chong"/><p>充值卡</p></NavLink>
            <NavLink to="/"><IconFont type="icon-quan"/><p>优惠券</p></NavLink>
            <NavLink to="/"><IconFont type="icon-bao"/><p>红包</p></NavLink>
            <NavLink to="/"><IconFont type="icon-swipe"/><p>随影卡</p></NavLink>
        </Fragment>
      )
    }
  }
  render () {
    return (
      <Fragment>
        <Header>
        <NavLink to="/set"><NewIcon type="setting" /></NavLink>
        <NewIcon type="ellipsis" onClick={this.props.showMenu}/>
          <Menu>
            {
              this.menu()
            }
          </Menu>
        </Header>

        <ScrollBody>
        <div className="member">

            {
              this.avatar()
            }

        </div>

       <Member>
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
            <dd>{
              this.rich()
            }</dd>
          </dl>
          <dl className="md5">
            <dt><h2><IconFont type="icon-di"/> 收货地址管理</h2><IconFont type="icon-right"/></dt>
            <dt><h2><IconFont type="icon-she"/> 用户设置</h2><IconFont type="icon-right"/></dt>
          </dl>
        </Member>
        </ScrollBody>
      </Fragment>
    );
  }
}

const mapStateToProps =(state) => {
  return state.mine
}
const mapDispatchToProps =(dispatch) => ({
  //  显示隐藏二级菜单
  showMenu(e) {
    e.preventDefault()
      dispatch(actions.show())
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Mine);
