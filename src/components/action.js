import {CHANGE_SEARCH_FIELD} from './constant'

export const setSearchField = (text) => {
    return {
    type:CHANGE_SEARCH_FIELD,
    payload:text
}}