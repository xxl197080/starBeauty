import styled from 'styled-components';

export const LoginWrap = styled.div`
  height:100%;
  background:#fff;
  .xm_back {
    width: 100%;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    padding-top: 0.5rem;
    position: relative;
    .back{
    cursor:pointer;
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 4%;
    width: .8rem;
    height: .8rem;
    background: #fff;
    border-color: #FF6300;
    border-width: 0 0 1px 1px;
    border-style: solid;
    transform: rotateZ(45deg);
    z-index: 100;
  }
}
.ul_tab {
    padding: 5% 3%;
    .tabs{
      display:flex;
      li{
        text-align:center;
        flex:1;
        font-size: 0.7rem;
        cursor: pointer;
      }
      .active{
        color: #FF6300;
      }
    }
}
`

export const Logo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    .logo{
      background: #fff url(./img/smi_logo.png) no-repeat;
      height: 4.5rem;
      line-height: 2rem;
      width: 4.5rem;
      background-size: 100%;
    }
`
export const LoginBox =styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  label{
    position:relative;
    span{
      display:block;
    background:#fff;
    width:.6rem;
    height:.6rem;
    transform:rotate(45deg);
    border-left:1px solid #666;
    border-top:1px solid #666;
    }
    .query1{
      position: absolute;
      top: -7px;
      left: 3.5rem;
    }
    .query2{
      position: absolute;
      top: -7px;
      right: 3.5rem;
    }
  }

  input{
    height: 2rem;
    width: 100%;
    margin-bottom:1rem;
    outline: none;
    border-radius: 5px;
    -webkit-appearance: none;
    border: 1px solid #999;
    border: 1;
    padding-left: 3%;
    color: #999;
    font-size: 0.6rem;
    margin-bottom:.8rem;
  }
  button{
    height: 2rem;
    border:0;
    border-radius:5px;
    outline:none;
    font-size: 0.6rem;
    background:#FF6300;
    color:#fff;
    text-align:center;
    line-height:2rem;
  }

  .vcode{
    position:relative;
  }
  .rcode{
    border-radius:0;
    width:3rem;
    border-left:1px solid #999;
    color:#333;
    background:url(./img/timg.jpg) center;
    position:absolute;
    top:0;
    right:0%;
    font-size:.7rem;
    padding:0;
  }
  .other{
    box-sizing:border-box;
    padding-top:2rem;
    span{
      position:relative;
      display:block;
      width: 100%;
      border-bottom:1px solid #999;
      i{
        position:absolute;
        left:50%;
        top:-0.5rem;
        transform:translate(-50%,0);
        padding: 0 2px;
        background:#fff;
        }
      }

    input{
      margin-top:2rem;
      text-align:center;
      color:#fff;
      background:#535353;
    }
  }
`
