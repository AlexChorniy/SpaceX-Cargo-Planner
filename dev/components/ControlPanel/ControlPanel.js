import React, { useState } from 'react';
import { func } from "prop-types";

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

const CtrlPanel = ({ setParsedData }) => {
    const [text, setText] = useState('text');

    const onChangeHandler = event => {
        setText(event.target.value);
    };

    const fileSelectedHandler = event => {
        const file = event.target?.files[0];
        const reader = new FileReader();
        reader.onload = (
            () => (e) => {
                const result = e.target.result;
                const getParsedData = JSON.parse(result);
                if (getParsedData) setParsedData(getParsedData);
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
                <SaveButton>Save</SaveButton>
            </Buttons>
        </ControlPanel>
    )
};

CtrlPanel.propTypes = {
    setParsedData: func.isRequired,
};

export default CtrlPanel;
