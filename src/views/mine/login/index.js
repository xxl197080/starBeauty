import React, {Component} from 'react';

export default class Login extends Component{
  constructor (props){
    super(props);
    this.state={
      inputVal:'',
      passWord:''
    }
  }
  render () {
  return (
    <h1>登录页</h1>
  )
  }
}
