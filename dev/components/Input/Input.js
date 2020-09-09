import React, { useState, useEffect } from 'react';

import {
    InputLabel,
    TextInput
} from './styledInput';

const Input = ({ text, onChangeHandler, width }) => {
    return (
        <InputLabel width={width} >
            {text}
            <TextInput
                type="text"
                onChange={onChangeHandler}
            />
        </InputLabel>
    )
};

export default Input;
