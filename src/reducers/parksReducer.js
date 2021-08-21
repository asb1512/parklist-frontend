export default function parksReducer(state = [], action) {

  switch (action.type) {

    case "LOADING_PARKS":
      // return {
      //   ...state,
      //   parks: [...state.parks],
      //   loading: true
      // }
      return {state}

    case "ADD_PARKS":
      return {
        ...state,
        parks: action.parks,
        loading: false
      }

    case "ADD_PARK_TO_USER":
      return { state }

    default:
      return state
  }

}