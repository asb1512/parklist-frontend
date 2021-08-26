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

export const userSignup = (user) => {
  console.log("userSignup Action Creator", user)
  const configObj = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  }
  return (dispatch) => {
    dispatch({type: "LOADING_ACCOUNT_CREATION"});
    fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(respJson => {
      dispatch({ type: "CREATE_USER"})
    })
    .catch(error => console.log(error))
  }
}