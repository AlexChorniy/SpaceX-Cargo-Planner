import React, { useState } from 'react';

import LoadButton from '../LoadButton';
import SaveButton from '../SaveButton';
import Imput from '../Input';

import { debounce } from '@assets/helpers';

import {
    ControlPanel,
    Banner,
    SearchContainer,
    SearchIcon,
    Buttons,
} from './controlPanelStyles';

const CtrlPanel = ({ setTextValue }) => {
    const [text, setText] = useState('text');

    const onChangeHandler = event => {
        const val = event.target.value;
        setText(val);
        debounceOnChange(val);
    };

    let debounceOnChange = debounce(setTextValue, 300);

    return (
        <ControlPanel>
            <Banner>Cargo Planner</Banner>
            <SearchContainer>
                <SearchIcon />
                <Imput text={text} onChangeHandler={onChangeHandler} />
            </SearchContainer>
            <Buttons>
                <LoadButton />
                <SaveButton />
            </Buttons>
        </ControlPanel>
    )
};

export default CtrlPanel;
