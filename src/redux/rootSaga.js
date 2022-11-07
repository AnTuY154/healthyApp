import { all } from "redux-saga/effects";
import { languageSaga } from "./saga/languageSaga";

export default function* rootSaga() {
  yield all([languageSaga()]);
}
