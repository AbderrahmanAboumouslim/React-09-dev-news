import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        numPages: action.payload.numPages,
      };
    default:
      throw new Error(`Issue(s) in ${action.type} action type **** `);
  }
};
export default reducer;
