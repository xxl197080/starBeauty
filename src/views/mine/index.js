import React from 'react';
import { connect } from 'react-redux';
import { Header, NewIcon } from './style.js'
function Mine() {
  return (
    <div>
    <Header>
    <NewIcon type="setting" />
    <NewIcon type="ellipsis" />
    </Header>
    </div>
  );
}

Mine.propTypes = {
};

export default connect()(Mine);
