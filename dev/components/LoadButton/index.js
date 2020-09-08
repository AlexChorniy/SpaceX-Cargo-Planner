import { connect } from 'react-redux';

import Component from './LoadButton';
import { isLSExist } from '@redux/actions';


export default connect(
    store => ({}),
    { isLSExist },
)(Component);
