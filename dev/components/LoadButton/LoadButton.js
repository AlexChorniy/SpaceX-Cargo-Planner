import React from 'react';
import { func } from "prop-types";

import withLSCtrl from '../../hoc/withLSCtrl';

import { LoadButton, UploadElement } from './loadButStyles';

const Load = ({ fileSelectedHandler }) => (
    <LoadButton>
        Load
        <UploadElement
            onChange={fileSelectedHandler}
        />
    </LoadButton>
);

Load.propTypes = {
    fileSelectedHandler: func.isRequired,
};

export default withLSCtrl(Load);
