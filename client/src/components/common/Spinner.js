import React, { Fragment } from 'react';
// import spinner from './spinner.gif';
import spinner from './Spin-1s-200px.gif';

export default () => (
  <Fragment>
    <img src={spinner}
    style={{ width: '200px', margin:'auto', display: 'block' }}alt='Loading...'/>
  </Fragment>
)