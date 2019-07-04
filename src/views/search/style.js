import styled from 'styled-components'

export const SearchWrap = styled.div`
  height: 100%;
  background-color: #f5f5f5;
  .header{
    display: flex;
    background: #F8F8F8;
    height: 1.95rem;
    position: absolute;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    border-bottom: 0.05rem solid #d9d9d9;
    .header-l{
      width: 1.95rem;
      height: 1.95rem;
      .goback{
        display: block;
        width: 1rem;
        height: 1rem;
        padding: 0.4775rem
      }
    }
    .header-inp{
      flex: 1;
      display: block;
      height: 1.4rem;
      border: solid 0.05rem #DEDEDE;
      border-radius: 0.2rem;
      margin-top: 0.275rem;
      background-color: #FFF;
      text-align: left;
      position: relative;
      .search-inp{
        border: 0;
        outline: none;
      }
      .search-icon{
        width: 1rem;
        height: 1rem;
        margin: 0.2rem 0.1rem;
        opacity: 0.5;
        font-size: 16px;
      }
    }
    .header-r{
      width: 2.5rem;
      height: 1.95rem;
      text-align: center;
      padding: 0;
      font-size: 0.7rem;
      line-height: 1.95rem;
      color: #333;
    }
  }
  .main{
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 10rem;
    height: 8.2rem;
    margin: -3rem 0 0 -5rem;
    text-align: center;
    .main-img{
      display: inline-block;
      width: 3rem;
      height: 3rem;
      padding: 0.4rem;
      margin: 0 auto;
      background-color: #DDD;
      border-radius: 50%;
      i{
        display: block;
        width: 100%;
        height: 100%;
        background: url('./img/mcc.png') no-repeat center center;
        background-size: 80%;
      }
    }
    p{
      display: block;
      height: 1rem;
      margin-top: 0.75rem;
      margin-bottom: 0.25rem;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`
