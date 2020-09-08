import React, { useState } from 'react';
import LoadButton from '../LoadButton';
import SaveButton from '../SaveButton';
import { debounce } from '../../assets/helpers';

import {
    ControlPanel,
    Banner,
    SearchContainer,
    SearchIcon,
    InputLabel,
    TextInput,
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
                <InputLabel htmlFor='staff' >
                    {text}
                    <TextInput
                        type="text"
                        onChange={onChangeHandler}
                        name='staff'
                        id="staff"
                    />
                </InputLabel>
            </SearchContainer>
            <Buttons>
                <LoadButton />
                <SaveButton />
            </Buttons>
        </ControlPanel>
    )
};

export default CtrlPanel;
