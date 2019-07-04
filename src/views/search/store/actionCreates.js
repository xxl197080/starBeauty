import * as Types from './actionTypes'
import http from '@/utils/http'

// 获取商品数据
export const asyncGetGoodsList = (inputVal) => {
  return dispatch => {
    http.get("http://www.ixingmei.com/mobile/index.php", {
      params: {
        act:"goods",
        op:"goods_list",
        page:10,
        curpage:1,
        keyword: inputVal
      }
    }).then(res =>{
      dispatch(getGoodsList(res.datas.goods_list));
    })
  }
}
// 把获取到的数据添加到仓库中
export const getGoodsList = (list) => {
  return (dispatch) => dispatch({
    type: Types.GET_SEARCH_LIST,
    list
  })
}

// 修改 inputVal 的值
export const onChgInputVal = (value) => {
  return dispatch => dispatch({
    type: Types.CHG_INPUT_VAL,
    value
  })
}
