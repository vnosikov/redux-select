import React from 'react';
import { connect } from 'react-redux';

import {toggleCollapse} from '../actions/index';

import {MySelectWrapper} from './MySelectWrapper';


function CollapsiblePanel( {id, name, isOpen, onPanelClick} ) {
  return (
    <div className="panel panel-default">
      <div className="h4 panel-title">
        <a onClick={() => onPanelClick()}>
          Select {name}
        </a>
      </div>
      <div className="my-collapse" style={{height: isOpen? '300px' : '0'}}>
        <MySelectWrapper selectId={id}/>
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
