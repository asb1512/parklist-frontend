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
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  }
  return (dispatch) => {
    dispatch({ type: "LOADING_ACCOUNT_CREATION" });
    fetch("http://localhost:3000/users", configObj)
      .then(resp => resp.json())
      .then(respJson => {
        console.log("userSignupServerResponse", respJson)
        dispatch({ type: "CREATE_USER", user: respJson })
      })
      .catch(error => console.log("Signup Error", error))
  }
}

export const userLogin = (user) => {
  console.log("userLogin Action Creator", user)
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  }
  return (dispatch) => {
    dispatch({type: "AUTHENTICATING_USER"});
    
  }
}