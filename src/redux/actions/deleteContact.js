import axios from "axios";
import Toast from "../../components/Toast";
import getAllContact from "./getAllContact";

const deleteContact = (id, name) => {
  return function (dispatch) {
    axios({
      url: `http://localhost:4000/contacts/${id}`,
      method: "delete",
    })
      .then(() => {
        Toast.fire({
          icon: "success",
          title: `${name} Contact deleted successfully`,
        });

        dispatch(getAllContact());
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `${err.message} - ${err.status}`,
        });
      });
  };
};

export default deleteContact;
