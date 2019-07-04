import {GET_IMG_List} from './actionTypes'
import http from '@/utils/http'

export const asyncImgList= () => {
  return (dispatch)=>{
    http.get('http://www.ixingmei.com/api/index.php?act=activitylist&op=index')
    .then(res=>{
      console.log(res)
      dispatch(onImgList(res))
    })
    }
}
export const onImgList=(list)=>({
  type:GET_IMG_List,
  list
})