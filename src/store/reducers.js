// 引入拆分出去 reducer

import findReducer from '@/views/find/store/reducer.js'
import homeReducer from '@/views/home/store/reducer'

export const find=findReducer
export const home = homeReducer;

