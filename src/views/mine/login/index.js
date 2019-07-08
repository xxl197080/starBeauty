import React, {Component, Fragment} from 'react';
// import { NavLink } from 'react-router-dom';
import { message } from 'antd';
import { LoginWrap, Logo, LoginBox } from './style';
import { connect } from 'react-redux';
import * as actions from '../store/actionCreates';
 class Login extends Component{
  constructor (props){
    super(props);
    this.state={
      inputVal:'',
      passWord:'',
      type:'den',// 选择登录
      userName:'',
      code:'',//输入的验证码
      vcode:[],//验证码
      disabled:true
    }
  }
  back =() => {
    this.props.history.goBack()
  }
  active =(e)=>{
    this.refs.den.className=""
    this.refs.zhu.className=""
    let type=e.target.id;
    this.setState({
      inputVal:'',
      passWord:'',
      userName:'',
      code:'',//输入的验证码
      disabled:true,
      type: type
    })
    e.target['className']="active"
  }
clearLogin =()=>{
  this.props.login({user:this.state.userName});
  this.refs.userName="";
  this.refs.vcode="";
}
//  检查手机号
check=()=>{
  if(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.state.userName)){
   this.refs.userName.style.color="green"
  }else{
    message.error('请输入正确的手机号！',0.5);
      this.tranCode();
      this.setState({
        userName: ""
      })
  }
}
//  输入账号、验证账号有效性
input=(e)=>{
  var number=e.target.value.replace(/[^\d]/ig,"");
  this.setState({userName: number},
    ()=>{
      if(this.state.userName&&this.state.code===this.state.vcode.join('')){
        this.setState({
          disabled:false
        })
      }else{
        this.setState({
          disabled:true
        });
      }
    })
}
   //  写入输入的验证码,并校验
   code=(e)=>{
    this.setState({
      code: e.target.value
    });
    if(e.target.value.toLowerCase() === this.state.vcode.join('').toLowerCase()){
      if(this.state.userName){
        this.setState({
          disabled:false
        })
      }else{
        this.setState({
          disabled:true
        });
      }
    }
  }
  //  产生验证码
  putCode = () => {
      let arr=[];
      let _code;
      for(let i=0;i<6;i++){
        _code=Math.floor(Math.random()*(75))+48;
        // eslint-disable-next-line no-mixed-operators
        if(_code>=58 && _code<=64 || _code>=91 &&_code<=96){
          i--;
        }else{
          arr[i]=String.fromCharCode(_code)
        }
      }
      this.setState({
        vcode: arr
      })

  }
  //  改变验证码
  tranCode = () => {
    this.putCode()
  }
  //  第1次加载验证码
  componentDidMount(){
    this.putCode()
  }
  loginbox=()=>{
    //  登录
      if( this.state.type==="den"){
        return (
          <Fragment>
        <label>
          <span className="query1"></span>
          <input type="text" onChange={this.input} value={this.state.userName} onBlur={this.check} maxLength="11" placeholder="请输入账号" ref="userName"/>
        </label>
        <label className="vcode">
          <input type="text"  onChange={this.code}  value={this.state.code}  maxLength="6" placeholder="请输入验证码（6位不区分大小写）" ref="vcode"/>
          <button type="text" className="rcode" onClick={this.tranCode} >{
          this.state.vcode.map((item,index)=>{
            let c=`${item}73`
            // let g=Math.floor(Math.random()*180)  旋转角度
            return <i key={index}
            style={{color:`#${c}`,
                fontWeight:'999'
              }}>{item}</i>
          })
          }</button> {/* 验证码*/}
        </label>
        <button
        onClick={this.clearLogin}
        disabled={this.state.disabled}
        style={{background: this.state.disabled? '#ccc':'#FF6300'}}>确定</button>
        <div className="other">
          <span><i>其他方式登录</i></span>
        <input type="button" defaultValue="账号密码登录"/>
        </div>
          </Fragment>
        )
      }else{
        //  注册
        return(
        <Fragment>
          <label>
          <span className="query2"></span>
          <input type="text" onChange={this.input} value={this.state.userName} maxLength="11"
          ref="userName" placeholder="请输入手机号" onBlur={this.check}/>
        </label>
        <label className="vcode">
          <input type="text"  onChange={this.code}  value={this.state.code} placeholder="请输入验证码（6位不区分大小写）"/>
          <button type="button" className="rcode" onClick={this.tranCode} >{
            this.state.vcode.map((item,index)=>{
              let c=`${item}73`
              // let g=Math.floor(Math.random()*180)  旋转角度
              return <i key={index}
              style={{color:`#${c}`,
                  fontWeight:'999'
                }}>{item}</i>
            })
          }</button> {/* 验证码*/}
        </label>
        <button
        disabled={this.state.disabled}
        style={{background: this.state.disabled? '#ccc':'#FF6300'}}
        onClick={this.props.signin.bind(null,{user:this.state.userName})}
        >下一步</button>
        </Fragment>
        )
      }
  }
  render () {
  return (
    <LoginWrap>
      <header>
        <div className="xm_back">
          <span className="back" onClick={this.back}></span>
        </div>
      </header>
      <Logo><div className="logo"></div></Logo>
      <section className="ul_tab">
      <ul className="tabs" onClick={this.active}>
        <li className="active" ref="den" id="den">登录</li>
        <li ref="zhu" id="zhu">注册</li>
      </ul>
      <LoginBox>
        {
          this.loginbox()
        }
      </LoginBox>
    </section>
    </LoginWrap>
  )
  }
}

export default connect(
  null,
  (dispatch,props)=>({
    login(value){
      dispatch(actions.onLogin(value,props))
    },
    signin(value){
      dispatch(actions.onSignin(value,props))
    }
  })
)(Login)
