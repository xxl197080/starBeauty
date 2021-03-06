import styled from 'styled-components';
import { Icon } from 'antd';

export const Header = styled.header`
    color:#fff;
    height: 1.95rem;
    position: absolute;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    display:flex;
    justify-content:space-between;
    .top{
      background: #F8F8F8;
      border-bottom: 0.05rem solid #d9d9d9;
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
  color:#fff;
  cursor:pointer;
  font-size: 1rem;
  padding: 0.4775rem;
`
export const ScrollBody = styled.div`
         a {
           color: #fff;
         }
         background: #f5f5f5;
         height: 100%;
         margin-bottom: 50px;
         .member {
           animation: changeBg 20s infinite;
           background-image: url(http://m.ixingmei.com/images/member_top_bg.png);
           background-color: #ed5564;
           background-size: cover;
           text-align: center;
           width: 100%;
           height: 11rem;
           position: relative;
           z-index: 1;
           .member-collect {
             font-size: 0;
             height: 3rem;
             background: rgba(0, 0, 0, 0.1);
             position: absolute;
             bottom: 0;
             left: 0;
             right: 0;
           }
           .member-info {
             width: 12rem;
             height: 6rem;
             margin: -3.5rem 0 0 -6rem;
             position: absolute;
             z-index: 1;
             top: 50%;
             left: 50%;
             animation: memberInfoDown 1000ms ease-in;
             -webkit-animation: memberInfoDown 1000ms ease-in;
             .to-login{
               font-size: 0.9rem;
             }
             .user-avatar {
               background: #fff;
               width: 4rem;
               height: 4rem;
               margin: 0 auto;
               border-radius: 100%;
               img {
                 width: 100%;
                 height: 100%;
                 border-radius: 100%;
               }
             }
             .user-name {
               color: #fff;
               font-weight: lighter;
               font-size: 0.8rem;
               line-height: 1.2rem;
               height: 1.2rem;
               position: relative;
               z-index: 1;
             }
             .user-level {
               height: 7.5vmin;
               display: inline-block;
               padding-right: 14px;
               font-size: 3.5vmin;
               color: #fff;
               line-height: 7.5vmin;
               border-radius: 25px;
               background-color: #fe9358;
               background-repeat: no-repeat;
               background-size: 3.7vmin auto;
               background-position: 14px center;
               border: 1px solid #fff;
               box-sizing: border-box;
             }
             // 未登录
             .default-avatar {
               background-color: rgba(0, 0, 0, 0.5);
               background-image: url(./img/member_w.png);
               background-repeat: no-repeat;
               background-position: 50% 50%;
               background-size: 60%;
               width: 4rem;
               height: 4rem;
               margin: 0 auto;
               border-radius: 100%;
             }
           }

           @keyframes memberInfoDown {
             0% {
               top: -50%;
             }
             30% {
               top: -10%;
             }
             75% {
               top: 55%;
             }
             85% {
               top: 47%;
             }
             95% {
               top: 52%;
             }
             100% {
               top: 50%;
             }
           }
         }
         @keyframes changeBg {
           0% {
             background-color: #ed5564;
           }
           10% {
             background-color: #fb6e52;
           }
           20% {
             background-color: #ffce55;
           }
           30% {
             background-color: #a0d468;
           }
           40% {
             background-color: #48cfae;
           }
           50% {
             background-color: #4fc0e8;
           }
           60% {
             background-color: #5d9cec;
           }
           70% {
             background-color: #ac92ed;
           }
           80% {
             background-color: #ec87bf;
           }
           90% {
             background-color: #ed5564;
           }
         }
       `;
// mine页
export const Member = styled.div`
  dl{
    margin-top: 0.5rem !important;
    background: #fff;
    dt{
      line-height: 1rem;
      display: flex;
      justify-content:space-between;
      padding: 0.5rem 0.7rem 0.5rem 0;
      margin-left: 0.5rem;
      border-bottom: solid 0.05rem #EEE;
      font-size: 0.7rem;
      color: #111;
      h2{
        margin:0;
      }
    }
    dd{
      display:flex;
      text-align: center;
      margin:0;
      padding: 0.5rem 0 0.2rem 0;
      a{
        display:flex;
        flex-direction:column;
        flex: 20%;
        align-items:center;
        font-size: 0.6rem;
        i{
          font-size:1rem;
          padding-bottom:0.5rem;
        }
        p{
        margin:0;
        color:#8a8a8a
        }
      }

    }
  }
`
