import React from 'react';
import { connect } from 'react-redux';

function Navbar() {
  return (
    <div>
      <h1>标签栏页</h1>
    </div>
  );
}

Navbar.propTypes = {
};

export default connect()(Navbar);
