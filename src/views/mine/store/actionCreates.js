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
    message.success("登录成功");
      var d = new Date();
      d.setTime(d.getTime()+(1*24*60*60*1000));
      var expires = "expires="+d.toGMTString();
      document.cookie=`user=${value.user};${expires};`
    })(value);
    dispatch({type: Types.LOGIN, value});
            props.history.replace('/home');
  })
  .catch(err=>{
    alert(err)
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
                  return Promise.reject('未找到该账号!')   
              }
    })
  .then(res=>{(()=>{
    message.success("注册成功");
      var d = new Date();
      d.setTime(d.getTime()+(1*24*60*60*1000));
      var expires = "expires="+d.toGMTString();
      document.cookie=`user=${value.user};${expires};`
    })(value);
    dispatch({type: Types.SIGNIN,
        value});
            props.history.replace('/login');
  })
  .catch(err=>{
    alert(err)
  })}

}
