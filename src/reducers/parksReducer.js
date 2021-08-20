export default function parksReducer (state = { name: '', location: '', image: '', loading: false }, action) {

  switch (action.type) {

    case "ADD_PARK":
      return { state }

    default:
      return state
  }

}