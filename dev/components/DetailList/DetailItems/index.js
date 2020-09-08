import { connect } from 'react-redux';
import Component from './DetailItems';

export default connect(
    store => (
        {
            data: store.detailList,
        }
    ),
    {},
)(Component);