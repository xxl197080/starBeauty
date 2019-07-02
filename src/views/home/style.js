import styled from 'styled-components'

export const HomeWrap = styled.div`
  height: 100%;
  padding-bottom: 50px;
`

export const Topbar = styled.header`
  display: flex;
  position: fixed;
  height: 45px;
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
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 24px;
`
