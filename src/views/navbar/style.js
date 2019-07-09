import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd'

export const MenuWrap=styled.div`
  padding:5px 0;
  border-top:1px solid #ccc;
  width:100%;
  position:fixed;
  bottom:0;
  display:flex;
  justify-content:space-around;
  background:#fff;

`

export const SubMenuWrap = styled(NavLink)`
  i{
    font-size: 1rem;
    margin-bottom: 3px;
  }
  display: flex;
  font-size: 0.6rem;
  flex-direction: column;
   color: #7f7f7f;
  .active{
    color: #7f7f7f
  }
`
export const IconWrap = styled(Icon) `
  font-size:18px;
`
