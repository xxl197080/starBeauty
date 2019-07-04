import styled from "styled-components";

export const SearchWrap = styled.div`
  height: 100%;
  background-color: #f5f5f5;
  .header {
    display: flex;
    background: #f8f8f8;
    height: 2rem;
    position: fixed;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    border-bottom: 0.05rem solid #d9d9d9;
    .header-l {
      width: 1.95rem;
      height: 1.95rem;
      .goback {
        display: block;
        width: 1rem;
        height: 1rem;
        padding: 0.4775rem;
      }
    }
    .header-inp {
      flex: 1;
      display: block;
      height: 1.4rem;
      border: solid 0.05rem #dedede;
      border-radius: 0.2rem;
      margin-top: 0.275rem;
      background-color: #fff;
      text-align: left;
      position: relative;
      .search-inp {
        border: 0;
        outline: none;
      }
      .search-icon {
        width: 1rem;
        height: 1rem;
        margin: 0.2rem 0.1rem;
        opacity: 0.5;
        font-size: 16px;
      }
    }
    .header-r {
      display: block;
      width: 2.5rem;
      height: 1.95rem;
      text-align: center;
      padding: 0;
      font-size: 0.7rem;
      line-height: 1.95rem;
      color: #333;
    }
  }
  .main {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 10rem;
    height: 8.2rem;
    margin: -3rem 0 0 -5rem;
    text-align: center;
    .main-img {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      padding: 0.4rem;
      margin: 0 auto;
      background-color: #ddd;
      border-radius: 50%;
      i {
        display: block;
        width: 100%;
        height: 100%;
        background: url("./img/mcc.png") no-repeat center center;
        background-size: 80%;
      }
    }
    .p {
      display: block;
      height: 1rem;
      margin-top: 0.75rem;
      margin-bottom: 0.25rem;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
  .detail-nav {
    display: block;
    width: 100%;
    height: 2rem;
    background: rgba(255, 255, 255, 0.95);
    border-bottom: solid 0.05rem #ccc;
    position: fixed;
    z-index: 2;
    top: 2rem;
    left: 0;
    right: 0;
    ul {
      height: 100%;
      display: block;
      width: 85%;
      float: left;
      margin: 0;
      li {
        height: 100%;
        line-height: 2rem;
        text-align: center;
        vertical-align: top;
        display: inline-block;
        width: 40%;
      }
    }
    .btn {
      float: right;
      text-align: center;
      display: block;
      width: 15%;
      height: 2rem;
      line-height: 2rem;
      font-size: 22px;
      border-left: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
  .product-list {
    padding-top: 4rem;
    overflow-x: hidden;
    overflow-y: auto;
    ul{
      margin: 0;
    }
    .goods-list{
      height: 5.8rem;
      padding: 0 0.38rem 0 0;
      border-bottom: solid 0.05rem #EEE;
      display: flex;
      .goods-img{
        width: 5.5rem;
        height: 5.5rem;
        padding: 0.38rem;
        flex-shrink: 0;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .goods-text{
        flex: 1;
        .goods-name{
          margin-top: 0.38rem;
          width: 100%;
          font-size: 0.65rem;
          line-height: 0.8rem;
          height: 1.6rem;
          overflow: hidden;
        }
        .goods-detail{
          width: 100%;
          font-size: 0.5rem;
          color: #999;
          line-height: 0.9rem;
          height: 0.9rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .goods-pirce{
          color: #EC5464;
          font-size: 0.8rem;
          line-height: 0.9rem;
        }
      }
    }
  }
`;
