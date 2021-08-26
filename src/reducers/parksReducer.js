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

    case "USER_AUTH_LOADING":
      return {
        ...state,
        authLoading: true,
      }

    case "AUTHENTICATE_USER":
      return {
        ...state,
        authLoading: false,
        currentUser: action.user,
      }

    default:
      return state
  }

}