import {Action, action, Thunk, thunk, createStore, createTypedHooks, Store} from 'easy-peasy';

export interface PhotoProjectModel{
    title: string,
    photos:string[],
    photoCaption:string,
    content: string,
    dateFinished: string
}


export interface StoreModel{
    wheelNumber: number;
    mainImg: number;
    views: string[];
    setWheelNumber: Action<StoreModel, number>;
    archiveView: number;
    setArchiveView: Action<StoreModel, number>;
    photoProjectModel: PhotoProjectModel;
}

const store: StoreModel= {
    wheelNumber: 0,
    mainImg:0,
    views:["list view", "photo view", "archive view"],
    setWheelNumber: action((state, payload)=>{
        state.wheelNumber = payload;
    }),
    archiveView: 0,
    setArchiveView: action((state, payload) => {
        state.archiveView = payload;
    }),
    photoProjectModel:{
        title:"blah",
        photos:["an img", "another"],
        photoCaption:"filler text",
        content: "some slightly longer text. here.. i allow myself to . bhegh",
        dateFinished: "some date"
    }

}

export default store;