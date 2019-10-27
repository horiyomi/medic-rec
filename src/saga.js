import { all } from 'redux-saga/effects'
import { authSagaWatcher } from './features/Auth/saga'



export default function* rootSaga(){
    yield([
        authSagaWatcher()
    ])
}   