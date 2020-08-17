export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

const initalState = {
  searchField: "",
};

export const searchRobots = (state = initalState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
