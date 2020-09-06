import { connect } from 'react-redux';
import Component from './NavMenu'

export default connect(
    store => (
        {
            data: store.dataHandler,
            isLS: store.isLSExist,
        }
    ),
    {},
)(Component);
