import { connect } from 'react-redux';

import {PanelGroup} from './PanelGroup';

const mapStateToProps = state => ({
  panels: state.selects.map(s => ({
    id: s.id,
    name: s.name
  }))
});

export const PanelGroupWrapper = connect(mapStateToProps, null)(PanelGroup);
