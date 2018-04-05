import React, { Component } from 'react';
// import {Link} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item">
        <div className="content" onClick={()=>{
          BrowserRouter.push('/item/123');
        }} />
      </div>
    );
  }
}

export default Item;
