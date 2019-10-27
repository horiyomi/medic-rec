import { call, put, takeEvery, takeLatest, all, select } from 'redux-saga/effects'
import { createRequest, check401 } from './utils';
import { LOGOUT } from './constants';
import { tokenSelector } from './reducer';


function* handleExpiredToken(res) {
    // console.log('here')
    try {
        yield call(check401, res)
        return false
    } catch (error) {
        // console.log(error)
        // handle expired token
        yield put({ type: LOGOUT })
        return true
    }

}

export function* makeRequest(url, config, payload) {
    let res
    try {
        const token = yield select(tokenSelector)
        const req = yield call(createRequest, url, { ...config, body: payload }, token)
        res = yield call(fetch, req)
        const tokenExpired = yield call(handleExpiredToken,res)
        if(!tokenExpired){
            return res
        }
        return 'expiredToken'
    } catch (error) {
        throw error
    }
}