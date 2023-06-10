import { takeEvery, put } from 'redux-saga/effects';

function* updateAccuracySaga() {
  yield put({ type: 'UPDATE_ACCURACY' });
}

function* watchTypingActions() {
  yield takeEvery('INCREMENT_TOTAL_KEYS_PRESSED', updateAccuracySaga);
}

export default function* typingSaga() {
  yield watchTypingActions();
}
