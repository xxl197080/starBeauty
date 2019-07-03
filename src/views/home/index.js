import React from 'react';
import { connect } from 'react-redux';
import { Topbar, HomeWrap, Logo, Search, SwiperWrap, NavWrap, Nav, NavItem } from './style'
import { Icon } from 'antd'
import * as actions from './store/actionCreates'
// swiper js文件
import Swiper from 'swiper/dist/js/swiper'
// swiper 样式文件
import 'swiper/dist/css/swiper.min.css'


class Home extends React.Component {
  render () {
    let bannerList = this.props.bannerList || []
    console.log(bannerList)
    return (
      <HomeWrap>
        <Topbar>
          <Logo />
          <Search><Icon type="search" /></Search>
        </Topbar>
        <SwiperWrap>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                bannerList.map((item, index) => {
                  return (
                    <div className="swiper-slide" key={index} >
                      <img src={item.image} alt='' />
                    </div>
                  )
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </SwiperWrap>
        <NavWrap>
          <Nav>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <NavItem></NavItem>
          </Nav>
        </NavWrap>
      </HomeWrap>
    )
  }
  // 组件更新时创建 Swiper
  componentDidUpdate(){
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        disableOnInteraction: false,
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
  componentDidMount () {
    this.props.getBannerList() // 获取轮播图数据
    this.props.getNavList() // 获取菜单栏数据
    // this.mySwiper = new Swiper('.swiper-container', {
    //   loop: true,
    //   autoplay: true,
      // effect : 'cube',
    // })
  }
}


export default connect((state) => ({
  bannerList: state.home.bannerList
}), (dispatch => ({
  getBannerList () {
    dispatch(actions.asyncGetState())
  },
  getNavList () {
    dispatch(actions.asyncGetNavList())
  }
})))(Home);
