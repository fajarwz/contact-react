import axios from "axios";
import Toast from "../../components/Toast";
import getAllContact from "./getAllContact";

const updateContact = ({ user }, id) => {
  return function (dispatch) {
    axios({
      url: `${process.env.REACT_APP_API_HOST}/contacts/${id}`,
      method: "put",
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
          title: `${result.data.name} Contact updated successfully`,
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

export default updateContact;
