import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HomeWrap = styled.div`
  height: 100%;
  padding-bottom: 50px;
  padding-top: 44px;
  overflow-y: auto;
  overflow-x: hidden;
`

export const Topbar = styled.header`
  display: flex;
  position: fixed;
  height: 2rem;
  background: #F8F8F8;
  z-index: 2 !important;
  top: 0;
  bottom: auto;
  left: 0;
  right: 0;
`
export const Logo = styled.h1`
  flex: 1;
  background: url('./img/logo.png') no-repeat center center;
  background-size: auto 60%;
  background-position: 50% 55%;
  height: 40px;
`

export const Search = styled(NavLink)`
  display: block;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  font-size: 24px;
`
export const SwiperWrap = styled.div`
  z-index: 1;
  overflow: hidden;
  width: 100%;
  min-height: 8rem;
  .swiper-container {
    width: 100%;
    img{
      width: 100%;
    }
  }
`
export const NavWrap = styled.div`
  background-color: #FFF;
  border-bottom: solid 0.05rem #EEE;
`
export const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  justify-content: flex-start;
	flex-shrink: 0;
  width: 100%;
  overflow: hidden;
  margin: 0;
`
export const NavItem = styled.li`
  display: block;
  box-sizing: border-box;
  flex: 1 1 25%;
  height: 4.5rem;
  padding: 0.5rem 0 0.3rem 0;
`
 export const NavItemA = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .nav-img{
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 auto 0.3rem auto;
    border-radius: 100%;
  }
  p{
    font-size: 0.6rem;
    line-height: 0.9rem;
    color: #555;
  }
 `
export const MainWrap = styled.div`
  overflow: hidden;
  .tit-bar{
    border-left: solid 0.15rem #ED5564;
    height: 0.8rem;
    margin: 0.5rem 0 0.5rem 0.3rem;
    padding-left: 0.3rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
    font-weight: 700;
  }
  .movie-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    justify-content: space-between;
    padding: 0 6px;
    width: 100%;
    .movie-item{
      width: 50%;
      display: flex;
      flex-direction: column;
      flex: 1 1 50%;
      box-sizing: border-box;
      padding: 4px;
      height: 10rem;
      font-size: 0.7rem;
      .nav-img{
        width: 100%;
      }
      .movie-name{
        color: #333;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        background: #fff;
        padding-left: 6px;
        line-height: 1rem;
      }
      .movie-price{
        color: #f33;
        background: #fff;
        padding-left: 6px;
        line-height: 1rem;
      }
    }
  }
`
export const GoTop = styled.div`
    width: 1.9rem;
    height: 1.9rem;
    position: fixed;
    z-index: 999;
    right: 0.6rem;
    bottom: 2.5rem;
    border-radius: 50%;
    background-color: #fff;
    background-image: url('./img/gotop.png');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 60%;
    opacity: 0.6;
`
