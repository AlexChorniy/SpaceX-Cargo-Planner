import { connect } from 'react-redux';

import { setTextValue } from '@redux/actions';
import Component from './ControlPanel';

export default connect(
    () => ({}),
    { setTextValue },
)(Component);
