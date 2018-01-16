export default function reducer(state = {
    flatBondList: [],
    hasErrored: false,
    isLoading: false
  }, action) {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          flatBondList: action.flatBondList
        };
    }
    return state;
  }