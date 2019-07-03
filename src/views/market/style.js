import styled from 'styled-components'

export const MarketWrap = styled.div`
  height: 100%;
  padding-bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  .serach{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 9;
    background: hsla(0,0%,100%,0);
    padding: .15rem 0;
    .icon{
      position: absolute;
      top: .6rem;
      left: 1.2rem;
      height: .5rem;
      width: .5rem;
      z-index: 9;
    }
    .input-serach{
      position: relative;
      text-align: left;
      border-radius: 20px;
      background-color: #fff;
      width: 90%;
      color: #ababab;
      font-size: .28rem;
      padding: .3rem 0 .3rem 1.3rem;
      display: inline-block;
      border: 0;
      outline: none;
    }
  }
  .banner{
    height: 9rem;
    width: 100%;
    overflow: hidden;
    background-size: cover;
  }
`
