import * as Types  from './actionTypes'
import Axios from 'axios';

export const asyncNowFilmList=()=>{
  return(
    (dispatch)=>{
      Axios.get('http://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6168537',{
        headers:{
         "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15593007414398046512692"}',
        "X-Host": "mall.film-ticket.film.list"
        }
      }).then(res=>{
        dispatch(onNowFilmList(res.data.data.films))
      })
    }
  )
}
export const onNowFilmList=(list)=>({
  type:Types.GET_NOW_FILM_LIST,
  list
})
export const asyncSoonFilmList=()=>{
  return(
    (dispatch)=>{
      Axios.get('http://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=1512667',{
        headers:{
         "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15593007414398046512692"}',
        "X-Host": "mall.film-ticket.film.list"
        }
      }).then(res=>{
        dispatch(onSoonFilmList(res.data.data.films))
      })
    }
  )
}
export const onSoonFilmList=(list)=>({
  type:Types.GET_SOON_FILM_LIST,
  list
})
export const chgBools=(key)=>({
  type:Types.CHG_BOOL,
  key
})

// export const asyncFilmList=(key)=>({
//   if(key==="1"){

//   }
// })