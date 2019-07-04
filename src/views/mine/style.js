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
export const NewIcon = styled(Icon)`
  cursor:pointer;
  font-size: 1rem;
  padding: 0.4775rem;
`
export const ScrollBody = styled.div`
  background:#f5f5f5;
  padding-bottom:2.5rem;
  .member{
    animation: changeBg 20s infinite;
    background-image:url(http://m.ixingmei.com/images/member_top_bg.png);
    background-color: #ED5564;
    background-size: cover;
    text-align: center;
    width: 100%;
    height: 11rem;
    position: relative;
    z-index: 1;
    .member-info:before {}
    .member-info {
      width: 12rem;
      height: 6rem;
      margin: -3.5rem 0 0 -6rem;
      position: absolute;
      z-index: 1; top: 50%;
      left: 50%;
      animation: memberInfoDown 1000ms  ease-in;
      -webkit-animation: memberInfoDown 1000ms ease-in;
      .user-avatar{
        background-color: #FFF;
        width: 4rem;
        height: 4rem;
        margin: 0 auto;
        border-radius: 100%;
        img{
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }
      .user-name{
        color:#fff;
        font-weight: lighter;
        font-size: 0.8rem;
        line-height: 1.2rem;
        height: 1.2rem;
        position: relative;
        z-index: 1;
      }
      .user-level{
        height: 7.5vmin;
        display:inline-block;
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
    }

    @keyframes  memberInfoDown
    {
    0% { top: -50%;}
    30% { top: -10%}
    75% { top: 55%}
    85% { top: 47%}
    95% { top: 52%}
    100% { top: 50%;}
    }
  }
  @keyframes changeBg{
0%{background-color:#ED5564;}
10%{background-color:#FB6E52;}
20%{background-color:#FFCE55;}
30%{background-color:#A0D468;}
40%{background-color:#48CFAE;}
50%{background-color:#4FC0E8;}
60%{background-color:#5D9CEC;}
70%{background-color:#AC92ED;}
80%{background-color:#EC87BF;}
90%{background-color:#ED5564;}
}
`
export const Member = styled.div`
  dl{
    margin-top: 0.5rem !important;
    background: #fff;
    dt{
      line-height: 0.9rem;
      display: flex;
      justify-content:space-between;
      padding: 0.5rem 0.7rem 0.5rem 0;
      margin-left: 0.5rem;
      border-bottom: solid 0.05rem #EEE;
      font-size: 0.7rem;
      line-height: 1rem;
      color: #111;
    }
    dd{
      display:flex;
      text-align: center;
      padding: 0.5rem 0 0.2rem 0;
      a{
        display:flex;
        flex-direction:column;
        flex: 20%;
        align-items:center;
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
