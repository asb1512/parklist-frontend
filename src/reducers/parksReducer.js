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

    case "UPDATE_CURRENT_VIEW":
      return {
        ...state,
        currentView: {park: action.park, show: true}
      }

    case "ADD_PARK_TO_USER":
      return { state }

    default:
      return state
  }

} 