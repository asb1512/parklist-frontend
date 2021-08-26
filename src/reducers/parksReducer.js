export default function parksReducer(state = [], action) {

  switch (action.type) {

    case "LOADING_PARKS":
      return {
        ...state,
        parks: [],
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

    case "LOADING_ACCOUNT_CREATION":
      return {
        ...state,
        loading: true
      }

    case "CREATE_USER":
      return {
        state
      }

    default:
      return state
  }

}