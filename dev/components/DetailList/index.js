import { connect } from 'react-redux';
import Component from './DetailList';

export default connect(
    (store) => (
        {
            data: store.detailList,
            isLS: store.isLSExist,
        }
    ),
    {},
)(Component);
