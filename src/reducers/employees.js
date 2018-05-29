import {LOADING_EMPLOYEES, LOAD_ERROR_EMPLOYEES, LOAD_EMPLOYEES_SUCCESS} from '../constants';

const initialState = {
    data: [],
    withErrors: false,
    isLoading: false
}

export default function employees(state = initialState, action) {
    switch (action.type) {
        case LOAD_EMPLOYEES_SUCCESS:
            return {
                ...state,
                data: action.employees
            }
        case LOAD_ERROR_EMPLOYEES:
            return {
                ...state,
                withErrors: action.withErrors
            }
        case LOADING_EMPLOYEES:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
};