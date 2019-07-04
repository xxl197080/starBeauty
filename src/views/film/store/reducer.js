import * as Types  from './actionTypes'

const initState={
  nowFilmList:[],
  soonFilmList:[],
  keyList:['1','2'],
  bool: '1'
}

export default (state=initState,action)=>{
  let newState =JSON.parse(JSON.stringify(state))
  if(action.type===Types.GET_NOW_FILM_LIST){
    newState.nowFilmList=action.list
  }
  if(action.type===Types.GET_SOON_FILM_LIST){
    newState.soonFilmList=action.list
  }
  if(action.type===Types.CHG_BOOL){
    newState.bool=action.key
  }
  return newState
}