import React from 'react';
import { connect } from 'react-redux';
import store from '../config/store';

import {toggleCollapse} from '../actions/index';


function CollapsiblePanel( {id, name, isOpen, onPanelClick} ) {
  return (
    <div className="panel panel-default" data-id={id}>
      <div className="h4 panel-title">
        <a onClick={() => onPanelClick()}>
          Select {name}
        </a>
      </div>
      <div className="my-collapse" style={{height: isOpen? '150px' : '0'}}>
      <div className="panel-body">
        <p>addj</p>
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.selects.find(s => s.id === ownProps.id).isOpen
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPanelClick: () => {
      dispatch(toggleCollapse(ownProps.id));
    }
  }
}

export default CollapsiblePanel = connect(mapStateToProps, mapDispatchToProps)(
  CollapsiblePanel
);
