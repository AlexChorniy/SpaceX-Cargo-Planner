import { connect } from 'react-redux';
import Component from './SaveButton';
import { setParsedData, isLSExist } from '../../../redux/actions';

export default connect(
    store => (
        {}
    ),
    { setParsedData, isLSExist },
)(Component);
