import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actionCreates';
import { NavLink } from 'react-router-dom';
import { Header, Menu, NewIcon, List } from './style';
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1272994_riz8c8w0r3.js',
});
class Set extends Component {
  menu=()=>{
    if(this.props.isShow){
      return (
          <ul onClick={this.props.showMenu}>
          <span className="arrow"></span>
            <NavLink to="/home" ><IconFont type="icon-fangzi"/><li >首页</li></NavLink>
            <NavLink  to="*" className="border"><IconFont type="icon-sousuo"/><li>搜索</li></NavLink >
            <NavLink  to="*" onClick={this.tip}><IconFont type="icon-xinxi"/><li>消息</li></NavLink >
          </ul>
      )
    }
}
//  退出
async signout(){
  document.cookie=`user= ;expires=-1;`
  window.location.reload()
}
  render() {
    return (
      <Fragment>
        <Header>
        <NavLink to="/mine"><IconFont type="icon-jiantou1" style={{fontSize:"1rem",padding:"0.4775rem",color:"#333"}}/></NavLink>
        <span>设置</span>
        <NewIcon type="ellipsis" onClick={this.props.showMenu}/>
          <Menu>
            {
              this.menu()
            }
          </Menu>
        </Header>
        <List>
          <li>
            <h4>登录密码</h4>
            <h6>建议您定期更改密码以保护账户安全</h6>
            <IconFont type="icon-right" style={{color:"#666"}}/>
          </li>
          <li>
            <h4>手机验证</h4>
            <h6>建议您定期更改密码以保护账户安全</h6>
            <IconFont type="icon-right" style={{color:"#666"}}/>
          </li>
          <li>
            <h4>重置支付密码</h4>
            <h6>建议您设置复杂的支付密码保护账户金额安全</h6>
            <IconFont type="icon-right" style={{color:"#666"}}/>
          </li>
          <li>
            <h4>用户反馈</h4>
            <h6>您在使用中遇到的问题与建议可向我们反馈</h6>
            <IconFont type="icon-right" style={{color:"#333"}}/>
          </li>
          <li onClick={this.signout.bind(this)}>
            <h4>安全退出</h4>
          </li>
        </List>
      </Fragment>
    )
  }
}



const mapDispatchToProps =(dispatch) => ({
  //  显示隐藏二级菜单
  showMenu(e) {
    e.preventDefault()
      dispatch(actions.show())
  }
})
export default connect(null,mapDispatchToProps)(Set);
