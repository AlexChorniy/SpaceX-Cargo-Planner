import { string } from "prop-types";

export const setParsedData = array => ({ type: 'SET_PARSED_DATA', payload: array });
export const isLSExist = bool => ({ type: 'IS_LS_EXIST', payload: bool });
export const setLink = obj => ({ type: 'SET_LINK', payload: obj });
export const setTextValue = string => ({ type: 'SET_TEXT_VALUE', payload: string });
