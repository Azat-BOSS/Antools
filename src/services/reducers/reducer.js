import { 
  GET_DATA_TOOLS,
} from "../constants/constants";

const reducerStateDefault = {
  dataCardTool: [],
  
}

export const mainReducer = (state = reducerStateDefault, action) => {
  switch (action.type) {
    case GET_DATA_TOOLS:
      return {
        ...state,
        dataCardTool: action.payload,
      }
    default:
      return state
  }
}
