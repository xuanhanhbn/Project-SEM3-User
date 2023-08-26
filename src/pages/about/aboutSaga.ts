import { call, put, takeLatest,delay,fork,take } from 'redux-saga/effects';
import { aboutActions } from './aboutSlice';
import { responseAboutList, responseDataAboutList } from './type';
import getAboutDataApi from './api';

function* onGetAboutData() {
  try {
    const response: responseAboutList<responseDataAboutList> = yield call(getAboutDataApi.getAbout);
    // Sẽ cần kiểm tra điều kiện khi nào thành công thì mới put data, nhưng hiện tại chưa xác định được response nên sẽ để tạm như này
    yield put(aboutActions.getListAboutSuccess(response));
  } catch (error) {
    console.log('Failed to fetch city list', error);
    yield put(aboutActions.getListAboutFailed());
  }
}


export default function* aboutSaga() {
  yield takeLatest(aboutActions.getListAbout,onGetAboutData);

}
