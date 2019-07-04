import * as Types from './actionTypes';


export const show = value  => ({
  type: Types.IS_SHOW,
  value
})
//  登录
export const onLogin = ()=>({
  type: Types.LOGIN
})

export const asyncLogin = (value, props) => {

}
