import axios from "axios";
import Swal from "sweetalert2";

const getAllContact = () => {
  return function (dispatch) {
    dispatch({ type: "LOADING", payload: true });
    axios({
      url: `${process.env.REACT_APP_API_HOST}/contacts`,
      method: "get",
    })
    .then(({ data }) => {
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ALL_CONTACTS", payload: data });
    })
    .catch((err) => {
      dispatch({ type: "LOADING", payload: false });

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${err.message} ${err.status}`,
        showConfirmButton: false,
        timer: 3000,
      });
    });
  };
};

export default getAllContact;