import * as Types from './actionTypes'

const initState = {
  bannerList: [], // 轮播图数据
  navList: [], // nav 菜单数据
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === Types.GET_BANNER_LIST) {
    newState.bannerList = action.list
  }
  if (action.type === Types.GET_NAV_LIST) {
    newState.navList = action.list
  }

  return newState;
}
