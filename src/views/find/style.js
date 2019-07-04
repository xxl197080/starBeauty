import styled from 'styled-components'

export const InfoWrap=styled.div`
   background:#fff;
   height:100%;
  .activity_content {
    background-color: #fff;
    height:20%;
    box-shadow: 13px 13px 13px rgba(0,0,0,0.1);
    margin-bottom: 1.3rem;
    position: relative;
    .activity_time {
    display: inline-block;
    width: 20%;
    text-align: center;
    color: #999;
    font-size: 22px;
    padding-top: 0.5rem;
    float: left;
  };
  
.activity_detail {
    height: 3.6rem;
    margin-top: 3%;
    border-left: 1px solid #ccc;
    width: 79%;
    display: inline-block;
    float: left;
    dl {
    padding-left: 0.8rem;
    max-width: 85%;
    dt {
    line-height: 1;
    font-size: 18px;
    color: #393939;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    };
    dd {
    color: #585858;
    font-size: 14px;
    line-height: 1;
    margin-top: 0.6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
};

}
.activity_arrow_yellow {
    background-position: 0 0;
}
.activity_arrow {
    width: 2.8rem;
    height:2.3rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background-image: url(./img/icon_e.png);
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: 100% auto;
    p {
    font-size: 0.6rem;
    text-align: right;
    transform: rotate(38deg);
    position: absolute;
    right: -0.1rem;
    top: 0.07rem;
    width: 2.6rem;
}
.white_font {
    color: #fff;
    
}
}

.activity_content::before {
    position: absolute;
    content: '';
    width: 1rem;
    height: 1rem;
    background: #fff;
    top: -0.5rem;
    left: 2.4rem;
    z-index: 2;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
};

`