import {createTypedHooks} from 'easy-peasy';
import {StoreModel} from './store';

const {useStoreActions, useStoreState, useStoreDispatch} = createTypedHooks<StoreModel>();

export {useStoreActions, useStoreState, useStoreDispatch};