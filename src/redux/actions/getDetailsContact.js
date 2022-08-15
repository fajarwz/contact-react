import axios from "axios";
import Swal from "sweetalert2";

const getDetailsContact = (id) => {
  return function(dispatch) {
    axios({
      url: `http://localhost:4000/contacts/${id}`,
      method: "get",
    })
    .then(({ data }) => {
      dispatch({ type: "DETAILS_CONTACT", payload: data });
    })
    .catch((err) => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${err.message} ${err.status}`,
        showConfirmButton: false,
        timer: 3000,
      });
    });
  }
}

export default getDetailsContact;