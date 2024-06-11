import {
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    GET_CATEGORY_LIST_REQUEST,
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    UPDATE_STATUS_CHANGE_REQUEST,
    UPDATE_STATUS_CHANGE_SUCCESS,
    UPDATE_STATUS_CHANGE_FAIL,
} from './actionType';

export const createCategoryRequest = (data) => ({
    type: CREATE_CATEGORY_REQUEST,
    payload: data,
});

export const createCategorySuccess = (data) => ({
    type: CREATE_CATEGORY_SUCCESS,
    payload: data,
});

export const createCategoryFail = (data) => ({
    type: CREATE_CATEGORY_FAIL,
    payload: data,
});

export const updateCategoryRequest = (data) => ({
    type: UPDATE_CATEGORY_REQUEST,
    payload: data,
});

export const updateCategorySuccess = (data) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: data,
});

export const updateCategoryFail = (data) => ({
    type: UPDATE_CATEGORY_FAIL,
    payload: data,
});

export const getCategoryListRequest = (data) => ({
    type: GET_CATEGORY_LIST_REQUEST,
    payload: data,
})

export const getCategoryListSuccess = (data) => ({
    type: GET_CATEGORY_LIST_SUCCESS,
    payload: data,
})

export const getCategoryListFail = (data) => ({
    type: GET_CATEGORY_LIST_FAIL,
    payload: data,
})

export const deleteCategoryRequest = (data) => ({
    type: DELETE_CATEGORY_REQUEST,
    payload: data,
})

export const deleteCategorySuccess = (data) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: data,
})

export const deleteCategoryFail = (data) => ({
    type: DELETE_CATEGORY_FAIL,
    payload: data,
})

export const updateStatusChangeRequest = (data) => ({
    type: UPDATE_STATUS_CHANGE_REQUEST,
    payload: data,
})

export const updateStatusChangeSuccess = (data) => ({
    type: UPDATE_STATUS_CHANGE_SUCCESS,
    payload: data,
})

export const updateStatusChangeFail = (data) => ({
    type: UPDATE_STATUS_CHANGE_FAIL,
    payload: data,
})