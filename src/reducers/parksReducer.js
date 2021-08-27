export default function parksReducer(state = [], action) {

  switch (action.type) {

    case "LOADING_PARKS":
      return {
        ...state,
        parks: [],
        loading: true,
      }

    case "FETCH_PARKS":
      return {
        ...state,
        parks: action.respJson,
        loading: false
      }

    case "USER_PARK_LOADING":
      return {
        ...state, 
        userListLoading: true,
      }

    case "UPDATE_USER_LIST":
      return {
        ...state,
        userListLoading: false,
        currentUser: action.respJson,
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

    case "USER_LOGOUT":
      const newState = {...state}
      delete newState.currentUser
      delete newState.authLoading
      return newState

    default:
      return state
  }

}