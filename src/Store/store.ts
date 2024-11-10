import {Action, action, Thunk, thunk, createStore, createTypedHooks, Store} from 'easy-peasy';
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';

import starBikini from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/star-model.jpg';
import bikiniToggles from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/star-toggles.jpg';
import bikiniStones from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/stones-set.jpg';
import netSkirt from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/net-skirt.jpg';

import swirlyBag from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/swirly-bag.jpg'
import swirlyBagHolding from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/swirly-bag-hand.jpg';

import saturnBag from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/saturn-bag.jpg';
import saturnBeads from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/saturn-beads.jpg';
import saturnProcess from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/saturn-inside.jpg';
import saturnDesign from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/saturn-design.jpg';

import valenciaBalcony from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/valencia-balcony.jpg';
import ealing from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/ealing.jpg';
import ferry from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/ferry.jpg';
import canaan from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/canaan.jpg';
import graduates from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/graduates.jpg';
import lucas from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lucas.jpg';
import mash from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/mash-tulip.jpg';



export interface PhotoProjectModel{
    title: string,
    photos:string[],
    photoCaption:string,
    dateFinished: string
}


export interface StoreModel{
    wheelNumber: number;
    mainImg: number;
    views: string[];
    setWheelNumber: Action<StoreModel, number>;
    archiveView: number;
    setArchiveView: Action<StoreModel, number>;
    photoProjectModels: PhotoProjectModel[];
    polaroids: string[];
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
    photoProjectModels:
    [
    {
        title:"Star Bikini",
        photos:[starBikini, bikiniToggles, bikiniStones, netSkirt],
        photoCaption:"filler text",
        dateFinished: "some date"
    },
        {title:"Swirly Bag",
        photos:[swirlyBag, swirlyBagHolding],
        photoCaption:"filler text",
        dateFinished: "08.05.2022"
    },
        {title:"Saturn Bag",
        photos:[saturnDesign, saturnBeads, saturnProcess, saturnBag],
        photoCaption:"filler text",
        dateFinished: "17.04.2024"
    }
    ],
    polaroids: [valenciaBalcony, ealing, ferry, canaan, graduates, lucas, mash ]
}

export default store;