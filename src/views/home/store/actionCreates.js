import * as Types from './actionTypes'
import http from '@/utils/http'
import axios from 'axios'

export const getBannerList = (list) => ({
  type: Types.GET_BANNER_LIST,
  list
})
export const getMovieList = (list) => ({
  type: Types.GET_MOVIE_LIST,
  list
})
export const getGoodList = (list) => ({
  type: Types.GET_GOOD_LIST,
  list
})
export const asyncGetState = () => {
  return (dispatch) => {
    http.get('http://www.ixingmei.com/mobile/index.php?act=index')
      .then(res => {
        // console.log(res.datas)
        let bannerList = res.datas[0].adv_list.item
        let movieList = res.datas[1].home3
        let goodList = res.datas[2].home3
        dispatch(getBannerList(bannerList))
        dispatch(getMovieList(movieList))
        dispatch(getGoodList(goodList))
      })
  }
}

export const getNavList = (list) => ({
  type: Types.GET_NAV_LIST,
  list
})

export const asyncGetNavList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/nav')
      .then(res => {
        // console.log(res)
        dispatch(getNavList(res.data))
      })
  }
}
