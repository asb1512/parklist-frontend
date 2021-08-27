const BASE_URL = "http://localhost:3000/"

export const fetchParks = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_PARKS" });
    fetch(`${BASE_URL}parks`)
      .then(resp => resp.json())
      .then(respJson => {
        dispatch({ type: "FETCH_PARKS", respJson })
      })
  }
}

export const authenticateUser = (user) => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  }
  return (dispatch) => {
    dispatch({ type: "USER_AUTH_LOADING" });
    fetch(`${BASE_URL}users`, configObj)
      .then(resp => resp.json())
      .then(respJson => {
        dispatch({ type: "AUTHENTICATE_USER", user: respJson })
      })
      .catch(error => console.log("Authentication Error", error))
  }
}

export const addParkToUserList = (info) => {
  let fetchPath;
  info.desired ? fetchPath = "desired-parks" : fetchPath = "visited-parks"
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ info })
  }
  return (dispatch) => {
    dispatch({ type: "USER_PARK_LOADING" });
    fetch(BASE_URL + fetchPath, configObj)
      .then(resp => resp.json())
      .then(respJson => {
        dispatch({ type: "UPDATE_USER_LIST", respJson })
      })
      .catch(error => console.log(error))
  }
}

export const removeParkFromUserList = (info) => {
  let fetchPath;
  info.desired ? fetchPath = "desired-parks" : fetchPath = "visited-parks"
  console.log("removeParkFromUserList Action Creator", info)
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ info })
  }
  return (dispatch) => {
    dispatch({ type: "USER_PARK_LOADING" });
    fetch(BASE_URL + fetchPath, configObj)
      .then(resp => resp.json())
      .then(respJson => {
        console.log("removeParkFromUserList Server Response", respJson)
        dispatch({ type: "UPDATE_USER_LIST", respJson })
      })
      .catch(error => console.log(error))
  }
}