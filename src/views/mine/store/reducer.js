import *as Types from './actionTypes';
var cookie=document.cookie.split(';').reduce((pre, next) => {
  const key = next.split('=')[0];
  const val = next.split('=')[1];
  pre[key] = val;
  return pre
}, {})

const initStore =  cookie["user"]?{ userInfo: cookie, isShow:false }:{ userInfo: null, isShow:false }
export default (state=initStore,action)=>{
  let newState = JSON.parse(JSON.stringify(state));
  if( action.type === Types.LOGIN){
    newState.userInfo = action.value
  }
  if( action.type === Types.IS_SHOW){
      newState.isShow = !newState.isShow
  }
  if( action.type === Types.SIGNIN){
    newState.userInfo = action.value
  }
  return newState
}

