export const fetchParks = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PARKS" });
    fetch("http://localhost:3000/parks")
      .then(resp => resp.json())
      .then(respJson => {
        dispatch({ type: "ADD_PARKS", respJson })
      })
  }
}

export const userSignup = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_ACCOUNT_CREATION"});
    
  }
}