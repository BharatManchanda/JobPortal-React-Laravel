import {fork, all} from 'redux-saga/effects';
import auth from './Auth/Login/Saga';
import register from './Auth/Register/Saga';
import user from './User/saga';
import job from './Job/saga';
import chat from './Chat/saga';

export default function* sagas() {
    yield all([
        fork(auth),
        fork(register),
        fork(user),
        fork(job),
        fork(chat),
    ]);
}