import {GET_IMG_List} from './actionTypes'
import axios from 'axios'

export const asyncImgList= () => {
  return (dispatch)=>{
    axios.get('http://localhost:3001/findlist')
    .then(res=>{
      console.log(res)
      dispatch(onImgList(res.data))
    })
    }
}
export const onImgList=(list)=>({
  type:GET_IMG_List,
  list
})