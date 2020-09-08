import { connect } from 'react-redux';
import Component from './DetailItem';

import { changeItemBoxVal } from '@redux/actions'

export default connect(
    store => (
        {
            data: store.detailList,
        }
    ),
    { changeItemBoxVal },
)(Component);