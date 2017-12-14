import React from 'react';
import { connect } from 'react-redux';

import { changeColor } from '../actions/index';

function ColoredRectangle({color, onClick}) {
  return <div className="colored-rectangle" onClick={() => onClick()}
    style={{backgroundColor: color}}></div>;
}
const mapStateToProps = (state) => ({
  color: state.color
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(changeColor());
  }
});
export default ColoredRectangle = connect(mapStateToProps, mapDispatchToProps)(
  ColoredRectangle
);
