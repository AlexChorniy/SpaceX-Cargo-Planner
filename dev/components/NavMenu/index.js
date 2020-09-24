import { connect } from 'react-redux';
import { setLink } from '@redux/actions';
import Component from './NavMenu';

export default connect(
    (store) => (
        {
            data: store.dataHandler,
            isLS: store.isLSExist,
        }
    ),
    { setLink },
)(Component);
