import styled from 'styled-components'
import {Tabs} from 'antd'
const {
  TabPane
} = Tabs;
export const FilmWrap = styled.div `
height:100%;
padding-bottom:50px;
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
align-items:center
`

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
export const TabsWrap = styled(Tabs)`
display:flex;
width:100%;
justify-content:space-between;
.subtabs{
width:100%;
text-align:center;
display:flex;
justify-content:center;
`

export const SubTabsWrap = styled(TabPane)`


`