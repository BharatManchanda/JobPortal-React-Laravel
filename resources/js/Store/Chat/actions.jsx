import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    GET_MESSAGE_LIST_REQUEST,
    GET_MESSAGE_LIST_SUCCESS,
    GET_MESSAGE_LIST_FAIL,
    DELETE_MESSAGE_LIST_REQUEST,
    DELETE_MESSAGE_LIST_SUCCESS,
    DELETE_MESSAGE_LIST_FAIL,
} from './actionType'

export const sendMessageRequest = (data) => ({
    type:SEND_MESSAGE_REQUEST,
    payload:data,
})

export const sendMessageSuccess = (data) => ({
    type:SEND_MESSAGE_SUCCESS,
    payload:data,
})

export const sendMessageFail = (data) => ({
    type:SEND_MESSAGE_FAIL,
    payload:data,
})

export const getMessageListRequest = (data) => ({
    type:GET_MESSAGE_LIST_REQUEST,
    payload:data,
})

export const getMessageListSuccess = (data) => ({
    type:GET_MESSAGE_LIST_SUCCESS,
    payload:data,
})

export const getMessageListFail = (data) => ({
    type:GET_MESSAGE_LIST_FAIL,
    payload:data,
})

export const deleteMessageListRequest = (data) => ({
    type:DELETE_MESSAGE_LIST_REQUEST,
    payload:data,
})

export const deleteMessageListSuccess = (data) => ({
    type:DELETE_MESSAGE_LIST_SUCCESS,
    payload:data,
})

export const deleteMessageListFail = (data) => ({
    type:DELETE_MESSAGE_LIST_FAIL,
    payload:data,
})