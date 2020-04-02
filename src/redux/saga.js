import { delay } from 'redux-saga';
import {GET_CURRENCY_ASYNC, GET_CURRENCY} from '../redux/constant';
import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';

const url = {url:'https://api.exchangeratesapi.io/latest', method:'GET'};

function* getCurrencyAsyc(){
    const data = yield call(axios, url);
    yield put({type: GET_CURRENCY, value: data});
}

export function* addUserfn(){
    yield takeEvery(GET_CURRENCY_ASYNC, getCurrencyAsyc);
}