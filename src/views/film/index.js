import React from 'react';
import { connect } from 'react-redux';

function Film() {
  return (
    <div>
      <h1>电影页</h1>
    </div>
  );
}

Film.propTypes = {
};

export default connect()(Film);
