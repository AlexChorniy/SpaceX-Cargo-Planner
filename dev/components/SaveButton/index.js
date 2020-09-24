import { connect } from 'react-redux';
import { setParsedData, isLSExist } from '@redux/actions';
import Component from './SaveButton';

export default connect(
    () => (
        {}
    ),
    { setParsedData, isLSExist },
)(Component);
