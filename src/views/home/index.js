import React from 'react';
import {
  connect
} from 'react-redux';


function Home() {
  return ( < div >
    <h1 > 首页 </h1> 
    </div>
  );
}

Home.propTypes = {};

export default connect()(Home);
