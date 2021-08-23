export const fetchParks = () => {
  console.log("start fetching")
  return (dispatch) => {
    dispatch({ type: "LOADING_PARKS" });
    fetch("http://localhost:3000/parks")
      .then(resp => resp.json())
      .then(respJson => {
        dispatch({ type: "ADD_PARKS", respJson })
        console.log("respJson", respJson)
      })
  }
} 