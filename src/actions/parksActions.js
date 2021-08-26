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

export const authenticateUser = (user) => {
  console.log("userSignup Action Creator", user)
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  }
  return (dispatch) => {
    dispatch({ type: "USER_AUTH_LOADING" });
    fetch("http://localhost:3000/users", configObj)
      .then(resp => resp.json())
      .then(respJson => {
        console.log("userSignupServerResponse", respJson)
        dispatch({ type: "AUTHENTICATE_USER", user: respJson })
      })
      .catch(error => console.log("Authentication Error", error))
  }
}