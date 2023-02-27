// src/reducers.js

export const reducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
      case "CLEAR_HISTORY":        
        newState = { ...state, computedFibs: [] };        
        return newState;
      case "SET_ERROR":
        newState = { ...state, err:action.err };        
        return newState;
      case "SET_NUMBER":
        newState = { ...state, num: action.num }        
        return newState;
      case "SET_FIBO":
        newState = { ...state, computedFibs: [
          ...state.computedFibs,
          { id: action.id, nth: action.nth, loading: action.loading }
        ]};
        return newState;        
      case "UPDATE_FIBO": {
        // Get the correct number object
        const curr = state.computedFibs.filter((c) => c.id === action.id)[0];

        // Get it's array index
        const idx = state.computedFibs.indexOf(curr);
        
        // Update the objects state
        curr.loading = false;
        curr.time = action.time;
        curr.fibNum = action.fibNum;

        state.computedFibs[idx] = curr;

        // Return all the state
        return { ...state };
      }
      default:
        return state;
    }
  };