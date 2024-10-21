import {Action, action, Thunk, thunk, createStore, createTypedHooks, Store} from 'easy-peasy';

export interface StoreModel{
    wheelNumber: number;
    setWheelNumber: Action<StoreModel, number>;
}

const store: StoreModel= {
    wheelNumber: 0,
    setWheelNumber: action((state, payload)=>{
        state.wheelNumber = payload;
    }),
}

export default store;