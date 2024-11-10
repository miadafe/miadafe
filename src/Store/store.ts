import {Action, action, Thunk, thunk, createStore, createTypedHooks, Store} from 'easy-peasy';
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';

import starBikini from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/star-model.jpg';
import bikiniToggles from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/star-toggles.jpg';
import bikiniStones from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/stones-set.jpg';
import netSkirt from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/net-skirt.jpg';

import peachBag from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/peach-bag.jpg'
import peachBagHolding from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/peach-bag-top.jpg';

import swirlyBag from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/swirly-bag.jpg'
import swirlyBagHolding from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/swirly-bag-hand.jpg';

import saturnBag from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/saturn-bag.jpg';
import saturnBeads from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/saturn-beads.jpg';
import saturnProcess from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/saturn-inside.jpg';
import saturnDesign from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/saturn-design.jpg';

import checkScarf from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/check-scarf.jpg'
import scarfModel from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/scarf-model1.jpg';
import scarfModel1 from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/scarf-model2.jpg';

import valenciaBalcony from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/valencia-balcony.jpg';
import ealing from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/ealing.jpg';
import ferry from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/ferry.jpg';
import canaan from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/canaan.jpg';
import graduates from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/graduates.jpg';
import lucas from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lucas.jpg';
import mash from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/mash-tulip.jpg';

//import diaries from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/book-diaried.txt';

export interface BookDiaryModel{
    title: string,
    author: string,
    photos:string[],
    photoCaption:string,
    dateFinished: string,
    content: string
}

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
    bookDiaryEntries: BookDiaryModel[];
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
    },
    {title:"Peach Bag",
        photos:[peachBag, peachBagHolding],
        photoCaption:"filler text",
        dateFinished: "sometime"
    },
        {title:"Check Scarf",
        photos:[checkScarf, scarfModel1],
        photoCaption:"filler text",
        dateFinished: "some other time"
    }
    ],
    bookDiaryEntries:
    [
        {
            title:"One Hundred Years of Solitude",
            author: "Gabriel Garcia Marquez",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "09.11.24"
        },
    {
            title:"Natives: Race & Class in the Ruins of Empire",
            author: "Akala",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "26.10.24"
        },
    {
            title:"No Name in the Street",
            author: "James Baldwin",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "17.08.24"
        },
    {
            title:"First Journey",
            author: "Winston S. Churchill",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "25.07.24"
        },
    {
            title:"Hostile Environment",
            author: "Maya Goodfellow",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "20.05.24"
        },
    {
            title:"Dune",
            author: "Frank Herbert",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "09.05.24"
        },
    {
            title:"Behind Iranian Lines",
            author: "John Simpson",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "13.04.24"
        },
    {
            title:"Go Tell it on the Mountain",
            author: "James Baldwin",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "15.03.24"
        },
    {
            title:"Partition",
            author: "Barney Spunner White",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "15.02.24"
        },
    {
            title:"Hidden Heritage",
            author: "Fatima Manji",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "15.11.23"
        },
    {
            title:"The New Age of Empire",
            author: "Kehinde Andrews",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "15.10.23"
        },
    {
            title:"AKIRA (vols 1-6)",
            author: "Katsuhiro Otomo",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "15.01.23"
        },
    {
            title:"How Britain Broke the World",
            author: "Arthur Snell",
            photos:[],
            content:"",
            photoCaption:"photo caption",
            dateFinished: "01.10.23"
        }
    ],
    polaroids: [valenciaBalcony, ealing, ferry, canaan, graduates, lucas, mash ]
}

export default store;