import React from 'react';
import { connect } from 'react-redux';


function Mine() {
  return (
    <div>
      <h1>我的页面</h1>
    </div>
  );
}

Mine.propTypes = {
};

export default connect()(Mine);
