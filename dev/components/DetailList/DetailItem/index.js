import { connect } from 'react-redux';
import Component from './DetailItem';

export default connect(
    store => (
        {
            data: store.detailList,
        }
    ),
    {},
)(Component);