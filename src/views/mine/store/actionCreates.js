import * as Types from './actionTypes';


export const show = value  => ({
  type: Types.IS_SHOW,
  value
})

//  登录
export const onLogin = (value,props)=>{
  return (dispatch)=>{fetch(`http://localhost:3001/userInfo`)
  .then(response=> response.json())
  .then(res=>{
    (()=>{
      var d = new Date();
      d.setTime(d.getTime()+(1*24*60*60*1000));
      var expires = "expires="+d.toGMTString();
      document.cookie=`user=${value.user};${expires};`
    })(value);
    dispatch({type: Types.LOGIN, value});
    console.log(props)
            props.history.replace('/home');
  })
  .catch(err=>{
    alert(err)
    return{}})}
}


//  注册
export const onSignin =(value) =>{
  return {
    type: Types.SIGNIN,
    value
  }
}
