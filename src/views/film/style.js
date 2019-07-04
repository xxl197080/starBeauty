import styled from 'styled-components'
import {Tabs} from 'antd'
const {
  TabPane
} = Tabs;
export const FilmWrap = styled.div `
  height:100%;
  box-sizing:border-box;
`

export const HeaderWrap = styled.div `
  background-color: #e76a00;
  background-image: linear - gradient(0 deg, #ff5200, #ff9200 50% , transparent 50% );
  width:100%;
  height:7%;
  text-align:center;
  display:flex;
  padding:0 10px;
  justify-content:space-between;
  position:fixed;
  top:0;
  align-items:center;
  z-index:99`

export const SubHeaderWrap = styled.button`
  color:#fff;
  display: flex;
  align-self: middle;
  border:none;
  text-decoration:none;
  background:transparent;
  .downarrow{
    position:relative;
    top:4px;
  }
`
export const TabsWrap = styled.div`
display:flex;
width:100%;
justify-content: space-between;
padding-top:14%;
  position:fixed;
  top:0;
  z-index:18;
  background:#fff;
  height:13%;
  align-self:center;
  .active{
  border-bottom: 3px solid #e76a00;
  color: #e76a00;
}
` 
export const SubTabsWrap = styled.div`
flex:1 1 50%;
/* height:100%; */
text-align:center;
font-size:17px;
box-sizing:border-box;
`

export const ListWrap = styled.div`
  overflow-y:auto;
  .movie-item {
      width: 94%;
      margin: 0 auto;
      overflow: hidden;
      padding: 3% 0 2% 0;
      border-top: 1px solid #E5E5E5;
      font-size: 18px;
      font-family: microsoft yahei;
      .p-left {
      float: left;
      width: 87px;
      padding-right: 5%;
      img {
      width: 100%;
      height: 100%;
      }
    }
    .p-middle {
      float: left;
      width: 50%;
      .moviename {
      color: #222222;
      font-weight: bold;
      font-size: 13px;
      };
      .explain {
        width:70%;
      color: #727272;
      padding: 5px 0 5px 0;
      font-size: 12px;
      text-overflow:ellipsis;
      white-space:nowrap;
      overflow:hidden;
      }
      .assess {
      color: #737373;
      width: 100%;
      display: inline-block;
      overflow: hidden;
        .stars {
        float: left;
        width: 100px;
        height: 25px;
        background-repeat: no-repeat;
        background-size: 90%;
        };
        .score {
        float: left;
        height: 25px;
        font-size: 12px;
        color: #727272;
        }
    };
    
    }
    .p-right{
      float: right;
      width: 18%;
      padding-top: 34px;
      span {
      display: block;
      width: 90%;
      height: 28px;
      border: 1px solid #fb783d;
      line-height: 28px;
      text-align: center;
      border-radius: 5px;
      font-size: 12px;
      color: #fc8048;
  }
  }`

export const FilmsWrap = styled.div`
padding-top:22%;
overflow-y:auto;
padding-bottom:13%;
`