import { put, call, takeLatest } from 'redux-saga/effects'
import { REQUESTING_LOGIN, REQUESTING_REGISTER } from '../../constants'
import { makeRequest } from '../../commonSaga'
import { parseJSON } from '../../utils'

function* loginUserSaga({ payload, setErrors }) {
    
}

export function* authSagaWatcher() {
    yield takeLatest(REQUESTING_LOGIN, loginUserSaga)
}


