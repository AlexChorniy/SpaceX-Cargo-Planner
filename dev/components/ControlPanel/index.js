import { connect } from 'react-redux';

import { increment, decrement } from '../../../redux/actions';
import Component from './ControlPanel'

export default connect(
    store => ({}),
    { increment, decrement },
)(Component);

// export default connect(
//     store => (
//         { counter: store.counter }
//     ),
//     { increment, decrement },
// )(Component);
