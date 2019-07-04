import React from 'react';
import { connect } from 'react-redux';
import { SearchWrap } from './style'

class Search extends React.Component {
  render () {
    return (
      <SearchWrap>
        <header className="header">
          <div className="header-l"></div>
          <div className="header-inp"></div>
          <div className="header-r"></div>
        </header>
      </SearchWrap>
    );
  }

}


export default connect()(Search);
