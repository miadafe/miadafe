import {Action, action, Thunk, thunk, createStore, createTypedHooks, Store} from 'easy-peasy';

export interface StoreModel{
    wheelNumber: number;
    views: string[];
    setWheelNumber: Action<StoreModel, number>;
    archiveView: number;
    setArchiveView: Action<StoreModel, number>;
}

const store: StoreModel= {
    wheelNumber: 0,
    views:["list view", "photo view", "archive view"],
    setWheelNumber: action((state, payload)=>{
        state.wheelNumber = payload;
    }),
    archiveView: 0,
    setArchiveView: action((state, payload) => {
        state.archiveView = payload;
    })
}

export default store;