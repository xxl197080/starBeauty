import * as Types from './actionTypes';
import { message } from 'antd';

export const show = value  => ({
  type: Types.IS_SHOW,
  value
})

//  登录
export const onLogin = (value,props)=>{
  return (dispatch)=>{fetch(`http://localhost:3001/userInfo/${value.user}`)
    .then(response => {
              if (response.ok) {
                  return response.json()   
              }else {
                  return Promise.reject('未找到该账号!')   
              }
    })
  .then(res=>{(()=>{
    message.success("登录成功",0.5);
      var d = new Date();
      d.setTime(d.getTime()+(1*24*60*60*1000));
      var expires = "expires="+d.toGMTString();
      document.cookie=`user=${value.user};${expires};`
    })(value);
    dispatch({type: Types.LOGIN, value});
            props.history.replace('/mine');
  })
  .catch(err=>{
    message.error(err,1.5)
  })}
}


//  注册
export const onSignin =(value,props) =>{
  return (dispatch)=>{fetch(`http://localhost:3001/userInfo`,{
    method:'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      id:value.user,
      user:value.user
    })
  })
    .then(response => {
              if (response.ok) {
                  return response.json()   
              }else {
                  return Promise.reject(`该账号已经存在，不允许重复注册!请确认输入的手机号`)   
              }
    })
  .then(res=>{(()=>{
    message.success("注册成功/已自动登录");
      var d = new Date();
      d.setTime(d.getTime()+(1*24*60*60*1000));
      var expires = "expires="+d.toGMTString();
      document.cookie=`user=${value.user};${expires};`
    })(value);
    dispatch({type: Types.SIGNIN,
        value});
            props.history.replace('/mine');
  })
  .catch(err=>{
    message.error(err,2)
  })}

}
