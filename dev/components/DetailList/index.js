import { connect } from 'react-redux';
import Component from './DetailList';

export default connect(
    store => (
        {
            data: store.dataHandler,
            isLS: store.isLSExist,
        }
    ),
    {},
)(Component);
