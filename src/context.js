import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  loading: true,
  query: "javascript",
  hits: [],
  numPages: 0,
  page: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, numPages: data.nbPages },
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
