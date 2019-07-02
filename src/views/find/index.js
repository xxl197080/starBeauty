import React from 'react';
import { connect } from 'react-redux';


function Find() {
  return (
    <div>
      <h1>发现页面</h1>
    </div>
  );
}

Find.propTypes = {
};

export default connect()(Find);
