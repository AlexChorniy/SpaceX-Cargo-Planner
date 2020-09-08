import { connect } from 'react-redux';

import Component from './ControlPanel';
import { setTextValue } from '../../../redux/actions';

export default connect(
    store => ({}),
    { setTextValue },
)(Component);
