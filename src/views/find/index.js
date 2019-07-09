import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates' 
import {InfoWrap}  from './style'


class Find extends React.Component {
  render(){
    let imgList=this.props.imgList|| []
    return (
         imgList.map(item =>
          {
            return (
              <InfoWrap key={item.id}>
                <div >
                  <img src={item.litpic} alt="烦不烦" style={{width:'100%',height:'27%'}}/>
                  <div className="activity_content">
                    <div className="activity_time">
                      <span>02</span> 
                      <br />
                      <span>3月</span>
                    </div>
                    <div className="activity_detail">
                      <dl>
                        <dt>新人有礼</dt>
                        <dd>开抢时间：2018年3月2日  10:20:37</dd>
                      </dl>
                    </div> 
                    <div className="activity_arrow activity_arrow_yellow">
                      <p className="white_font">进行中</p>
                    </div>
                  </div>
                </div>
                <p style={{
                      height:"2px",
                      width:"100%",
                      background:"rgba(0,0,0,0.1)",
                      marginTop:"25%"
                  }}></p>
              </InfoWrap>
          )})
    );
  }
  componentDidMount(){
    this.props.getImgList()
  }
}

export default connect(({find})=>({
imgList:find.imgList
}),
  dispatch=>({
    getImgList(){
      dispatch(actions.asyncImgList())
    }
  }))(Find);
