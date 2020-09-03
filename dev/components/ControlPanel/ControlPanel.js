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

export default ({ increment }) => {
    const [text, setText] = useState('text');
    const [store, setStore] = useState([]);

    const onChangeHandler = event => {
        setText(event.target.value);
    };

    const fileSelectedHandler = event => {
        const file = event.target?.files[0];
        const reader = new FileReader();
        reader.onload = (
            () => (e) => {
                const result = e.target.result;
                const getParsed = JSON.parse(result);
                if (getParsed) setStore(getParsed);
                console.log(getParsed);
            }
        )();

        reader.readAsText(file);
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
                <LoadButton>
                    Load
                    <UploadElement onChange={fileSelectedHandler} />
                </LoadButton>
                <SaveButton onClick={increment}>Save</SaveButton>
            </Buttons>
        </ControlPanel>
    )
};
