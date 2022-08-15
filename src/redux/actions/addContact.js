import axios from "axios";
import Toast from "../../components/Toast";
import getAllContact from "./getAllContact";

const addContact = ({ user }) => {
  return function (dispatch) {
    axios({
      url: "http://localhost:4000/contacts",
      method: "post",
      data: {
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        category: user.category,
      },
    })
      .then((result) => {
        Toast.fire({
          icon: "success",
          title: `${result.data.name} contact added successfully`,
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

export default addContact;
