import React, { useState } from 'react';

import {
    ControlPanel,
    Banner,
    SearchContainer,
    SearchIcon,
    InputLabel,
    TextInput,
    Buttons,
    LoadButton,
    UploadElement,
    SaveButton,
} from './controlPanelStyles';

export default () => {
    const [text, setText] = useState('text');
    const onChangeHandler = event => {
        setText(event.target.value);
    };
    const fileSelectedHandler = event => {
        const newFile = event.target.files;
        console.log('newFile');
    };
    return (
        <ControlPanel>
            <Banner>Cargo Planner</Banner>
            <SearchContainer>
                <SearchIcon />
                <InputLabel htmlFor='staff' >
                    {text}
                    <TextInput
                        // ref={fwdRef}
                        type="text"
                        onChange={onChangeHandler}
                        name='staff'
                        id="staff"
                    />
                </InputLabel>
            </SearchContainer>
            <Buttons>
                <LoadButton>
                    Load
                    <UploadElement onChange={fileSelectedHandler} />
                </LoadButton>
                <SaveButton>Save</SaveButton>
            </Buttons>
        </ControlPanel>
    )
};
