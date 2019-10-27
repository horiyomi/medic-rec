import { put, call, takeLatest } from 'redux-saga/effects'
import { REQUESTING_LOGIN, REQUESTING_REGISTER, REQUEST_LOGIN } from '../../constants'
import { makeRequest } from '../../commonSaga'
import { parseJSON } from '../../utils'

function* loginUserSaga({ payload, setErrors }) {
    yield put({ type: REQUESTING_LOGIN })
}

export function* authSagaWatcher() {
    yield takeLatest(REQUEST_LOGIN, loginUserSaga)
}


