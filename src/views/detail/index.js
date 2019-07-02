import React from 'react';
import { connect } from 'react-redux';


function Detail() {
  return (
    <div>
      <h1>详情页</h1>
    </div>
  );
}

Detail.propTypes = {
};

export default connect()(Detail);
