import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';
 class Auth extends Component {
  render() {
    // let {} = this.props;
    console.log(this.props)
    const { component: Component, userInfo, ...rest} = this.props
    return (
      <Route {...rest}
      render={routerProps=>{
        if(userInfo){
          return <Component {...routerProps}/>
        }else{
          return (
            <Redirect to={{
              pathname: '/login'
            }}/>
          )
        }
      }}/>
    )
  }
}

export default connect(
  (state)=>{
    return state.mine
  },null
  )(Auth)
