import * as Types from './actionTypes'
import http from '@/utils/http'
import axios from 'axios'

export const getBannerList = (list) => ({
  type: Types.GET_BANNER_LIST,
  list
})

export const asyncGetState = () => {
  return (dispatch) => {
    http.get('http://www.ixingmei.com/mobile/index.php?act=index')
      .then(res => {
        console.log(res.datas)
        let bannerList = res.datas[0].adv_list.item
        dispatch(getBannerList(bannerList))
      })
  }
}

export const getNavList = (list) => ({
  type: Types.GET_NAV_LIST,
  list
})

export const asyncGetNavList = () => {
  console.log(1111)
  return (dispatch) => {
    axios.get('http://localhost:3001/nav')
      .then(res => {
        console.log(res)
        dispatch(getNavList(res.data))
      })
  }
}
