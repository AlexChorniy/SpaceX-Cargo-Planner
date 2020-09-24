import React from 'react';
import { func } from 'prop-types';
import withLSCtrl from '@hoc/withLSCtrl';

import { SaveButton } from './saveButStyles';

const Save = ({ saveToLS }) => (
    <SaveButton onClick={saveToLS}>Save</SaveButton>
);

Save.propTypes = {
    saveToLS: func.isRequired,
};

export default withLSCtrl(Save);
