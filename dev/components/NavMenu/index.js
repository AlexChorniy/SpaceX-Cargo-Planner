import { connect } from 'react-redux';
import Component from './NavMenu'

import { setLink } from '@redux/actions';

export default connect(
    store => (
        {
            data: store.dataHandler,
            isLS: store.isLSExist,
        }
    ),
    { setLink },
)(Component);
