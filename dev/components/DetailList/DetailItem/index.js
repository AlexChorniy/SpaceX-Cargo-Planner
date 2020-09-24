import { connect } from 'react-redux';
import { changeItemBoxVal } from '@redux/actions';
import Component from './DetailItem';

export default connect(
    (store) => (
        {
            data: store.detailList,
        }
    ),
    { changeItemBoxVal },
)(Component);
