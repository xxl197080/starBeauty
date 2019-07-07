import styled from 'styled-components';
import { Icon } from 'antd';

export const Header = styled.header`
    color:#333;
    height: 1.95rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    display:flex;
    justify-content:space-between;
      border-bottom: 0.05rem solid #ccc;
      span{
        font-size: 0.8rem;
        line-height: 1.95rem;
        height: 1.95rem;
      }
`
export const Menu = styled.div`
    position: absolute;
    top: 1.7rem;
    right: 0.2rem;
    width: 5rem;
    ul{
      background: rgba(85,85,85,0.55);
      border-radius: 0.2rem;
      margin:0;
      .arrow{
        display: block;
        float: right;
        margin-top:-0.8rem;
        margin-right: 0.4rem;
        font-size: 0;
        line-height: 0;
        border-width: 0.4rem;
        border-color: transparent transparent rgba(85,85,85,0.55) transparent;
        border-style: dashed dashed solid dashed;
      }
      a{
        display:flex;
        justify-content:center;
        align-items:center;
        li{
          padding: 0.5rem;
          font-size: 0.6rem;
          color: #FFF !important;
        }
       }
       .border{
          border-bottom:1px solid #ccc;
          border-top:1px solid #ccc;
        }

    }
`

export const NewIcon = styled(Icon)`
  color:#333;
  cursor:pointer;
  font-size: 1rem;
  padding: 0.4775rem;
`
export const List = styled.ul`
  li{
    position: relative;
    z-index: 1;
    display: block;
    clear: both;
    overflow: hidden;
    padding: 0.5rem 0;
    line-height: 1rem;
    h4{
      float: left;
    margin-left: 0.3rem;
    font-size: 0.7rem;
    line-height: 1rem;
    color: #333;
    }
    h6{
      float: left;
    clear: both;
    margin-left: 0.3rem;
    font-size: 0.55rem;
    line-height: 1rem;
    color: #888;
    }
    i{
      position: absolute;
    z-index: 1;
    top: 50%;
    right: 0.5rem;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    margin-top: -0.3rem;
    }
  }
`
