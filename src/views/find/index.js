import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates' 


class Find extends React.Component {
  render(){
    return (
      <div>
         <img alt="烦不烦" src="http://img2.ixingmei.com/uploads/allimg/180302/1858192-1P3021021020-L.jpg" style={{'height':'18%','width':'100%'}} />
          {/* {this.props.imgList.map(item =>
          {
            return (
              <div>
                <img src={item.litpic} alt="烦不烦" style={{}}/>
                <div class="activity_content">
                  <div class="activity_time">
                    <span>02</span> 
                    <br />
                    <span>3月</span>
                  </div>
                  <div class="activity_detail">
                    <dl>
                      <dt>新人有礼</dt>
                      <dd>开抢时间：2018年3月2日  10:20:37</dd>
                    </dl>
                  </div> 
                  <div class="activity_arrow activity_arrow_yellow">
                    <p class="white_font">进行中</p>
                  </div>
                </div>
              </div>
          )})} */}
          
      </div>
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
