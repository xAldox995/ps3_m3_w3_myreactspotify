// Action Types
export const SET_MUSIC_DATA = 'SET_MUSIC_DATA';
export const FETCH_MUSIC_FAILURE = 'FETCH_MUSIC_FAILURE';

// Action Creators
export const setMusicData = (genre, data) => ({
  type: SET_MUSIC_DATA,
  payload: { data }
});

export const fetchMusicFailure = (error) => ({
  type: FETCH_MUSIC_FAILURE,
  payload: error
});