import *as Types from './actionTypes';
const initStore ={
  userInfo:null,
  isShow:false
}

export default (state=initStore,action)=>{
  let newState = JSON.parse(JSON.stringify(state));
  if( action.type === Types.LOGIN){
    newState.userInfo = action.value
  }
  if( action.type === Types.IS_SHOW){
      newState.isShow = !newState.isShow
  }
  return newState
}
// var cookies = document.cookie.split(';');
// var cookieObj = cookies.reduce((pre, next) => {
//     const key = next.split('=')[0];
//     const val = next.split('=')[1];
//     pre[key] = val;
//     return pre;
// }, {})
