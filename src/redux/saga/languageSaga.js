import { put, takeLatest } from "redux-saga/effects";
import { changeLanguage, changeLanguageSuccess } from "../slices/languageSlice";

function* changeLanguageS(action) {
  //   const data = yield call(addTodoAPI, action.payload);
  yield put(changeLanguageSuccess(action.payload));
}

export function* languageSaga() {
  yield takeLatest(changeLanguage().type, changeLanguageS);
}
