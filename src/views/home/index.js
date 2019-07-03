import React from 'react';
import { connect } from 'react-redux';
import { Topbar, HomeWrap, Logo, Search, SwiperWrap, NavWrap, Nav, NavItem, NavItemA, MainWrap } from './style'
import { Icon } from 'antd'
import * as actions from './store/actionCreates'
// swiper js文件
import Swiper from 'swiper/dist/js/swiper'
// swiper 样式文件
import 'swiper/dist/css/swiper.min.css'


class Home extends React.Component {
  render () {
    // 需要定义一下，第一次 render 没有数据会报错，给一个空数组
    let bannerList = this.props.bannerList || []
    let navList = this.props.navList || []
    let movieList = this.props.movieList || {title: '123', item: [1, 2, 3] }
    let goodList = this.props.goodList || {title: '123', item: [1, 2, 3] }
    // console.log(movieList)
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
            {
              navList.map(item => {
                return (
                  <NavItem key={item.id}>
                    <NavItemA to={item.to}>
                      <img src={item.img} alt="" className="nav-img" />
                      <p>{item.name}</p>
                    </NavItemA>
                  </NavItem>
                )
              })
            }
          </Nav>
        </NavWrap>
        <MainWrap>
          <div className="tit-bar">{ movieList.title }</div>
          <ul className="movie-list">
            {
              movieList.item.map((item, index) => {
                return (
                  <li className="movie-item" key={index}>
                    <img src={item.image} alt="" className="nav-img" />
                    <h3 className="movie-name">{ item.title }</h3>
                    <span className="movie-price">{item.ftitle}</span>
                  </li>
                )
              })
            }
          </ul>
          <div className="tit-bar">{ goodList.title }</div>
          <ul className="movie-list">
            {
              goodList.item.map((item, index) => {
                return (
                  <li className="movie-item" key={index}>
                    <img src={item.image} alt="" className="nav-img" />
                    <h3 className="movie-name">{ item.title }</h3>
                    <span className="movie-price">{item.ftitle}</span>
                  </li>
                )
              })
            }
          </ul>
        </MainWrap>
      </HomeWrap>
    )
  }
  // 组件更新时创建 Swiper
  componentDidUpdate(prevProps){
    // 有好几个数据，会更新几次，所以需要判断一下, 这个生命周期函数会接收到上一次的props，根据上一次的props和this.props中的bannerList有没有变化，有变化就说明banner数据渲染到页面了，就可以 new Swiper
    if (!this.mySwiper && prevProps.bannerList.length !== this.props.bannerList.length) {
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
  }
  componentDidMount () {
    this.props.getAllList() // 获取首页大部分数据
    this.props.getNavList() // 获取菜单栏数据，自己写的 db.json 数据
    // this.mySwiper = new Swiper('.swiper-container', {
        // loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        // },
        // // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },
    // })
  }
  // 组件销毁的时候把轮播图清除
  componentWillUnmount () {
    this.mySwiper = null;
  }
}


export default connect((state) => ({
  bannerList: state.home.bannerList,
  navList: state.home.navList,
  movieList: state.home.movieList,
  goodList: state.home.goodList,
}), (dispatch => ({
  getAllList () {
    dispatch(actions.asyncGetState())
  },
  getNavList () {
    dispatch(actions.asyncGetNavList())
  }
})))(Home);
