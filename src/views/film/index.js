import React from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrap,
  FilmWrap,
  SubHeaderWrap,
  TabsWrap,
  SubTabsWrap
} from './style'
import {Icon,Tabs } from 'antd'
import './index.less'
const {
  TabPane
} = Tabs;

function callback(key) {
  console.log(key);
}

function  Film () {
    return ( 
    <FilmWrap >
      <HeaderWrap >
        <SubHeaderWrap > 深圳 
          <Icon type = "down"
        className = "downarrow" />
        </SubHeaderWrap> 
        <SubHeaderWrap > 影院 
        </SubHeaderWrap> 
      </HeaderWrap> 
      <TabsWrap defaultActiveKey = "1" tabBarGutter='100px'>
        <SubTabsWrap tab = "正在上映" key = "1" className='subtabs'>
          Content of Tab Pane 1 
        </SubTabsWrap>  
        <SubTabsWrap tab = "即将上映" key = "2" className='subtabs'>
          Content of Tab Pane 2 
        </SubTabsWrap>  
      </TabsWrap >
    </FilmWrap>
    );
  }
  




export default connect()(Film);



