import { connect } from 'react-redux';

import { isLSExist } from '@redux/actions';
import Component from './LoadButton';

export default connect(
    () => ({}),
    { isLSExist },
)(Component);
