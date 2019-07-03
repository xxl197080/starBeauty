import styled from 'styled-components'

export const HomeWrap = styled.div`
  height: 100%;
  padding-bottom: 50px;
  padding-top: 44px;
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

export const Search = styled.a`
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
`
export const NavItem = styled.li`
  flex: 0 0 25%;
  height: 3.7rem;
  padding: 0.5rem 0 0.3rem 0;
`
