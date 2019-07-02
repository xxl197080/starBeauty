import React from 'react';
import { connect } from 'react-redux';
import {
  Menu,
  Icon
} from 'antd';
import {
  MenuWrap,
  SubMenuWrap,
  IconWrap
} from './style'
import { NavLink } from 'react-router-dom'
// import {
//   Tabs, Icon
// } from 'antd';

// const {
//   TabPane
// } = Tabs;

// const {
//   SubMenu
// } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return ( 
     <MenuWrap>
       < SubMenuWrap activeClassName = "active"
       activeStyle = {
         {
           color: '#ff6913'
         }
       }
       to = '/home' >
         < IconWrap type = "home" / >
        首页
       </SubMenuWrap>
        < SubMenuWrap activeClassName = "active"
        activeStyle = {
          {
            color: '#ff6913'
          }
        }
        to = '/film' >
          <IconWrap type = "laptop" / >
          电影
          </SubMenuWrap>
           < SubMenuWrap activeClassName = "active"
           activeStyle = {
             {
               color: '#ff6913'
             }
           }
           to = '/find' >
             < IconWrap type = "global" / >
            发现
             </SubMenuWrap>
              < SubMenuWrap activeClassName = "active"
              activeStyle = {
                {
                  color: '#ff6913'
                }
              }
              to = '/mine' >
                < IconWrap type = "user" / >
                我的
              </SubMenuWrap>
     </MenuWrap>
  
    );
  }
}

Navbar.propTypes = {
};

export default connect()(Navbar);


