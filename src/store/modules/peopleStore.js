import Axios from 'axios';

import GettersUtility from '@/store/utilities/getters';
import MutationsUtility from '@/store/utilities/mutations';

const BASE_URL = `${process.env.VUE_APP_ROOT_API}`;

const M_SET_CLEAR = 'Reset';
const M_SET_DATA = 'SetData';
const M_SET_IS_LOADING = 'SetIsLoading';

const DATA = 'data';
const SV_IS_LOADING = 'isLoading';

const initialState = () => ({
  [DATA]: null,
  [SV_IS_LOADING]: false,
});

const actions = {
  Load: async (context) => {
    context.commit(M_SET_IS_LOADING, true);
    context.commit(M_SET_DATA, null);

    const requestObj = {
      url: `${BASE_URL}/people`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    Axios(requestObj)
      .then((response) => {
        context.commit(M_SET_DATA, response.data.results);
      })
      .catch(() => {
        throw Error('Could not fetch data');
      })
      .finally(() => {
        context.commit(M_SET_IS_LOADING, false);
      });
  },
};

const getters = {
  Data: GettersUtility.get(DATA),
  IsLoading: GettersUtility.get(SV_IS_LOADING),
};

const mutations = {
  [M_SET_CLEAR]: (stateP) => {
    const localState = stateP;
    Object.assign(localState, initialState());
  },
  [M_SET_DATA]: MutationsUtility.set(DATA),
  [M_SET_IS_LOADING]: MutationsUtility.set(SV_IS_LOADING),
};

const state = initialState();

export default {
  actions,
  getters,
  mutations,
  state,
};
