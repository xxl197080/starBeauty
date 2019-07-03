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
    }
    .header-inp{
      flex: 1;
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
`
