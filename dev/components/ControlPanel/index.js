import { connect } from 'react-redux';

import { setParsedData } from '../../../redux/actions';
import Component from './ControlPanel'

export default connect(
    store => ({}),
    { setParsedData },
)(Component);

// export default connect(
//     store => (
//         { counter: store.counter }
//     ),
//     { increment, decrement },
// )(Component);
