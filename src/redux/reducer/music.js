import { FETCH_MUSIC_FAILURE, SET_MUSIC_DATA } from "../actions";

const initialState = {
    data: {
      rock: [],
      pop: [],
      hiphop: []
    },
    error: null
  };
  
  const musicReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_MUSIC_DATA :
        return {
          ...state,
          data: {
            ...state.data,
            [action.payload.genre]: action.payload.data
          },
          error: null
        };
      case FETCH_MUSIC_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default musicReducer;
  