import React from 'react';

import {
    InputLabel,
    TextInput,
} from './styledInput';

const Input = ({ text, onChangeHandler, width }) => (
    <InputLabel width={width}>
        {text}
        <TextInput
            type="text"
            onChange={onChangeHandler}
        />
    </InputLabel>
);

export default Input;
