import {GET_IMG_List} from './actionTypes'

const initState ={
  imgList:[]
}

export default (state=initState,action) => {
  let newState=JSON.parse(JSON.stringify(state))

  if(action.type===GET_IMG_List){
    newState.imgList=action.list
  }
  return newState
}