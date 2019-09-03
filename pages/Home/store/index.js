import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import state from './state';

let store;

export default () => {
  if (store) {
    store.replaceState(state());
    return store;
  }
  store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state: state(),
  });
  return store;
}
