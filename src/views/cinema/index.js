import React from 'react';
import { connect } from 'react-redux';


function Cinema() {
  return (
    <div>
      <h1>影院页面</h1>
    </div>
  );
}

Cinema.propTypes = {
};

export default connect()(Cinema);
