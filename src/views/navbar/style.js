import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd'

export const MenuWrap=styled.div`
padding-top:5px;
border-top:1px solid #ccc;
width:100%;
position:fixed;
bottom:0;
display:flex;
justify-content:space-around;
  
`

export const SubMenuWrap = styled(NavLink)
`
  display: flex;
  flex-direction: column;
   color: #7f7f7f;
  .active{
    color: #7f7f7f
  }
`
export const IconWrap = styled(Icon) `
  font-size:18px;
`