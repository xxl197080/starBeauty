// 引入拆分出去 reducer

import findReducer from '@/views/find/store/reducer'
import homeReducer from '@/views/home/store/reducer'
import mineReducer from '@/views/mine/store/reducer'

export const find = findReducer;
export const home = homeReducer;
export const mine = mineReducer;

