import {takeEvery, takeLatest, call, put, select} from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function * fetchExampleTasksHandler () {
    try {
           const exampleTasks =  yield call(getExampleTasks)
           yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "zadania nie pobrały się")
    }
}

function* saveTasksInLocalStorageHandler() {
const tasks = yield select(selectTasks)
yield call(saveTasksInLocalStorageHandler, tasks)
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}