import configureStore from '../store';
//import { initialState } from './examples';


export default function init() {
  const store = configureStore();
  return store;
}
