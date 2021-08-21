export default function parksReducer(state = [], action) {

  switch (action.type) {

    case "LOADING_PARKS":
      // return {
      //   ...state,
      //   parks: [...state.parks],
      //   loading: true
      // }
      // make sure and code this up before you move on
      return {
        ...state,
        parks: state.parks,
        loading: true,
      }

    case "ADD_PARKS":
      return {
        ...state,
        parks: action.respJson,
        loading: false
      }

    case "ADD_PARK_TO_USER":
      return { state }

    default:
      return state
  }

}