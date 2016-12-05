import {createStore} from '../../node_modules/redux';
import Reducer from '../reducers/Reducer';
import State from '../State';

var state = new State();

const store = createStore(Reducer, state.getInitialState());

export default store;
