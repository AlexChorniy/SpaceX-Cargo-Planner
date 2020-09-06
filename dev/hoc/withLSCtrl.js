import React from 'react';
import { func } from "prop-types";
import { workWithLS } from '../assets/helpers';
const { setData, removeData } = workWithLS;

let parsedData = [];

const withLSCtrl = WrappedComponent => ({ setParsedData, isLSExist }) => {

    const fileSelectedHandler = event => {
        const file = event.target?.files[0];
        const fileExtension = file?.type.split('/')[1];
        if (fileExtension === "json") {
            const reader = new FileReader();
            reader.onload = (
                () => (e) => {
                    const getParsedData = JSON.parse(e.target.result);
                    if (getParsedData) {
                        parsedData = [...getParsedData];
                    }
                    else isLSExist(false);
                }
            )();
            reader.readAsText(file);
        }
        else isLSExist(false);
    };

    const saveToLS = event => {
        setData('dataList', JSON.stringify(parsedData));
        setParsedData(parsedData);
        isLSExist(true);
    }

    return <WrappedComponent
        fileSelectedHandler={fileSelectedHandler}
        saveToLS={saveToLS}
    />;
};

withLSCtrl.propTypes = {
    fileSelectedHandler: func.isRequired,
    setParsedData: func.isRequired,
    isLSExist: func.isRequired,
};

export default withLSCtrl;
