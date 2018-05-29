import {LOADING_EMPLOYEES, LOAD_ERROR_EMPLOYEES, LOAD_EMPLOYEES_SUCCESS} from '../constants';

export function loadEmployees(link){
    return (dispatch) => {
        dispatch(employeesAreLoading(true));

        fetch(link)
            .then(response => {
                if (!response.ok){
                    throw Error(response.statusText)
                }

                dispatch(employeesAreLoading(false));

                return response;
            })
            .then(response => {
                return response.json();
            })
            .then(data => dispatch(employeesLoadedSuccessfully(data)))
            .catch(() => dispatch(employeesLoadedWithErrors(true)))
    };
}
export function employeesLoadedSuccessfully(employees){
    return {
        type: LOAD_EMPLOYEES_SUCCESS,
        employees
    }
}
export function employeesAreLoading(bool){
    return {
        type: LOADING_EMPLOYEES,
        isLoading: bool
    }
}

export function employeesLoadedWithErrors(bool){
    return {
        type: LOAD_ERROR_EMPLOYEES,
        withErrors: bool
    }
}

