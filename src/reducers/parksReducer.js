export default function parksReducer (state = { name: '', location: '', image: '', loading: false }, action) {

  switch (action.type) {

    case "ADD_PARK_TO_USER":
      return { state }

    default:
      return state
  }

}