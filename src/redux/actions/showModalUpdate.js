const showModalUpdate = (data) => {
  return function(dispatch) {
    dispatch({ type: "SHOW_MODAL_UPDATE", payload: data });
  }
}

export default showModalUpdate;