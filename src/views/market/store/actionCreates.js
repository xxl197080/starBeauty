import * as Types from './actionTypes'
import axios from 'axios'



// 获取初始数据，banner图和nav图数据
export const asyncGetInit = () => {
  return (dispatch) => {
    axios.post('http://m.smi170.com/api/mall/channel/getIndexNavigate')
      .then(res => {
        console.log(res)
      })
  }
}
