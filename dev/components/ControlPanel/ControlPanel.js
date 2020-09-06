import React, { useState } from 'react';
import LoadButton from '../LoadButton';
import SaveButton from '../SaveButton';

import {
    ControlPanel,
    Banner,
    SearchContainer,
    SearchIcon,
    InputLabel,
    TextInput,
    Buttons,
} from './controlPanelStyles';

const CtrlPanel = () => {
    const [text, setText] = useState('text');

    const onChangeHandler = event => {
        setText(event.target.value);
    };

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
