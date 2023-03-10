import actionTypes from "../action/actionTypes";

const initState = {
  curSongId: null,
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.sid || null,
      };

    default:
      return state;
  }
};

export default musicReducer;
