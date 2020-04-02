import { GET_CURRENCY_ASYNC } from "./constant";


export function getDataAsync(payload) {
    return{
        type: GET_CURRENCY_ASYNC,
        payload
    }
        
};

