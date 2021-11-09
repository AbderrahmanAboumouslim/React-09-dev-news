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
    case HANDLE_SEARCH:
      return { ...state, page: 0, query: action.payload };
    case HANDLE_PAGE:
      if (action.payload === "decrease") {
        let prevPage = state.page - 1;
        if (prevPage < 0) prevPage = state.numPages - 1;
        return { ...state, page: prevPage };
      }
      if (action.payload === "increase") {
        let nextPage = state.page + 1;
        if (nextPage > state.numPages - 1) nextPage = 0;
        return { ...state, page: nextPage };
      }

    case REMOVE_STORY:
      const newHits = state.hits.filter(
        (story) => story.objectID !== action.payload
      );
      return { ...state, hits: newHits };
    default:
      throw new Error(`Issue(s) in ${action.type} action type **** `);
  }
};
export default reducer;
